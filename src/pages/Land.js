import { useRouter } from 'next/router';
import Image from 'next/image';
import Nav from './components/nav';
import styles from '@/styles/Land.module.css';
import { BadgePercent } from 'lucide-react';

const bankOffers = [
  '5% Unlimited Cashback on Flipkart Axis Bank Credit Card',
  '10% instant discount on SBI Credit Card EMI Transactions, up to ₹1,500 on orders of ₹5,000 and above',
  '10% off up to ₹1,200 on HDFC Bank Credit Card EMI on 6 and 9 months tenure. Min Txn Value: ₹5,000',
  'Special Price: Get extra 29% off (price inclusive of cashback/coupon)',
  '10% off up to ₹1,500 on HDFC Bank Credit Card EMI on 12 months and above tenure. Min Txn Value: ₹5,000',
  '10% off on BOBCARD EMI Transactions, up to ₹1,500 on orders of ₹5,000 and above',
  '10% off up to ₹1,250 on IDFC FIRST Bank Credit EMI Txns on orders of ₹5,000 and above',
  '5% off up to ₹750 on IDFC FIRST Power Women Platinum and Signature Debit Card. Min Txn Value: ₹5,000',
];
const reviews = [
  {
    user: 'Alex_TechGeek',
    review: 'Solid performance, but the battery drains faster than expected.',
  },
  {
    user: 'Samantha_Coder',
    review: 'Great build quality! Feels premium and runs smoothly.',
  },
  {
    user: 'Jayden_ByteMaster',
    review: 'Decent product, but the software needs some serious updates.',
  },
  {
    user: 'Lisa_GadgetQueen',
    review: 'Camera quality is top-notch for the price range!',
  },
  {
    user: 'Techie_Mark',
    review: 'Good value for money, but the speakers could be louder.',
  },
  {
    user: 'Oliver_DevX',
    review: 'Fast and responsive, but gets warm under heavy use.',
  },
  {
    user: 'Emma_TechSavvy',
    review: 'Loving the display clarity! Perfect for media consumption.',
  },
];
export default function ClickedItems() {
  const router = useRouter();
  const { title, price, image, features } = router.query;

  return (
    <>
      <Nav />
      <div className={styles.productDisplay}>
        <div className={styles.endDisplay}>
          <div className={styles.product}>
            <div className={styles.imageAndProd}>
              <Image
                className={styles.prodImg}
                width={400}
                height={400}
                src={image}
                alt='img'
              />
              <div className={styles.buyAndCart}>
                <div className={styles.addCart}>Add to Cart</div>
                <div className={styles.buyNow}>Buy Now</div>
              </div>
            </div>
            <div className={styles.descri}>
              <div className={styles.productTitle}>{title}</div>
              <div className={styles.productRate}>4 Star</div>
              <p>Special Price</p>
              <div className={styles.productPrice}>
                <div className={styles.disPrice}>{price}</div>
                <div className={styles.orgPrice}>₹9999</div>
                <div className={styles.dis}>50% off</div>
              </div>
              <div className={styles.featuresCont}>
                <div className={styles.featHead}>Product Description</div>
                <div className={styles.featlist}>
                  {Array.isArray(features) ? (
                    features.map((feat, index) => <li key={index}>{feat}</li>)
                  ) : (
                    <p>No features available</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.sec2}>
            <div className={styles.offers}>
              <div className={styles.offerHead}>Offers</div>
              <div className={styles.offerDetail}>
                {bankOffers.map((offer, index) => (
                  <p key={index} className={styles.offerItem}>
                    <BadgePercent size={16} className={styles.offerIcon} />
                    {offer}
                  </p>
                ))}
              </div>
            </div>
            <div className={styles.reviews}>
              <div className={styles.revHead}>Reviews</div>
              <div className={styles.revDetail}>
                {reviews.map((item, index) => (
                  <div key={index} className={styles.revDetpt}>
                    <div className={styles.revName}>{item.user}:</div>{' '}
                    {item.review}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
