import styles from '@/styles/search.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { items } from '@/data/items';

export default function Search({ searchQuery }) {
  const router = useRouter();
  const { query } = router.query;

  const filteredItems = query
    ? items.filter((product) =>
        product.item.toLowerCase().includes(query.toLowerCase()),
      )
    : [];

  return (
    <div className={styles.searchCont}>
      {filteredItems.length > 0 ? (
        <div className={styles.searchInnerCont}>
          {filteredItems.map((product, index) => (
            <div className={styles.searchedItems} key={index}>
              <Image
                src={product.img}
                alt='Product image'
                width={200}
                height={180}
              />
              <div className={styles.productDetails}>
                <p className={styles.productName}>{product.item}</p>
                <div className={styles.featureList}>
                  {product.features.map((feature, i) => (
                    <div key={i} className={styles.featureItem}>
                      <div className={styles.dotst}>•</div>
                      <p>{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.productPrice}>
                <div className={styles.pt1}> ₹{product.price}</div>
                <div className={styles.pt2}> ₹{product.orgPrice}</div>
                <div className={styles.pt3}> {product.disPercent}% off</div>
              </div>
            </div>
          ))}
        </div>
      ) : searchQuery ? (
        <div className={styles.searchInnerCont}>
          <p>No matching items found</p>
        </div>
      ) : null}
    </div>
  );
}
