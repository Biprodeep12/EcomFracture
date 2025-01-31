import { useState, useEffect } from 'react';
import { db, auth } from '@/firebase/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import Link from 'next/link';
import Image from 'next/image';
import wish from '@/images/wishlist.svg';
import bin from '@/images/bin.svg';
import styles from '@/styles/wish.module.css';

export default function Wish() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const userRef = doc(db, 'users', currentUser.uid);
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          setWishlist(userDoc.data().wishlist || []);
        }
      } else {
        setWishlist([]);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const removeFromWishlist = async (title) => {
    if (!user) return;

    const userRef = doc(db, 'users', user.uid);
    const userDoc = await getDoc(userRef);

    if (userDoc.exists()) {
      const updatedWishlist = userDoc
        .data()
        .wishlist.filter((item) => item.title !== title);

      await updateDoc(userRef, { wishlist: updatedWishlist });

      setWishlist(updatedWishlist);
    }
  };

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.wishCont}>
      <div className={styles.wish}>
        {wishlist.length === 0 ? (
          <div className={styles.nothingWish}>
            <Image src={wish} className={styles.empbox} alt='EmpCart' />
            Your Wishlist is empty
            <Link href='/' className={styles.shopBtn}>
              Browse Now
            </Link>
          </div>
        ) : (
          <>
            {wishlist.map((item, index) => (
              <div key={index} className={styles.wishItem}>
                <div className={styles.wishDetails}>
                  <div className={styles.itemTitle}>{item.title}</div>
                  <div className={styles.itemPrice}>
                    Price: <p>${item.price}</p>
                  </div>
                </div>
                <button
                  className={styles.removeBtn}
                  onClick={() => removeFromWishlist(item.title)}>
                  <Image className={styles.bin} src={bin} alt='delete' />
                </button>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
