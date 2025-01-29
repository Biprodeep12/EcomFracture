import styles from '@/styles/cart.module.css';
import Image from 'next/image';
import empbox from '@/images/empty.svg';
import Link from 'next/link';
import { useState } from 'react';

export default function Cart() {
  const [CartDisplay, setCartDisplay] = useState(true);

  return (
    <>
      <div className={styles.cartCont}>
        <div className={styles.cart}>
          {CartDisplay ? (
            <div className={styles.nothingCart}>
              <Image src={empbox} className={styles.empbox} alt='EmpCart' />
              Your cart is empty!
              <Link href='/' className={styles.shopBtn}>
                Shop Now
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
