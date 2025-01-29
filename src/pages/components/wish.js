import Link from 'next/link';
import Image from 'next/image';
import wish from '@/images/wishlist.svg';
import styles from '@/styles/wish.module.css';
import { useState } from 'react';

export default function Wish() {
  const [WishDisplay, setWsihDisplay] = useState(true);

  return (
    <>
      <div className={styles.wishCont}>
        <div className={styles.wish}>
          {WishDisplay ? (
            <div className={styles.nothingWish}>
              <Image src={wish} className={styles.empbox} alt='EmpCart' />
              Yor Wishlist is empty
              <Link href='/' className={styles.shopBtn}>
                Browse Now
              </Link>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </>
  );
}
