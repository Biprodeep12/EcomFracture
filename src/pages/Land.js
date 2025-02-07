import { useRouter } from 'next/router';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Nav from './components/nav';
import styles from '@/styles/Land.module.css';
import { BadgePercent } from 'lucide-react';
import Login from './components/auth/login';
import { doc, getDoc, setDoc, updateDoc, arrayUnion } from 'firebase/firestore';
import { auth, db } from '@/firebase/firebase';

const bankOffers = [
  '5% Unlimited Cashback on Flipkart Axis Bank Credit Card',
  '10% instant discount on SBI Credit Card EMI Transactions, up to ₹1,500 on orders of ₹5,000 and above',
  '10% off up to ₹1,200 on HDFC Bank Credit Card EMI on 6 and 9 months tenure. Min Txn Value: ₹5,000',
  'Special Price: Get extra 29% off (price inclusive of cashback/coupon)',
  '10% off up to ₹1,500 on HDFC Bank Credit Card EMI on 12 months and above tenure. Min Txn Value: ₹5,000',
  '10% off on BOBCARD EMI Transactions, up to ₹1,500 on orders of ₹5,000 and above',
  '10% off up to ₹1,250 on IDFC FIRST Bank Credit EMI Txns on orders of ₹5,000 and above',
  '5% off up to ₹750 on IDFC FIRST Power Women Platinum and Signature Debit Card. Min Txn Value: ₹5,000',
];

const reviews = [
  {
    user: 'Alex_TechGeek',
    review: 'Solid performance, but the battery drains faster than expected.',
  },
  {
    user: 'Samantha_Coder',
    review: 'Great build quality! Feels premium and runs smoothly.',
  },
  {
    user: 'Jayden_ByteMaster',
    review: 'Decent product, but the software needs some serious updates.',
  },
  {
    user: 'Lisa_GadgetQueen',
    review: 'Camera quality is top-notch for the price range!',
  },
  {
    user: 'Techie_Mark',
    review: 'Good value for money, but the speakers could be louder.',
  },
  {
    user: 'Oliver_DevX',
    review: 'Fast and responsive, but gets warm under heavy use.',
  },
  {
    user: 'Emma_TechSavvy',
    review: 'Loving the display clarity! Perfect for media consumption.',
  },
];

export default function ClickedItems() {
  const [displaySign, setDisplaySign] = useState(true);
  const [user, setUser] = useState(null);
  const router = useRouter();
  const { title, price, orgPrice, image, features } = router.query;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  if (!router.isReady || !title || !price || !orgPrice) {
    return <div>Loading...</div>;
  }

  const safePrice = Number((price?.toString() || '0').replace(/,/g, ''));
  const safeOrgPrice = Number((orgPrice?.toString() || '0').replace(/,/g, ''));

  const discountPercent =
    safeOrgPrice > 0
      ? (((safeOrgPrice - safePrice) / safeOrgPrice) * 100).toFixed(0)
      : 0;

  const handleAddToCart = async () => {
    if (!user) {
      alert('Please log in to add items to your cart.');
      return;
    }

    const userRef = doc(db, 'users', user.uid);
    const userDoc = await getDoc(userRef);

    try {
      if (!userDoc.exists()) {
        await setDoc(userRef, { cart: [] });
      }

      const item = {
        title,
        price,
        image,
        orgPrice,
        features: features || [],
      };

      await updateDoc(userRef, {
        cart: arrayUnion(item),
      });

      alert('Item added to cart!');
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  return (
    <>
      <Login displaySign={displaySign} setDisplaySign={setDisplaySign} />
      <Nav setDisplaySign={setDisplaySign} />
      <div className={styles.productDisplay}>
        <div className={styles.endDisplay}>
          <div className={styles.product}>
            <div className={styles.imageAndProd}>
              <Image
                className={styles.prodImg}
                width={400}
                height={400}
                src={image}
                alt='img'
              />
              <div className={styles.buyAndCart}>
                <div className={styles.addCart} onClick={handleAddToCart}>
                  Add to Cart
                </div>
                <div className={styles.buyNow}>Buy Now</div>
              </div>
            </div>
            <div className={styles.descri}>
              <div className={styles.productTitle}>{title}</div>
              <div className={styles.productRate}>4 Star</div>
              <p>Special Price</p>
              <div className={styles.productPrice}>
                <div className={styles.disPrice}>₹{price}</div>
                <div className={styles.orgPrice}>₹{orgPrice}</div>
                <div className={styles.dis}>{discountPercent}% off</div>
              </div>
              <div className={styles.featuresCont}>
                <div className={styles.featHead}>Product Description</div>
                <div className={styles.featlist}>
                  {Array.isArray(features) ? (
                    features.map((feat, index) => <li key={index}>{feat}</li>)
                  ) : (
                    <p>No features available</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.sec2}>
            <div className={styles.offers}>
              <div className={styles.offerHead}>Offers</div>
              <div className={styles.offerDetail}>
                {bankOffers.map((offer, index) => (
                  <p key={index} className={styles.offerItem}>
                    <BadgePercent size={16} className={styles.offerIcon} />
                    {offer}
                  </p>
                ))}
              </div>
            </div>
            <div className={styles.reviews}>
              <div className={styles.revHead}>Reviews</div>
              <div className={styles.revDetail}>
                {reviews.map((item, index) => (
                  <div key={index} className={styles.revDetpt}>
                    <div className={styles.revName}>{item.user}:</div>{' '}
                    {item.review}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.monBtn}>
        <div className={styles.mobAddCart} onClick={handleAddToCart}>
          Add to Cart
        </div>
        <div className={styles.mobBuyNow}>Buy Now</div>
      </div>
    </>
  );
}
