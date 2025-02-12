import styles from '@/styles/check.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Check() {
  const router = useRouter();
  const { title, price, orgPrice, image, features } = router.query;

  const handleClick = (title, price, orgPrice, image, features) => {
    router.push({
      pathname: '/Land',
      query: {
        title,
        price,
        orgPrice,
        image,
        features,
      },
    });
  };
  if (!router.isReady) return <p className={styles.load}>Loading...</p>;

  return (
    <>
      <div className={styles.checkCont}>
        <div className={styles.checkEnd}>
          <div className={styles.productCont}>
            <div className={styles.product}>
              <Image
                src={image}
                alt='Image'
                width={150}
                height={150}
                className={styles.prodImg}
                onClick={() =>
                  handleClick(title, price, orgPrice, image, features)
                }
              />
              <div className={styles.prodDes}>
                <h2
                  onClick={() =>
                    handleClick(title, price, orgPrice, image, features)
                  }>
                  {title}
                </h2>
                <div className={styles.prodPrice}>
                  <h2 className={styles.price}>₹{price}</h2>
                  <p className={styles.orgPrice}>₹{orgPrice}</p>
                  <h3 className={styles.disPrice}>
                    {(
                      ((Number(orgPrice.toString().replace(/,/g, '')) -
                        Number(price.toString().replace(/,/g, ''))) /
                        Number(orgPrice.toString().replace(/,/g, ''))) *
                      100
                    ).toFixed(0)}
                    % off
                  </h3>
                </div>
              </div>
            </div>
            <div className={styles.cartCount}>
              <h3 className={styles.cartContHead}>PRICE DETAILS</h3>
              <div className={styles.cartContPrice}>
                <div className={styles.priceName}>
                  <p>Price</p>
                  <p>Discount</p>
                  <p>Delivery Charges</p>
                  <h4>Total Amount</h4>
                </div>
                <div className={styles.priceAmount}>
                  <p>₹{orgPrice}</p>
                  <p className={styles.disPrice}>
                    -₹
                    {(
                      Number(orgPrice.toString().replace(/,/g, '')) -
                      Number(price.toString().replace(/,/g, ''))
                    ).toLocaleString()}
                  </p>
                  <p className={styles.devPrice}>Free</p>
                  <h4>₹{price}</h4>
                </div>
              </div>
              <div className={styles.checkout}>
                <button
                  className={styles.checkoutBtn}
                  //   onClick={() => setConfirm(true)}
                >
                  <h4> Proceed to Payment</h4>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
