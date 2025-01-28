import styles from '@/styles/Acc.module.css';
import Image from 'next/image';
import GIcon from '@/images/google.svg';
import { useState } from 'react';

export default function Login({ displaySign, setDisplaySign }) {
  const [isLoginBox, setIsLoginBox] = useState(true);

  return (
    <>
      {!displaySign && (
        <div className={styles.backgroundAuth}>
          {isLoginBox && (
            <div className={styles.LoginBox}>
              <div
                className={styles.BoxClose}
                onClick={() => setDisplaySign(true)}>
                X
              </div>
              <h1>Login</h1>
              <form className={styles.formBox}>
                <div className={styles.formGroup}>
                  <label>Email</label>
                  <input
                    type='email'
                    placeholder='email@gmail.com'
                    className={styles.inputInfo}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Password</label>
                  <input
                    type='password'
                    placeholder='Password'
                    className={styles.inputInfo}
                  />
                </div>
                <button type='submit' className={styles.SubmitBtn}>
                  Sign In
                </button>
              </form>
              <div className={styles.signText}>
                Create an account?
                <div
                  className={styles.signLink}
                  onClick={() => setIsLoginBox(false)}>
                  Sign up
                </div>
              </div>
              <div className={styles.separator}>
                <div className={styles.line}></div>
                <div className={styles.separatorText}>OR</div>
                <div className={styles.line}></div>
              </div>
              <button className={styles.GBtn}>
                <Image src={GIcon} className={styles.GImg} alt='googleIcon' />
                Continue with Google
              </button>
            </div>
          )}

          {!isLoginBox && (
            <div className={styles.RegisBox}>
              <div
                className={styles.BoxClose}
                onClick={() => setDisplaySign(true)}>
                X
              </div>
              <h1>Create an Account</h1>
              <form className={styles.formBox}>
                <div className={styles.formGroup}>
                  <label>Name</label>
                  <input
                    type='text'
                    placeholder='Your Name'
                    className={styles.inputInfo}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Email</label>
                  <input
                    type='email'
                    placeholder='email@gmail.com'
                    className={styles.inputInfo}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Set Password</label>
                  <input
                    type='password'
                    placeholder='Password'
                    className={styles.inputInfo}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Confirm Password</label>
                  <input
                    type='password'
                    placeholder='Password'
                    className={styles.inputInfo}
                  />
                </div>
                <button type='submit' className={styles.SubmitBtn}>
                  Sign Up
                </button>
              </form>
              <div className={styles.signText}>
                Already have an account?
                <div
                  className={styles.signLink}
                  onClick={() => setIsLoginBox(true)}>
                  Sign In
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
