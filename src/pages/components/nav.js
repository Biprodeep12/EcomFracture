import styles from '@/styles/nav.module.css';
import Image from 'next/image';
import cart from '@/images/globe.svg';
import heart from '@/images/heart.svg';
import search from '@/images/search.svg';
import home from '@/images/home.svg';
import prof from '@/images/profile.svg';
import exit from '@/images/exit-logout.svg';
import Link from 'next/link';
import { auth } from '@/firebase/firebase';
import { useEffect, useState } from 'react';
import { signOut } from 'firebase/auth';
import heartRed from '@/images/heartRed.svg';

export default function Nav({ setDisplaySign, wishlist }) {
  const [user, setUser] = useState(null);
  const [hoverWish, sethoverWish] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const LogAuthClick = () => {
    if (user) {
      setDisplaySign(true);
    } else {
      setDisplaySign(false);
    }
  };

  const OutAuthClick = () => {
    signOut(auth);
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 500);
    };

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <>
      <nav className={styles.nav}>
        <Link href='/' className={styles.NavLogo}>
          Wooper
        </Link>
        <div className={styles.searchbox}>
          <Image src={search} alt='srch' className={styles.SRCH} />
          <input
            className={styles.NavInput}
            placeholder='Search from Products, Brands and More'></input>
        </div>
        <Link href='/cartPage' className={styles.NavCart}>
          <Image src={cart} alt='cart' className={styles.cart} />
          <p className={styles.textCartWish}>Cart</p>
        </Link>
        <Link
          href='/wishlistPage'
          onMouseEnter={() => sethoverWish(true)}
          onMouseLeave={() => sethoverWish(false)}
          className={styles.NavWish}>
          <Image
            src={hoverWish ? heartRed : heart}
            alt='wish'
            className={styles.heart}
          />
          <div className={styles.wishlength}>{wishlist.lenght}</div>
          <p className={styles.textCartWish}>Wishlist</p>
        </Link>
        <div onClick={LogAuthClick} className={styles.NavAcc}>
          {user ? (
            <span className={styles.userName}>
              {user.displayName || 'Welcome User'}
              <Image src={prof} className={styles.accImg} alt='dropdown' />
              <div className={styles.accDropdown}>
                <div onClick={OutAuthClick} className={styles.accLogOut}>
                  <Image src={exit} alt='logout' className={styles.logoutImg} />
                  Logout
                </div>
                {isMobile && (
                  <>
                    <div className={styles.seperatorline}></div>
                    <Link href='/wishlist' className={styles.mobileWish}>
                      <Image
                        src={heart}
                        alt='wish'
                        className={styles.accwish}
                      />
                      Wishlist
                    </Link>
                  </>
                )}
              </div>
            </span>
          ) : (
            'Sign In/Sign Up'
          )}
        </div>
      </nav>
      <div className={styles.mobileRes}>
        <Link href='/' className={styles.mobileHome}>
          <Image src={home} className={styles.hme} alt='home' />
          Home
        </Link>
        <div className={styles.mobileSrch}>
          <Image src={search} alt='srch' className={styles.SRCH} />
          Search
        </div>
        <Link href='/cartPage' className={styles.mobileCart}>
          <Image src={cart} alt='cart' className={styles.cart} />
          Cart
        </Link>
      </div>
    </>
  );
}
