import styles from '@/styles/conP.module.css';
import { CheckCircle, Truck } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Confirm() {
  const [count, setCount] = useState(30);
  const router = useRouter();

  useEffect(() => {
    if (count === 0) {
      router.push('/');
      return;
    }

    const timer = setTimeout(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count, router]);

  return (
    <>
      <div className={styles.confirmCont}>
        <h1>Payment Successful!</h1>
        <p>Thank you for your purchase</p>
        <CheckCircle className={styles.success} size={80} color='green' />
        <div className={styles.confirm}>
          <div className={styles.conbox}>
            <CheckCircle size={50} color='green' />
            <h3>Order Confirmed</h3>
            <p>Your order has been confirmed and will be shipped soon.</p>
          </div>
          <div className={styles.delbox}>
            <Truck size={50} color='purple' />
            <h3>Shipping Soon</h3>
            <p>Your order will be shipped within 1-3 business days.</p>
          </div>
        </div>
        <p>Redirecting to Home Page in {count}sec...</p>
        <button
          className={styles.contBtn}
          onClick={() => {
            router.push('/');
          }}>
          <h3>Continue Shopping</h3>
        </button>
      </div>
    </>
  );
}
