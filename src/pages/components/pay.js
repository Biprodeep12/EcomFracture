import styles from '@/styles/pay.module.css';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Pay() {
  const router = useRouter();
  const { price } = router.query;
  const [activeMode, setActiveMode] = useState('Pay with Card');
  const otp = Math.floor(10000 + Math.random() * 90000);

  const handleClick = (mode) => {
    setActiveMode(mode);
  };

  const handleSubmit = () => {
    router.push('/conPage');
  };

  return (
    <>
      <div className={styles.payCont}>
        <div className={styles.payEnd}>
          <div className={styles.amountPay}>
            <h2>Amount: ₹{price}</h2>
          </div>
          <div className={styles.paytainer}>
            <h2>Select Payment Mode</h2>
            <div className={styles.mode}>
              {['Pay with Card', 'PayPal', 'Cash on Delivery'].map((mode) => (
                <p
                  key={mode}
                  className={`${styles.modep} ${
                    activeMode === mode ? styles.modeAct : ''
                  }`}
                  onClick={() => handleClick(mode)}>
                  {mode}
                </p>
              ))}
            </div>
            {activeMode === 'Pay with Card' && (
              <form className={styles.formCard} onSubmit={handleSubmit}>
                <label>Card Number</label>
                <input
                  type='number'
                  placeholder='xxxx xxxx xxxx xxxx'
                  required
                />
                <label>Card Holder's Name</label>
                <input type='text' placeholder='Hono Lulu' required />
                <div className={styles.expCvv}>
                  <div className={styles.exp}>
                    <label>Expiry Date</label>
                    <input type='date' required />
                  </div>
                  <div className={styles.cvv}>
                    <label>CVV Number</label>
                    <input type='password' placeholder='xxx' required />
                  </div>
                </div>
                <button type='submit' className={styles.payBtn}>
                  <h3> Pay Now</h3>
                </button>
                <p>Your payment information is not secure and not encrypted.</p>
              </form>
            )}
            {activeMode === 'PayPal' && (
              <div className={styles.payDiv}>
                <h4>
                  You will be redirected to PayPal to complete your payment.
                </h4>
                <button>
                  <h3>Proceed to PayPal</h3>
                </button>
                <p>Your payment information is not secure and not encrypted.</p>
              </div>
            )}
            {activeMode === 'Cash on Delivery' && (
              <div className={styles.cashDiv}>
                <h4>This the Code for your Product</h4>
                <h4>
                  Only to be shared to the Delivery Person for Authentication
                </h4>
                <div className={styles.otp}>{otp}</div>
                <button onClick={handleSubmit}>
                  <h3>Confirm Order</h3>
                </button>
                <h4>By confirming, your Order will be placed</h4>
                <p>Your payment information is not secure and not encrypted.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
