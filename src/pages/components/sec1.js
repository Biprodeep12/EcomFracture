import styles from '@/styles/sec1.module.css';
import React, { use, useEffect, useState } from 'react';
import Image from 'next/image';
import lap1 from '@/images/laptopImg.webp';
import lap2 from '@/images/rogLap.webp';
import lap3 from '@/images/lap.webp';
import prev from '@/images/prevbtn.svg';
import next from '@/images/nextbtn.svg';
import lapsvg from '@/images/lapsvg.webp';
import fash from '@/images/fashion.svg';
import elect from '@/images/electronics.svg';
import furn from '@/images/furn.svg';
import toy from '@/images/toy.svg';
import dpbla from '@/images/dropdownBlack.svg';
import dpblu from '@/images/dropdownblue.svg';
import heart from '@/images/heart.svg';
import share from '@/images/share.svg';
import heartRed from '@/images/heartRed.svg';

export default function Sect() {
  const images = [lap1, lap2, lap3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [hovered4, setHovered4] = useState(false);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  });

  return (
    <>
      <section className={styles.sec1Cont}>
        <div className={styles.sec1}>
          <div className={styles.sec1x}>
            <div className={styles.sec1x1}>
              {[
                {
                  hoverState: [hovered1, setHovered1],
                  src: fash,
                  alt: 'fashion',
                  title: 'Fashion',
                },
                {
                  hoverState: [hovered2, setHovered2],
                  src: elect,
                  alt: 'electron',
                  title: 'Electronics',
                },
                {
                  hoverState: [hovered3, setHovered3],
                  src: furn,
                  alt: 'furniture',
                  title: 'Home & Furniture',
                },
                {
                  hoverState: [hovered4, setHovered4],
                  src: toy,
                  alt: 'toy',
                  title: 'Beauty, Toys & More',
                },
              ].map((cate, index) => {
                const [hovered, setHovered] = cate.hoverState;

                return (
                  <div key={index} className={styles.category}>
                    <Image
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                      src={cate.src}
                      width={50}
                      height={50}
                      className={styles.topIcons}
                      alt={cate.alt}
                    />
                    <div
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                      className={styles.topIconDes}>
                      {cate.title}
                      <Image
                        src={hovered ? dpblu : dpbla}
                        alt='drop'
                        className={`${styles.dropdown} ${
                          hovered ? styles.rotated : ''
                        }`}
                      />
                      <div className={styles.dropdownBox}></div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={styles.sec1x2}>
              <div className={styles.imgSlCont}>
                <button className={styles.imgPrev} onClick={handlePrevious}>
                  <Image src={prev} alt='prev' className={styles.imgPrevbtn} />
                </button>
                <div className={styles.imageSl}>
                  <Image
                    src={images[currentIndex]}
                    className={styles.lapImage}
                    alt='img'
                  />
                </div>
                <button className={styles.imgNext} onClick={handleNext}>
                  <Image src={next} alt='next' className={styles.imgNextbtn} />
                </button>
              </div>
              <div className={styles.imgSlDots}>....</div>
            </div>
          </div>
          <div className={styles.sec1xx}>
            <h2>Offers</h2>
            {[
              { price: '40%' },
              { price: '40%' },
              { price: '40%' },
              { price: '40%' },
              { price: '40%' },
            ].map((form, index) => (
              <div key={index} className={styles.offer}>
                <div className={styles.offerback}></div>
                <div className={styles.offerfront}>
                  <h1 className={styles.offH1}>{form.price}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.sec2Cont}>
        <div className={styles.sec2}>
          <h1>Top Deals on TVs & Appliances</h1>
          <div className={styles.sec2items}>
            {[
              { title: 'Godrej Refrigerator', price: 'From ₹7,240' },
              { title: 'Godrej Refrigerator', price: 'From ₹7,240' },
              { title: 'Godrej Refrigerator', price: 'From ₹7,240' },
              { title: 'Godrej Refrigerator', price: 'From ₹7,240' },
              { title: 'Godrej Refrigerator', price: 'From ₹7,240' },
              { title: 'Godrej Refrigerator', price: 'From ₹7,240' },
            ].map((des, index) => (
              <div key={index} className={styles.rowItems}>
                <Image src={lapsvg} alt='/' className={styles.imgitems} />
                <div className={styles.itemDes}>
                  <p>{des.title}</p>
                  <h4>{des.price}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.threeColumnCont}>
        {[
          {
            head: 'Recommeded Items',
            title:
              'nisatraders DRAGON DOUBLE FLAME SOLID CIGAR CIGARETTE LIGHTER Pocket',
            p1: '₹3,999',
            p2: '₹1,999',
            p3: '50% off',
          },
          {
            head: 'Recommeded Items',
            title:
              'nisatraders DRAGON DOUBLE FLAME SOLID CIGAR CIGARETTE LIGHTER Pocket',
            p1: '₹3,999',
            p2: '₹1,999',
            p3: '50% off',
          },
          {
            head: 'Recommeded Items',
            title:
              'nisatraders DRAGON DOUBLE FLAME SOLID CIGAR CIGARETTE LIGHTER Pocket',
            p1: '₹3,999',
            p2: '₹1,999',
            p3: '50% off',
          },
          {
            head: 'Recommeded Items',
            title:
              'nisatraders DRAGON DOUBLE FLAME SOLID CIGAR CIGARETTE LIGHTER Pocket',
            p1: '₹3,999',
            p2: '₹1,999',
            p3: '50% off',
          },
          {
            head: 'Recommeded Items',
            title:
              'nisatraders DRAGON DOUBLE FLAME SOLID CIGAR CIGARETTE LIGHTER Pocket',
            p1: '₹3,999',
            p2: '₹1,999',
            p3: '50% off',
          },
          {
            head: 'Recommeded Items',
            title:
              'nisatraders DRAGON DOUBLE FLAME SOLID CIGAR CIGARETTE LIGHTER Pocket',
            p1: '₹3,999',
            p2: '₹1,999',
            p3: '50% off',
          },
        ].map((info, index) => (
          <div key={index} className={styles.tCC1}>
            <div className={styles.tccHead}>
              <h1>{info.head}</h1>
            </div>
            <div className={styles.tccItems}>
              <div className={styles.tccAllItems1}>
                <Image src={lapsvg} alt='4item' className={styles.Fouritems} />
                <div className={styles.tccItemTitle}>{info.title}</div>
                <div className={styles.tccItemDes}>
                  <p className={styles.pPrt1}>{info.p1}</p>
                  <h3>{info.p2}</h3>
                  <p className={styles.pPrt2}>{info.p3}</p>
                </div>
              </div>
              <div className={styles.tccAllItems2}>
                <Image src={lapsvg} alt='4item' className={styles.Fouritems} />
                <div className={styles.tccItemTitle}>{info.title}</div>
                <div className={styles.tccItemDes}>
                  <p className={styles.pPrt1}>{info.p1}</p>
                  <h3>{info.p2}</h3>
                  <p className={styles.pPrt2}>{info.p3}</p>
                </div>
              </div>
              <div className={styles.tccAllItems3}>
                <Image src={lapsvg} alt='4item' className={styles.Fouritems} />
                <div className={styles.tccItemTitle}>{info.title}</div>
                <div className={styles.tccItemDes}>
                  <p className={styles.pPrt1}>{info.p1}</p>
                  <h3>{info.p2}</h3>
                  <p className={styles.pPrt2}>{info.p3}</p>
                </div>
              </div>
              <div className={styles.tccAllItems4}>
                <Image src={lapsvg} alt='4item' className={styles.Fouritems} />
                <div className={styles.tccItemTitle}>{info.title}</div>
                <div className={styles.tccItemDes}>
                  <p className={styles.pPrt1}>{info.p1}</p>
                  <h3>{info.p2}</h3>
                  <p className={styles.pPrt2}>{info.p3}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
      <section className={styles.sec2Cont}>
        <div className={styles.sec2}>
          <h1>Furniture Deals</h1>
          <div className={styles.sec2items}>
            {[
              { title: 'Godrej Refrigerator', price: 'From ₹7,240' },
              { title: 'Godrej Refrigerator', price: 'From ₹7,240' },
              { title: 'Godrej Refrigerator', price: 'From ₹7,240' },
              { title: 'Godrej Refrigerator', price: 'From ₹7,240' },
              { title: 'Godrej Refrigerator', price: 'From ₹7,240' },
              { title: 'Godrej Refrigerator', price: 'From ₹7,240' },
            ].map((des, index) => (
              <div key={index} className={styles.rowItems}>
                <Image src={lapsvg} alt='/' className={styles.imgitems} />
                <div className={styles.itemDes}>
                  <p>{des.title}</p>
                  <h4>{des.price}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className={styles.trendCont}>
        <div className={styles.trend}>Trending</div>
      </div>
      <section className={styles.threeParal}>
        <div className={styles.tP1}>
          {[
            {
              title:
                'GIGABYTE Intel Core i7 12th Gen 12650H - (16 GB/512 GB SSD/Windows 11 Home/6 GB Graphics/NVIDIA GeForce RTX 4050) G5 MF-G2IN313SH Gaming Laptop (15 inch, Black, 2.08 Kg)',
            },
            {
              title:
                'HP AMD Athlon Dual Core - (8 GB/256 GB SSD/Windows 11 Home) 255 Laptop (15.6 inch, Black)',
            },
            {
              title:
                'GIGABYTE Intel Core i7 12th Gen 12650H - (16 GB/512 GB SSD/Windows 11 Home/6 GB Graphics/NVIDIA GeForce RTX 4050) G5 MF-G2IN313SH Gaming Laptop (15 inch, Black, 2.08 Kg)',
            },
            {
              title:
                'HP AMD Athlon Dual Core - (8 GB/256 GB SSD/Windows 11 Home) 255 Laptop (15.6 inch, Black)',
            },
            {
              title:
                'GIGABYTE Intel Core i7 12th Gen 12650H - (16 GB/512 GB SSD/Windows 11 Home/6 GB Graphics/NVIDIA GeForce RTX 4050) G5 MF-G2IN313SH Gaming Laptop (15 inch, Black, 2.08 Kg)',
            },
          ].map((laptop, index) => (
            <div key={index} className={styles.tp1IN}>
              <div className={styles.tp1INx}>
                <Image src={lapsvg} alt='lapsvg' className={styles.lapsvg} />
                <div className={styles.likeshareCont}>
                  <div className={styles.likeshare}>
                    <Image src={heart} alt='like' className={styles.likeTP} />
                  </div>
                  <div className={styles.likeshare}>
                    <Image src={share} alt='share' className={styles.shareTP} />
                  </div>
                </div>
              </div>
              <div className={styles.titleDes}>{laptop.title}</div>
            </div>
          ))}
        </div>

        <div className={styles.tP2}>
          {[
            {
              title:
                'HP AMD Athlon Dual Core - (8 GB/256 GB SSD/Windows 11 Home) 255 Laptop (15.6 inch, Black)',
            },
            {
              title:
                'HP AMD Athlon Dual Core - (8 GB/256 GB SSD/Windows 11 Home) 255 Laptop (15.6 inch, Black)',
            },
            {
              title:
                'HP AMD Athlon Dual Core - (8 GB/256 GB SSD/Windows 11 Home) 255 Laptop (15.6 inch, Black)',
            },
            {
              title:
                'HP AMD Athlon Dual Core - (8 GB/256 GB SSD/Windows 11 Home) 255 Laptop (15.6 inch, Black)',
            },
            {
              title:
                'GIGABYTE Intel Core i7 12th Gen 12650H - (16 GB/512 GB SSD/Windows 11 Home/6 GB Graphics/NVIDIA GeForce RTX 4050) G5 MF-G2IN313SH Gaming Laptop (15 inch, Black, 2.08 Kg)',
            },
          ].map((laptop, index) => (
            <div key={index} className={styles.tp1IN}>
              <div className={styles.tp1INx}>
                <Image src={lapsvg} alt='lapsvg' className={styles.lapsvg} />
                <div className={styles.likeshareCont}>
                  <div className={styles.likeshare}>
                    <Image src={heart} alt='like' className={styles.likeTP} />
                  </div>
                  <div className={styles.likeshare}>
                    <Image src={share} alt='share' className={styles.shareTP} />
                  </div>
                </div>
              </div>
              <div className={styles.titleDes}>{laptop.title}</div>
            </div>
          ))}
        </div>

        <div className={styles.tP3}>
          {[
            {
              title:
                'GIGABYTE Intel Core i7 12th Gen 12650H - (16 GB/512 GB SSD/Windows 11 Home/6 GB Graphics/NVIDIA GeForce RTX 4050) G5 MF-G2IN313SH Gaming Laptop (15 inch, Black, 2.08 Kg)',
            },
            {
              title:
                'HP AMD Athlon Dual Core - (8 GB/256 GB SSD/Windows 11 Home) 255 Laptop (15.6 inch, Black)',
            },
            {
              title:
                'GIGABYTE Intel Core i7 12th Gen 12650H - (16 GB/512 GB SSD/Windows 11 Home/6 GB Graphics/NVIDIA GeForce RTX 4050) G5 MF-G2IN313SH Gaming Laptop (15 inch, Black, 2.08 Kg)',
            },
            {
              title:
                'HP AMD Athlon Dual Core - (8 GB/256 GB SSD/Windows 11 Home) 255 Laptop (15.6 inch, Black)',
            },
            {
              title:
                'GIGABYTE Intel Core i7 12th Gen 12650H - (16 GB/512 GB SSD/Windows 11 Home/6 GB Graphics/NVIDIA GeForce RTX 4050) G5 MF-G2IN313SH Gaming Laptop (15 inch, Black, 2.08 Kg)',
            },
          ].map((laptop, index) => (
            <div key={index} className={styles.tp1IN}>
              <div className={styles.tp1INx}>
                <Image src={lapsvg} alt='lapsvg' className={styles.lapsvg} />
                <div className={styles.likeshareCont}>
                  <div className={styles.likeshare}>
                    <Image src={heart} alt='like' className={styles.likeTP} />
                  </div>
                  <div className={styles.likeshare}>
                    <Image src={share} alt='share' className={styles.shareTP} />
                  </div>
                </div>
              </div>
              <div className={styles.titleDes}>{laptop.title}</div>
            </div>
          ))}
        </div>
      </section>
      <section className={styles.sec2Cont}>
        <div className={styles.sec2}>
          <h1>Recently Viewed</h1>
          <div className={styles.sec2items}>
            {[
              { title: 'Godrej Refrigerator', price: 'From ₹7,240' },
              { title: 'Godrej Refrigerator', price: 'From ₹7,240' },
              { title: 'Godrej Refrigerator', price: 'From ₹7,240' },
              { title: 'Godrej Refrigerator', price: 'From ₹7,240' },
              { title: 'Godrej Refrigerator', price: 'From ₹7,240' },
              { title: 'Godrej Refrigerator', price: 'From ₹7,240' },
            ].map((des, index) => (
              <div key={index} className={styles.rowItems}>
                <Image src={lapsvg} alt='/' className={styles.imgitems} />
                <div className={styles.itemDes}>
                  <p>{des.title}</p>
                  <h4>{des.price}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
