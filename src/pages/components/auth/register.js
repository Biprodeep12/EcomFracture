import styles from '@/styles/Acc.module.css';

export default function Regis({ setDisplaySign }) {
  return (
    <>
      <div className={styles.backgroundAuth}>
        <div className={styles.RegisBox}>
          <div className={styles.BoxClose} onClick={() => setDisplaySign(true)}>
            X
          </div>
          <h1>Creat an Account</h1>
          <form className={styles.formBox}>
            <div className={styles.formGroup}>
              <label>Name</label>
              <input
                type='text'
                placeholder='email@gmail.com'
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
            <div className={styles.signLink}>Sign In</div>
          </div>
        </div>
      </div>
    </>
  );
}
