import styles from '@/styles/nav.module.css';
import Image from 'next/image';
import cart from '@/images/globe.svg';
import heart from '@/images/heart.svg';
import search from '@/images/search.svg';
import home from '@/images/home.svg';

export default function Nav({ setDisplaySign }) {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.NavLogo}>Wooper</div>
        <div className={styles.searchbox}>
          <Image src={search} alt='srch' className={styles.SRCH} />
          <input
            className={styles.NavInput}
            placeholder='Search from Products, Brands and More'></input>
        </div>
        <div className={styles.NavCart}>
          <Image src={cart} alt='cart' className={styles.cart} />
          <p className={styles.textCartWish}>Cart</p>
        </div>
        <div className={styles.NavWish}>
          <Image src={heart} alt='wish' className={styles.heart} />
          <p className={styles.textCartWish}>Wishlist</p>
        </div>
        <div onClick={() => setDisplaySign(false)} className={styles.NavAcc}>
          Sign In/Sign Out
        </div>
      </nav>
      <div className={styles.mobileRes}>
        <div className={styles.mobileHome}>
          <Image src={home} className={styles.hme} alt='home' />
          Home
        </div>
        <div className={styles.mobileSrch}>
          <Image src={search} alt='srch' className={styles.SRCH} />
          Search
        </div>
        <div className={styles.mobileCart}>
          <Image src={cart} alt='cart' className={styles.cart} />
          Cart
        </div>
      </div>
    </>
  );
}
