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
              <div className={styles.fashion}>
                <Image
                  onMouseEnter={() => setHovered1(true)}
                  onMouseLeave={() => setHovered1(false)}
                  src={fash}
                  className={styles.topIcons}
                  alt='fashion'
                />
                <div
                  onMouseEnter={() => setHovered1(true)}
                  onMouseLeave={() => setHovered1(false)}
                  className={styles.topIconDes}>
                  Fashion
                  <Image
                    src={hovered1 ? dpblu : dpbla}
                    alt='drop'
                    className={`${styles.dropdown} ${
                      hovered1 ? styles.rotated : ''
                    }`}
                  />
                  <div className={styles.dropdownBox}></div>
                </div>
              </div>
              <div className={styles.electron}>
                <Image
                  onMouseEnter={() => setHovered2(true)}
                  onMouseLeave={() => setHovered2(false)}
                  src={elect}
                  className={styles.topIcons}
                  alt='elctronics'
                />
                <div
                  onMouseEnter={() => setHovered2(true)}
                  onMouseLeave={() => setHovered2(false)}
                  className={styles.topIconDes}>
                  Electronics
                  <Image
                    src={hovered2 ? dpblu : dpbla}
                    alt='drop'
                    className={`${styles.dropdown} ${
                      hovered2 ? styles.rotated : ''
                    }`}
                  />
                  <div className={styles.dropdownBox}></div>
                </div>
              </div>
              <div className={styles.homefurn}>
                <Image
                  onMouseEnter={() => setHovered3(true)}
                  onMouseLeave={() => setHovered3(false)}
                  src={furn}
                  className={styles.topIcons}
                  alt='furniture'
                />
                <div
                  className={styles.topIconDes}
                  onMouseEnter={() => setHovered3(true)}
                  onMouseLeave={() => setHovered3(false)}>
                  Home & Furniture
                  <Image
                    src={hovered3 ? dpblu : dpbla}
                    alt='drop'
                    className={`${styles.dropdown} ${
                      hovered3 ? styles.rotated : ''
                    }`}
                  />
                  <div className={styles.dropdownBox}></div>
                </div>
              </div>
              <div className={styles.BeautyTous}>
                <Image
                  src={toy}
                  onMouseEnter={() => setHovered4(true)}
                  onMouseLeave={() => setHovered4(false)}
                  className={styles.topIcons}
                  alt='toys'
                />
                <div
                  onMouseEnter={() => setHovered4(true)}
                  onMouseLeave={() => setHovered4(false)}
                  className={styles.topIconDes}>
                  Beauty, Toys & More
                  <Image
                    src={hovered4 ? dpblu : dpbla}
                    alt='drop'
                    className={`${styles.dropdown} ${
                      hovered4 ? styles.rotated : ''
                    }`}
                  />
                  <div className={styles.dropdownBox}></div>
                </div>
              </div>
              <div className={styles.more}>More</div>
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
            <div className={styles.offer}>
              <div className={styles.offerback}></div>
              <div className={styles.offerfront}>
                <h1 className={styles.offH1}>40%</h1>
              </div>
            </div>
            <div className={styles.offer}>
              <div className={styles.offerback}></div>
              <div className={styles.offerfront}>
                <h1 className={styles.offH1}>60%</h1>
              </div>
            </div>
            <div className={styles.offer}>
              <div className={styles.offerback}></div>
              <div className={styles.offerfront}>
                <h1 className={styles.offH1}>20%</h1>
              </div>
            </div>
            <div className={styles.offer}>
              <div className={styles.offerback}></div>
              <div className={styles.offerfront}>
                <h1 className={styles.offH1}>60%</h1>
              </div>
            </div>
            <div className={styles.offer}>
              <div className={styles.offerback}></div>
              <div className={styles.offerfront}>
                <h1 className={styles.offH1}>40%</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.sec2Cont}>
        <div className={styles.sec2}>
          <h1>Top Deals on TVs & Appliances</h1>
          <div className={styles.sec2items}>
            <div className={styles.rowItems}>
              <Image src={lapsvg} alt='/' className={styles.imgitems} />
              <div className={styles.itemDes}>
                <p>Godrej Refrigerator</p>
                <h4>From ₹7,240</h4>
              </div>
            </div>
            <div className={styles.rowItems}>
              <Image src={lapsvg} alt='/' className={styles.imgitems} />
              <div className={styles.itemDes}>
                <p>Godrej Refrigerator</p>
                <h4>From ₹7,240</h4>
              </div>
            </div>
            <div className={styles.rowItems}>
              <Image src={lapsvg} alt='/' className={styles.imgitems} />
              <div className={styles.itemDes}>
                <p>Godrej Refrigerator</p>
                <h4>From ₹7,240</h4>
              </div>
            </div>
            <div className={styles.rowItems}>
              <Image src={lapsvg} alt='/' className={styles.imgitems} />
              <div className={styles.itemDes}>
                <p>Godrej Refrigerator</p>
                <h4>From ₹7,240</h4>
              </div>
            </div>
            <div className={styles.rowItems}>
              <Image src={lapsvg} alt='/' className={styles.imgitems} />
              <div className={styles.itemDes}>
                <p>Godrej Refrigerator</p>
                <h4>From ₹7,240</h4>
              </div>
            </div>
            <div className={styles.rowItems}>
              <Image src={lapsvg} alt='/' className={styles.imgitems} />
              <div className={styles.itemDes}>
                <p>Godrej Refrigerator</p>
                <h4>From ₹7,240</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.threeColumnCont}>
        <div className={styles.tCC1}>
          <div className={styles.tccHead}>
            <h1>Recommeded Items</h1>
          </div>
          <div className={styles.tccItems}>
            <div className={styles.tccAllItems1}>
              <Image src={lapsvg} alt='4item' className={styles.Fouritems} />
              <div className={styles.tccItemTitle}>
                nisatraders DRAGON DOUBLE FLAME SOLID CIGAR CIGARETTE LIGHTER
                Pocket
              </div>
              <div className={styles.tccItemDes}>
                <p className={styles.pPrt1}>₹3,999</p>
                <h3>₹1,999</h3>
                <p className={styles.pPrt2}>50% off</p>
              </div>
            </div>
            <div className={styles.tccAllItems2}>
              <Image src={lapsvg} alt='4item' className={styles.Fouritems} />
              <div className={styles.tccItemTitle}>
                nisatraders DRAGON DOUBLE FLAME SOLID CIGAR CIGARETTE LIGHTER
                Pocket
              </div>
              <div className={styles.tccItemDes}>
                <p className={styles.pPrt1}>₹3,999</p>
                <h3>₹1,999</h3>
                <p className={styles.pPrt2}>50% off</p>
              </div>
            </div>
            <div className={styles.tccAllItems3}>
              <Image src={lapsvg} alt='4item' className={styles.Fouritems} />
              <div className={styles.tccItemTitle}>
                nisatraders DRAGON DOUBLE FLAME SOLID CIGAR CIGARETTE LIGHTER
                Pocket
              </div>
              <div className={styles.tccItemDes}>
                <p className={styles.pPrt1}>₹3,999</p>
                <h3>₹1,999</h3>
                <p className={styles.pPrt2}>50% off</p>
              </div>
            </div>
            <div className={styles.tccAllItems4}>
              <Image src={lapsvg} alt='4item' className={styles.Fouritems} />
              <div className={styles.tccItemTitle}>
                nisatraders DRAGON DOUBLE FLAME SOLID CIGAR CIGARETTE LIGHTER
                Pocket
              </div>
              <div className={styles.tccItemDes}>
                <p className={styles.pPrt1}>₹3,999</p>
                <h3>₹1,999</h3>
                <p className={styles.pPrt2}>50% off</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.tCC2}>
          <div className={styles.tccHead}>
            <h1>Recommeded Items</h1>
          </div>
          <div className={styles.tccItems}>
            <div className={styles.tccAllItems1}>
              <Image src={lapsvg} alt='4item' className={styles.Fouritems} />
              <div className={styles.tccItemTitle}>
                nisatraders DRAGON DOUBLE FLAME SOLID CIGAR CIGARETTE LIGHTER
                Pocket
              </div>
              <div className={styles.tccItemDes}>
                <p className={styles.pPrt1}>₹3,999</p>
                <h3>₹1,999</h3>
                <p className={styles.pPrt2}>50% off</p>
              </div>
            </div>
            <div className={styles.tccAllItems2}>
              <Image src={lapsvg} alt='4item' className={styles.Fouritems} />
              <div className={styles.tccItemTitle}>
                nisatraders DRAGON DOUBLE FLAME SOLID CIGAR CIGARETTE LIGHTER
                Pocket
              </div>
              <div className={styles.tccItemDes}>
                <p className={styles.pPrt1}>₹3,999</p>
                <h3>₹1,999</h3>
                <p className={styles.pPrt2}>50% off</p>
              </div>
            </div>
            <div className={styles.tccAllItems3}>
              <Image src={lapsvg} alt='4item' className={styles.Fouritems} />
              <div className={styles.tccItemTitle}>
                nisatraders DRAGON DOUBLE FLAME SOLID CIGAR CIGARETTE LIGHTER
                Pocket
              </div>
              <div className={styles.tccItemDes}>
                <p className={styles.pPrt1}>₹3,999</p>
                <h3>₹1,999</h3>
                <p className={styles.pPrt2}>50% off</p>
              </div>
            </div>
            <div className={styles.tccAllItems4}>
              <Image src={lapsvg} alt='4item' className={styles.Fouritems} />
              <div className={styles.tccItemTitle}>
                nisatraders DRAGON DOUBLE FLAME SOLID CIGAR CIGARETTE LIGHTER
                Pocket
              </div>
              <div className={styles.tccItemDes}>
                <p className={styles.pPrt1}>₹3,999</p>
                <h3>₹1,999</h3>
                <p className={styles.pPrt2}>50% off</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.tCC3}>
          <div className={styles.tccHead}>
            <h1>Recommeded Items</h1>
          </div>
          <div className={styles.tccItems}>
            <div className={styles.tccAllItems1}>
              <Image src={lapsvg} alt='4item' className={styles.Fouritems} />
              <div className={styles.tccItemTitle}>
                nisatraders DRAGON DOUBLE FLAME SOLID CIGAR CIGARETTE LIGHTER
                Pocket
              </div>
              <div className={styles.tccItemDes}>
                <p className={styles.pPrt1}>₹3,999</p>
                <h3>₹1,999</h3>
                <p className={styles.pPrt2}>50% off</p>
              </div>
            </div>
            <div className={styles.tccAllItems2}>
              <Image src={lapsvg} alt='4item' className={styles.Fouritems} />
              <div className={styles.tccItemTitle}>
                nisatraders DRAGON DOUBLE FLAME SOLID CIGAR CIGARETTE LIGHTER
                Pocket
              </div>
              <div className={styles.tccItemDes}>
                <p className={styles.pPrt1}>₹3,999</p>
                <h3>₹1,999</h3>
                <p className={styles.pPrt2}>50% off</p>
              </div>
            </div>
            <div className={styles.tccAllItems3}>
              <Image src={lapsvg} alt='4item' className={styles.Fouritems} />
              <div className={styles.tccItemTitle}>
                nisatraders DRAGON DOUBLE FLAME SOLID CIGAR CIGARETTE LIGHTER
                Pocket
              </div>
              <div className={styles.tccItemDes}>
                <p className={styles.pPrt1}>₹3,999</p>
                <h3>₹1,999</h3>
                <p className={styles.pPrt2}>50% off</p>
              </div>
            </div>
            <div className={styles.tccAllItems4}>
              <Image src={lapsvg} alt='4item' className={styles.Fouritems} />
              <div className={styles.tccItemTitle}>
                nisatraders DRAGON DOUBLE FLAME SOLID CIGAR CIGARETTE LIGHTER
                Pocket
              </div>
              <div className={styles.tccItemDes}>
                <p className={styles.pPrt1}>₹3,999</p>
                <h3>₹1,999</h3>
                <p className={styles.pPrt2}>50% off</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.sec2Cont}>
        <div className={styles.sec2}>
          <h1>Furniture Deals</h1>
          <div className={styles.sec2items}>
            <div className={styles.rowItems}>
              <Image src={lapsvg} alt='/' className={styles.imgitems} />
              <div className={styles.itemDes}>
                <p>Godrej Refrigerator</p>
                <h4>From ₹7,240</h4>
              </div>
            </div>
            <div className={styles.rowItems}>
              <Image src={lapsvg} alt='/' className={styles.imgitems} />
              <div className={styles.itemDes}>
                <p>Godrej Refrigerator</p>
                <h4>From ₹7,240</h4>
              </div>
            </div>
            <div className={styles.rowItems}>
              <Image src={lapsvg} alt='/' className={styles.imgitems} />
              <div className={styles.itemDes}>
                <p>Godrej Refrigerator</p>
                <h4>From ₹7,240</h4>
              </div>
            </div>
            <div className={styles.rowItems}>
              <Image src={lapsvg} alt='/' className={styles.imgitems} />
              <div className={styles.itemDes}>
                <p>Godrej Refrigerator</p>
                <h4>From ₹7,240</h4>
              </div>
            </div>
            <div className={styles.rowItems}>
              <Image src={lapsvg} alt='/' className={styles.imgitems} />
              <div className={styles.itemDes}>
                <p>Godrej Refrigerator</p>
                <h4>From ₹7,240</h4>
              </div>
            </div>
            <div className={styles.rowItems}>
              <Image src={lapsvg} alt='/' className={styles.imgitems} />
              <div className={styles.itemDes}>
                <p>Godrej Refrigerator</p>
                <h4>From ₹7,240</h4>
              </div>
            </div>
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
                <div className={styles.likeshare}>
                  LIKE
                  <br />
                  SHARE
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
                <div className={styles.likeshare}>
                  LIKE
                  <br />
                  SHARE
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
                <div className={styles.likeshare}>
                  LIKE
                  <br />
                  SHARE
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
            <div className={styles.rowItems}>
              <Image src={lapsvg} alt='/' className={styles.imgitems} />
              <div className={styles.itemDes}>
                <p>Godrej Refrigerator</p>
                <h4>From ₹7,240</h4>
              </div>
            </div>
            <div className={styles.rowItems}>
              <Image src={lapsvg} alt='/' className={styles.imgitems} />
              <div className={styles.itemDes}>
                <p>Godrej Refrigerator</p>
                <h4>From ₹7,240</h4>
              </div>
            </div>
            <div className={styles.rowItems}>
              <Image src={lapsvg} alt='/' className={styles.imgitems} />
              <div className={styles.itemDes}>
                <p>Godrej Refrigerator</p>
                <h4>From ₹7,240</h4>
              </div>
            </div>
            <div className={styles.rowItems}>
              <Image src={lapsvg} alt='/' className={styles.imgitems} />
              <div className={styles.itemDes}>
                <p>Godrej Refrigerator</p>
                <h4>From ₹7,240</h4>
              </div>
            </div>
            <div className={styles.rowItems}>
              <Image src={lapsvg} alt='/' className={styles.imgitems} />
              <div className={styles.itemDes}>
                <p>Godrej Refrigerator</p>
                <h4>From ₹7,240</h4>
              </div>
            </div>
            <div className={styles.rowItems}>
              <Image src={lapsvg} alt='/' className={styles.imgitems} />
              <div className={styles.itemDes}>
                <p>Godrej Refrigerator</p>
                <h4>From ₹7,240</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
