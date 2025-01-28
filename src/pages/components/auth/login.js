import styles from '@/styles/Acc.module.css';
import Image from 'next/image';
import GIcon from '@/images/google.svg';
import { useState } from 'react';
import { auth } from '@/firebase/firebase';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

export default function Login({ displaySign, setDisplaySign }) {
  const [isLoginBox, setIsLoginBox] = useState(true);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setDisplaySign(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      await updateProfile(userCredential.user, { displayName: name });
      setDisplaySign(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      setDisplaySign(true);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      {!displaySign && (
        <div className={styles.backgroundAuth}>
          {isLoginBox ? (
            <div className={styles.LoginBox}>
              <div
                className={styles.BoxClose}
                onClick={() => setDisplaySign(true)}>
                X
              </div>
              <h1>Login</h1>
              <form className={styles.formBox} onSubmit={handleLogin}>
                {error && <div className={styles.error}>{error}</div>}
                <div className={styles.formGroup}>
                  <label>Email</label>
                  <input
                    type='email'
                    name='email'
                    placeholder='email@gmail.com'
                    className={styles.inputInfo}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Password</label>
                  <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    className={styles.inputInfo}
                    required
                  />
                </div>
                <button
                  type='submit'
                  className={styles.SubmitBtn}
                  disabled={loading}>
                  {loading ? 'Loading...' : 'Sign In'}
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
              <button className={styles.GBtn} onClick={handleGoogleSignIn}>
                <Image src={GIcon} className={styles.GImg} alt='googleIcon' />
                Continue with Google
              </button>
            </div>
          ) : (
            <div className={styles.RegisBox}>
              <div
                className={styles.BoxClose}
                onClick={() => {
                  setDisplaySign(true);
                  setIsLoginBox(true);
                }}>
                X
              </div>
              <h1>Create an Account</h1>
              <form className={styles.formBox} onSubmit={handleSignup}>
                {error && <div className={styles.error}>{error}</div>}
                <div className={styles.formGroup}>
                  <label>Name</label>
                  <input
                    type='text'
                    name='name'
                    placeholder='Your Name'
                    className={styles.inputInfo}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Email</label>
                  <input
                    type='email'
                    name='email'
                    placeholder='email@gmail.com'
                    className={styles.inputInfo}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Set Password</label>
                  <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    className={styles.inputInfo}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Confirm Password</label>
                  <input
                    type='password'
                    name='confirmPassword'
                    placeholder='Password'
                    className={styles.inputInfo}
                    required
                  />
                </div>
                <button
                  type='submit'
                  className={styles.SubmitBtn}
                  disabled={loading}>
                  {loading ? 'Loading...' : 'Sign Up'}
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
