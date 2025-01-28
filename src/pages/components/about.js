import styles from '@/styles/about.module.css';

export default function About() {
  return (
    <>
      <div className={styles.aboutCont}>
        <div className={styles.about}>
          <h2>About Us</h2>
          <p>
            Last night, I dreamt I was in a heated chess match with a lamp, but
            every time I moved a pawn, it whispered the secrets of the deep
            ocean to my elbow. Suddenly, the moon showed up wearing Crocs,
            screamed “THE CHEESE IS A LIE,” and then turned into a sentient
            lasagna that demanded a $20 loan. Meanwhile, my shadow was
            breakdancing with a toaster that only spoke fluent Morse code, and I
            couldn’t stop crying because the color yellow smelled like betrayal.
          </p>
        </div>
      </div>
      <div className={styles.credits}></div>
    </>
  );
}
