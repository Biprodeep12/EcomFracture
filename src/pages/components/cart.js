import styles from '@/styles/cart.module.css';
import Image from 'next/image';
import empbox from '@/images/empty.svg';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { auth, db } from '@/firebase/firebase';
import { Plus, Minus } from 'lucide-react';
import { useRouter } from 'next/router';
export default function Cart() {
  const [user, setUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [confirm, setConfirm] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        await fetchCartItems(currentUser.uid);
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchCartItems = async (uid) => {
    try {
      const userRef = doc(db, 'users', uid);
      const userDoc = await getDoc(userRef);

      if (userDoc.exists() && userDoc.data().cart) {
        setCartItems(
          userDoc
            .data()
            .cart.map((item) => ({ ...item, quantity: item.quantity || 1 })),
        );
      }
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
    setLoading(false);
  };

  const handleRemove = async (item) => {
    if (!user) return;

    try {
      const userRef = doc(db, 'users', user.uid);
      const userDoc = await getDoc(userRef);

      if (userDoc.exists()) {
        const currentCart = userDoc.data().cart || [];

        const updatedCart = currentCart.filter(
          (cartItem) => cartItem.title !== item.title,
        );

        await updateDoc(userRef, { cart: updatedCart });

        setCartItems(updatedCart);
      }
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };

  const handleQuantityChange = async (item, change) => {
    const updatedCart = cartItems.map((cartItem) =>
      cartItem.title === item.title
        ? { ...cartItem, quantity: Math.max(1, cartItem.quantity + change) }
        : cartItem,
    );

    setCartItems(updatedCart);

    try {
      const userRef = doc(db, 'users', user.uid);
      await updateDoc(userRef, { cart: updatedCart });
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  const totalAmount = cartItems.reduce(
    (total, item) =>
      total + Number(item.price.toString().replace(/,/g, '')) * item.quantity,
    0,
  );
  const totalOrgAnmount = cartItems.reduce(
    (total, item) =>
      total +
      Number(item.orgPrice.toString().replace(/,/g, '')) * item.quantity,
    0,
  );

  const router = useRouter();

  const handleClick = (item) => {
    router.push({
      pathname: '/Land',
      query: {
        title: item.title,
        price: item.price,
        orgPrice: item.orgPrice,
        image: item.image,
        features: item.features,
      },
    });
  };

  const handleCheck = (item) => {
    router.push({
      pathname: '/checkPage',
      query: {
        title: item.title,
        price: item.price,
        orgPrice: item.orgPrice,
        image: item.image,
        features: item.features,
      },
    });
  };

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <>
      <div className={styles.cartCont}>
        <div className={styles.cart}>
          {cartItems.length === 0 ? (
            <div className={styles.nothingCart}>
              <Image src={empbox} className={styles.empbox} alt='Empty Cart' />
              Your cart is empty!
              <Link href='/' className={styles.shopBtn}>
                Shop Now
              </Link>
            </div>
          ) : (
            <div className={styles.cartPage}>
              <div className={styles.cartItems}>
                {cartItems.map((item, index) => (
                  <div key={index} className={styles.cartItem}>
                    <Image
                      src={item.image}
                      width={100}
                      height={100}
                      alt={item.title}
                      className={styles.cartImage}
                      onClick={() => handleClick(item)}
                    />
                    <div className={styles.itemDetails}>
                      <h3
                        className={styles.itemTitle}
                        onClick={() => handleClick(item)}>
                        {item.title}
                      </h3>
                      <div className={styles.itemPrice}>
                        <h3 className={styles.itemP1}>
                          ₹
                          {(
                            Number(item.price.toString().replace(/,/g, '')) *
                            item.quantity
                          ).toLocaleString()}
                        </h3>
                        <p className={styles.itemP2}>
                          ₹
                          {(
                            Number(item.orgPrice.toString().replace(/,/g, '')) *
                            item.quantity
                          ).toLocaleString()}
                        </p>
                        <h3 className={styles.itemP3}>
                          {(
                            ((Number(
                              item.orgPrice.toString().replace(/,/g, ''),
                            ) -
                              Number(item.price.toString().replace(/,/g, ''))) /
                              Number(
                                item.orgPrice.toString().replace(/,/g, ''),
                              )) *
                            100
                          ).toFixed(0)}
                          % off
                        </h3>
                      </div>

                      <div className={styles.quantityControl}>
                        <button
                          onClick={() => handleQuantityChange(item, -1)}
                          className={styles.qtyBtn}>
                          <Minus size={16} />
                        </button>
                        <span className={styles.qty}>{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(item, 1)}
                          className={styles.qtyBtn}>
                          <Plus size={16} />
                        </button>
                      </div>
                      <div className={styles.twoBtn}>
                        <button
                          className={styles.removeBtn}
                          onClick={() => handleRemove(item)}>
                          Remove
                        </button>
                        <button
                          className={styles.buyBtn}
                          onClick={() => handleCheck(item)}>
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.cartCount}>
                <h3 className={styles.cartContHead}>PRICE DETAILS</h3>
                <div className={styles.cartContPrice}>
                  <div className={styles.priceName}>
                    <p>
                      Price
                      {cartItems.length > 1 && <>({cartItems.length} items)</>}
                    </p>
                    <p>Discount</p>
                    <p>Delivery Charges</p>
                    <h4>Total Amount</h4>
                  </div>
                  <div className={styles.priceAmount}>
                    <p>₹{totalOrgAnmount.toLocaleString()}</p>
                    <p className={styles.disPrice}>
                      -₹{(totalOrgAnmount - totalAmount).toLocaleString()}
                    </p>
                    <p className={styles.devPrice}>Free</p>
                    <h4>₹{totalAmount.toLocaleString()}</h4>
                  </div>
                </div>
                <div className={styles.checkout}>
                  <button
                    className={styles.checkoutBtn}
                    onClick={() => setConfirm(true)}>
                    <h4> PLACE ORDER</h4>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        {confirm && (
          <div className={styles.confirmBk}>
            <div className={styles.confirm}>
              <div className={styles.items}>
                {cartItems.map((item, index) => (
                  <div key={index} className={styles.itemsINd}>
                    <h4>{item.title}</h4>
                    <p>₹{item.price}</p>
                  </div>
                ))}
              </div>
              <div className={styles.totalAm}>
                <p>Total Items: {cartItems.length}</p>
                <p>Total Amount: ₹{totalAmount.toLocaleString()}</p>
              </div>
              <div className={styles.btnDiv}>
                <button
                  className={styles.cancelBtn}
                  onClick={() => setConfirm(false)}>
                  Cancel
                </button>
                <button className={styles.confirmBtn}>
                  Proceed to Payment
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
