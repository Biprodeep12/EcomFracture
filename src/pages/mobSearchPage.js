import { useState } from 'react';
import NavMob from './components/navMob';
import Search from './components/search';
import styles from '@/styles/mobPage.module.css';

export default function MobSrchPage() {
  const [srchdisplay, setsrchdisplay] = useState(false);
  return (
    <>
      <NavMob setsrchdisplay={setsrchdisplay} />
      {srchdisplay ? (
        <Search />
      ) : (
        <div className={styles.mobCont}>
          <div className={styles.mobInnerCont}>
            <h2>Recently Viewed</h2>
          </div>
        </div>
      )}
    </>
  );
}
