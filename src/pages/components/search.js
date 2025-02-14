import styles from '@/styles/search.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { items } from '@/data/items';
import {
  sec2Cont1,
  sec2Cont2,
  prodColumn,
  colm1,
  colm2,
  colm3,
} from '@/pages/components/sec1';

export default function Search({ searchQuery }) {
  const router = useRouter();
  const { query } = router.query;

  const normalizeProduct = (product) => ({
    item: product.item || product.title || 'Unknown',
    img: product.img || product.image || '/default.jpg',
    price: product.price || 0,
    orgPrice: product.orgPrice || 0,
    features: product.features || [],
  });

  const prodColumnItems = prodColumn.flatMap((column) => column.items);

  const allItems = [
    ...items,
    ...sec2Cont1,
    ...sec2Cont2,
    ...colm1,
    ...colm2,
    ...colm3,
    ...prodColumnItems,
  ].map(normalizeProduct);

  const filteredItems = query
    ? allItems.filter(
        (product) =>
          product.item.toLowerCase().includes(query.toLowerCase()) ||
          product.features.some((feature) =>
            feature.toLowerCase().includes(query.toLowerCase()),
          ),
      )
    : [];

  const handleClick = (x) => {
    router.push({
      pathname: '/Land',
      query: {
        title: x.item,
        price: x.price,
        orgPrice: x.orgPrice,
        image: x.img.src ? x.img.src : x.img,
        features: x.features,
      },
    });
  };

  return (
    <div className={styles.searchCont}>
      {filteredItems.length > 0 ? (
        <>
          <div className={styles.totalIt}>
            <h3>Items Fount: {filteredItems.length}</h3>
          </div>
          <div className={styles.searchInnerCont}>
            {filteredItems.map((product, index) => (
              <div
                className={styles.searchedItems}
                key={index}
                onClick={() => handleClick(product)}>
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
                  <div className={styles.pt3}>
                    {(
                      ((Number(product.orgPrice.toString().replace(/,/g, '')) -
                        Number(product.price.toString().replace(/,/g, ''))) /
                        Number(product.orgPrice.toString().replace(/,/g, ''))) *
                      100
                    ).toFixed(0)}
                    % off
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : searchQuery ? (
        <div className={styles.searchInCont}>
          <h2>No matching items found</h2>
        </div>
      ) : (
        <div className={styles.searchInCont}>
          <h2>No matching items found</h2>
        </div>
      )}
    </div>
  );
}
