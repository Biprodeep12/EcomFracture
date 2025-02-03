import Image from 'next/image';
import search from '@/images/search.svg';
import { useRouter } from 'next/router';
import { useState, useEffect, useRef } from 'react';
import prev from '@/images/backsh.svg';

import styles from '@/styles/nav.module.css';
import Link from 'next/link';

export default function NavMob({ setsrchdisplay }) {
  const [query, setQuery] = useState('');

  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const router = useRouter();

  const handleSearch = (e) => {
    if (e.key === 'Enter' && query.trim() !== '') {
      router.push(`/mobSearchPage?query=${encodeURIComponent(query)}`);
      setsrchdisplay(true);
    }
  };
  return (
    <>
      <nav className={styles.navile}>
        <Link href='/' className={styles.backSrchile}>
          <Image src={prev} alt='back' />
        </Link>
        <div className={styles.searchboxile}>
          <Image src={search} alt='srch' className={styles.SRCHile} />
          <input
            ref={inputRef}
            className={styles.NavInputile}
            placeholder='Search from Products, Brands and More'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleSearch}
          />
        </div>
      </nav>
    </>
  );
}
