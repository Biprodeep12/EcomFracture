import styles from '@/styles/sec1.module.css';
import React, { useEffect, useState, useRef } from 'react';
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
import { db, auth } from '@/firebase/firebase';
import { doc, getDoc, updateDoc, arrayUnion } from 'firebase/firestore';
import { useRouter } from 'next/router';

import Samsug from '@/ProdutImages/Samsung4k.webp';
import Dyson from '@/ProdutImages/dysonImg.webp';
import Sony from '@/ProdutImages/sonyImg.webp';
import Phil from '@/ProdutImages/philImg.webp';
import Whirl from '@/ProdutImages/whirlImg.webp';
import LG from '@/ProdutImages/LGImg.avif';
import ColWard from '@/ProdutImages/CollaImg.webp';
import Dinn from '@/ProdutImages/DiningImg.webp';
import Chair from '@/ProdutImages/offChImg.webp';
import Bed from '@/ProdutImages/QueenBedImg.webp';
import ColSt from '@/ProdutImages/ColStandImg.webp';
import port from '@/ProdutImages/portImg.webp';

const sec2Cont1 = [
  {
    img: Samsug,
    title: 'Samsung Crystal UHD 4K TV',
    price: '₹29,999',
    features: [
      '43-inch Ultra HD (4K) display',
      'Smart Tizen OS',
      'Voice Assistant Support (Bixby, Alexa, Google Assistant)',
      'HDR10+ for enhanced picture quality',
      'Auto Game Mode for smooth gaming',
      'Crystal Processor 4K for superior upscaling',
      'Bluetooth 5.0 & Wi-Fi connectivity',
      '20W Dolby Digital Plus speakers',
      'Screen Mirroring & Casting support',
      '3 HDMI & 2 USB ports for connectivity',
    ],
  },
  {
    img: Dyson,
    title: 'Dyson Air Purifier & Heater',
    price: '₹42,499',
    features: [
      'HEPA filter captures 99.97% pollutants',
      'Hot & Cool Airflow with intelligent temperature control',
      'Wi-Fi enabled app control & Alexa compatibility',
      '360-degree glass filtration technology',
      'Real-time air quality monitoring',
      'Night mode with quiet operation',
      'Oscillation up to 350 degrees',
      'Automatic humidity & temperature adjustment',
      'Energy-efficient design',
      'Filter life indicator with easy replacement',
    ],
  },
  {
    img: Sony,
    title: 'Sony Bravia OLED 55-inch',
    price: '₹89,999',
    features: [
      '55-inch OLED 4K HDR display',
      'Dolby Vision & Dolby Atmos support',
      'Google TV OS with voice search',
      'Cognitive Processor XR for better contrast & clarity',
      'XR Motion Clarity for smooth visuals',
      'Built-in Chromecast & Apple AirPlay support',
      'Acoustic Surface Audio technology',
      'Hands-free voice control with Google Assistant',
      'HDMI 2.1 support for gaming (4K 120Hz)',
      'Netflix Calibrated Mode for cinematic experience',
    ],
  },
  {
    img: Phil,
    title: 'Philips Air Fryer XXL',
    price: '₹9,499',
    features: [
      'Rapid Air Technology for healthy frying',
      '1.4 kg large capacity for family meals',
      'Fat Removal Technology for 90% less oil',
      'Digital touch panel with presets',
      'Keep Warm function for convenience',
      'Dishwasher-safe removable parts',
      'Automatic shut-off for safety',
      'Preheat function for crispier results',
      'Recipe book with over 100+ dishes',
      'Compact design with easy storage',
    ],
  },
  {
    img: Whirl,
    title: 'Whirlpool 7kg Washing Machine',
    price: '₹25,999',
    features: [
      '6th Sense Technology for automatic load sensing',
      '1200 RPM powerful motor',
      'Inverter Direct Drive for energy efficiency',
      'Steam Wash for deep cleaning',
      '15 wash programs for all fabrics',
      'Delay Start & Quick Wash options',
      'Water Softener Technology for hard water',
      'Child Lock for safety',
      'LED Display with touch controls',
      'Low noise & vibration design',
    ],
  },
  {
    img: LG,
    title: 'LG 8kg Wi-Fi Direct Washing Machine',
    price: '₹34,990',
    features: [
      'AI DD Technology for fabric protection',
      'Smart ThinQ app control via Wi-Fi',
      'Steam Wash for hygiene & allergy care',
      'TurboWash 360 for fast washing',
      'Smart Diagnosis for troubleshooting',
      'Inverter Direct Drive for energy saving',
      'Auto Restart after power cut',
      'Stainless Steel Drum for durability',
      'Silent operation with vibration reduction',
      '10-year motor warranty',
    ],
  },
];
const sec2Cont2 = [
  {
    img: ColWard,
    title: 'Modern Collapsible Wardrobe',
    price: '₹1,299',
    features: [
      'High-quality non-woven fabric cover',
      'Sturdy steel frame for durability',
      'Multiple shelves & hanging space',
      'Lightweight and easy to move',
      'Foldable design for compact storage',
      'Waterproof & dust-resistant material',
      'Zippered closure for protection',
      'Tool-free assembly in minutes',
      'Variety of colors available',
      'Ideal for bedrooms & rental apartments',
    ],
  },
  {
    img: Dinn,
    title: 'Luxury 4-Seater Dining Table Set',
    price: '₹7,999',
    features: [
      'Premium solid wood construction',
      'Scratch-resistant & waterproof finish',
      'Ergonomic chairs with cushioned seats',
      'Stylish modern design with elegant polish',
      'Easy to clean with a damp cloth',
      'Compact size, perfect for apartments',
      'Non-slip leg pads for stability',
      'DIY assembly with provided tools',
      'Available in multiple wood finishes',
      'Supports up to 150 kg per chair',
    ],
  },
  {
    img: Chair,
    title: 'Ergonomic Office Chair',
    price: '₹5,999',
    features: [
      'Adjustable height & tilt mechanism',
      'Breathable mesh backrest for airflow',
      'High-density foam seat cushion',
      '360-degree swivel & smooth-rolling wheels',
      'Sturdy metal base for extra stability',
      'Padded armrests for comfort',
      'BIFMA-certified for durability',
      'Weight capacity up to 120 kg',
      'Easy to assemble in minutes',
      'Available in black, grey & blue variants',
    ],
  },
  {
    img: Bed,
    title: 'Solid Wood Queen Size Bed',
    price: '₹13,499',
    features: [
      'Premium engineered wood with natural finish',
      'Sturdy frame with a weight capacity of 250 kg',
      'Hydraulic storage system for extra space',
      'Anti-creak design for silent sleep',
      'Headboard with built-in shelf',
      'Termite & moisture-resistant coating',
      'Modern minimalist design',
      'Fits all standard queen-size mattresses',
      'Easy to assemble with DIY instructions',
      '10-year warranty on manufacturing defects',
    ],
  },
  {
    img: ColSt,
    title: 'Collapsible Shoe Rack',
    price: '₹2,499',
    features: [
      '5-tier storage for up to 25 pairs of shoes',
      'Waterproof & dustproof fabric cover',
      'Durable steel pipes for strong support',
      'Lightweight & easy to move around',
      'Foldable design for space-saving storage',
      'Adjustable shelf heights for different shoe types',
      'Breathable fabric to prevent odor buildup',
      'Quick & tool-free assembly',
      'Available in brown, grey, and black colors',
      'Suitable for hallways, closets, or balconies',
    ],
  },
  {
    img: port,
    title: 'Adjustable Portable Laptop Table',
    price: '₹799',
    features: [
      'Ergonomic height & angle adjustment',
      'Sturdy MDF wood top with anti-scratch coating',
      'Aluminum frame for lightweight portability',
      'Non-slip rubber feet for stability',
      'Built-in cooling fan for laptops',
      'Foldable design for easy storage',
      'Side drawer for accessories & cables',
      'Supports up to 40 kg weight',
      'Multipurpose use as a reading or breakfast table',
      'Compact & travel-friendly design',
    ],
  },
];
const prodColumn = [
  {
    head: 'Recommended Items',
    title1: 'Sony WH-1000XM5 Noise Cancelling Headphones',
    OrgPrice1: '₹29,999',
    DisPrice1: '₹25,999',
    Dis1: '13% off',
    title2: 'Apple MacBook Air M2 Chip - 13.6-inch',
    OrgPrice2: '₹1,14,900',
    DisPrice2: '₹1,05,900',
    Dis2: '8% off',
    title3: 'Samsung Galaxy S23 Ultra 5G',
    OrgPrice3: '₹1,24,999',
    DisPrice3: '₹1,09,999',
    Dis3: '12% off',
    title4: 'boAt Airdopes 141 Wireless Earbuds',
    OrgPrice4: '₹4,499',
    DisPrice4: '₹1,299',
    Dis4: '71% off',
  },
  {
    head: 'More to Explore',
    title1: 'Asus ROG Strix G16 Gaming Laptop',
    OrgPrice1: '₹1,29,990',
    DisPrice1: '₹1,09,990',
    Dis1: '15% off',
    title2: 'GoPro HERO12 Black Action Camera',
    OrgPrice2: '₹45,000',
    DisPrice2: '₹39,500',
    Dis2: '12% off',
    title3: 'Logitech MX Master 3S Wireless Mouse',
    OrgPrice3: '₹10,999',
    DisPrice3: '₹8,999',
    Dis3: '18% off',
    title4: 'Kindle Paperwhite 11th Gen',
    OrgPrice4: '₹13,999',
    DisPrice4: '₹11,499',
    Dis4: '18% off',
  },
  {
    head: 'Top Selection',
    title1: 'Samsung The Frame 55-inch QLED 4K TV',
    OrgPrice1: '₹1,29,990',
    DisPrice1: '₹89,990',
    Dis1: '31% off',
    title2: 'Sony PlayStation 5 Console',
    OrgPrice2: '₹54,990',
    DisPrice2: '₹49,990',
    Dis2: '9% off',
    title3: 'Nikon Z50 Mirrorless Camera',
    OrgPrice3: '₹99,995',
    DisPrice3: '₹89,995',
    Dis3: '10% off',
    title4: 'Bose SoundLink Revolve+ Bluetooth Speaker',
    OrgPrice4: '₹29,999',
    DisPrice4: '₹24,999',
    Dis4: '16% off',
  },
  {
    head: 'Suggested for You',
    title1: 'HP Pavilion x360 Touchscreen Laptop',
    OrgPrice1: '₹74,999',
    DisPrice1: '₹67,999',
    Dis1: '9% off',
    title2: 'Apple iPad Air (5th Gen, Wi-Fi, 64GB)',
    OrgPrice2: '₹59,900',
    DisPrice2: '₹54,900',
    Dis2: '8% off',
    title3: 'JBL PartyBox 310 Portable Speaker',
    OrgPrice3: '₹44,999',
    DisPrice3: '₹39,999',
    Dis3: '11% off',
    title4: 'Canon EOS R10 Mirrorless Camera',
    OrgPrice4: '₹84,995',
    DisPrice4: '₹79,995',
    Dis4: '6% off',
  },
  {
    head: 'Trending in Laptops',
    title1: 'Dell XPS 13 OLED Laptop',
    OrgPrice1: '₹1,49,990',
    DisPrice1: '₹1,29,990',
    Dis1: '13% off',
    title2: 'Lenovo Legion 5 Pro Gaming Laptop',
    OrgPrice2: '₹1,69,990',
    DisPrice2: '₹1,49,990',
    Dis2: '12% off',
    title3: 'Microsoft Surface Laptop Studio',
    OrgPrice3: '₹2,09,999',
    DisPrice3: '₹1,89,999',
    Dis3: '10% off',
    title4: 'Acer Nitro 5 Gaming Laptop',
    OrgPrice4: '₹89,999',
    DisPrice4: '₹79,999',
    Dis4: '11% off',
  },
  {
    head: 'Recommended for You',
    title1: 'OnePlus Nord CE 3 Lite 5G',
    OrgPrice1: '₹21,999',
    DisPrice1: '₹19,999',
    Dis1: '9% off',
    title2: 'Samsung Galaxy Watch 5 Pro',
    OrgPrice2: '₹44,999',
    DisPrice2: '₹39,999',
    Dis2: '11% off',
    title3: 'Anker PowerCore 20000mAh Power Bank',
    OrgPrice3: '₹5,499',
    DisPrice3: '₹3,999',
    Dis3: '27% off',
    title4: 'TP-Link Archer AX73 Wi-Fi 6 Router',
    OrgPrice4: '₹15,999',
    DisPrice4: '₹12,999',
    Dis4: '19% off',
  },
];

export default function Sect() {
  const images = [lap1, lap2, lap3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [hovered4, setHovered4] = useState(false);

  const [wishes, setWishes] = useState({});

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

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        const userRef = doc(db, 'users', currentUser.uid);
        const userDoc = await getDoc(userRef);

        if (userDoc.exists()) {
          const storedWishlist = userDoc.data().wishlist || [];
          const newWishes = {};

          storedWishlist.forEach((item) => {
            newWishes[item] = true;
          });

          setWishes(newWishes);
        }
      } else {
        setWishes({});
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLike = async (title, price) => {
    if (!user) {
      alert('Please log in to save items to your wishlist.');
      return;
    }

    if (!title || price === undefined) {
      console.error('Invalid item: missing title or price');
      return;
    }

    const userRef = doc(db, 'users', user.uid);
    const userDoc = await getDoc(userRef);

    try {
      const item = { title, price };

      if (wishes[title]) {
        const updatedWishlist = userDoc
          .data()
          ?.wishlist.filter((wishItem) => wishItem.title !== title);
        await updateDoc(userRef, { wishlist: updatedWishlist });
      } else {
        await updateDoc(userRef, {
          wishlist: arrayUnion(item),
        });
      }

      setWishes((prev) => ({
        ...prev,
        [title]: !prev[title],
      }));
    } catch (err) {
      console.error('Error updating wishlist:', err);
    }
  };

  const scrollContainerRef = useRef(null);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 200;
    }
  };

  const router = useRouter();

  const handleClick = (item) => {
    router.push({
      pathname: '/Land',
      query: {
        title: item.title,
        price: item.price,
        image: item.img.src,
        features: item.features,
      },
    });
  };

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
          <div ref={scrollContainerRef} className={styles.sec2items}>
            {sec2Cont1.map((des, index) => (
              <div
                key={index}
                className={styles.rowItems}
                onClick={() => handleClick(des)}>
                <Image src={des.img} alt='/' className={styles.imgitems} />
                <div className={styles.itemDes}>
                  <p>{des.title}</p>
                  <h4>From {des.price}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button onClick={scrollRight} className={styles.rowItemsNext}>
          <Image src={next} className={styles.rowNext} alt='next' />
        </button>
      </section>
      <section className={styles.threeColumnCont}>
        {prodColumn.map((info, index) => (
          <div key={index} className={styles.tCC1}>
            <div className={styles.tccHead}>
              <h1>{info.head}</h1>
            </div>
            <div className={styles.tccItems}>
              <div className={styles.tccAllItems1}>
                <Image src={lapsvg} alt='4item' className={styles.Fouritems} />
                <div className={styles.tccItemTitle}>{info.title1}</div>
                <div className={styles.tccItemDes}>
                  <p className={styles.pPrt1}>{info.OrgPrice1}</p>
                  <h3>{info.DisPrice1}</h3>
                  <p className={styles.pPrt2}>{info.Dis1}</p>
                </div>
              </div>
              <div className={styles.tccAllItems2}>
                <Image src={lapsvg} alt='4item' className={styles.Fouritems} />
                <div className={styles.tccItemTitle}>{info.title2}</div>
                <div className={styles.tccItemDes}>
                  <p className={styles.pPrt1}>{info.OrgPrice2}</p>
                  <h3>{info.DisPrice2}</h3>
                  <p className={styles.pPrt2}>{info.Dis2}</p>
                </div>
              </div>
              <div className={styles.tccAllItems3}>
                <Image src={lapsvg} alt='4item' className={styles.Fouritems} />
                <div className={styles.tccItemTitle}>{info.title3}</div>
                <div className={styles.tccItemDes}>
                  <p className={styles.pPrt1}>{info.OrgPrice3}</p>
                  <h3>{info.DisPrice3}</h3>
                  <p className={styles.pPrt2}>{info.Dis3}</p>
                </div>
              </div>
              <div className={styles.tccAllItems4}>
                <Image src={lapsvg} alt='4item' className={styles.Fouritems} />
                <div className={styles.tccItemTitle}>{info.title4}</div>
                <div className={styles.tccItemDes}>
                  <p className={styles.pPrt1}>{info.OrgPrice4}</p>
                  <h3>{info.DisPrice4}</h3>
                  <p className={styles.pPrt2}>{info.Dis4}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
      <section className={styles.sec2Cont}>
        <div className={styles.sec2}>
          <h1>Furniture Deals</h1>
          <div ref={scrollContainerRef} className={styles.sec2items}>
            {sec2Cont2.map((des, index) => (
              <div
                key={index}
                className={styles.rowItems}
                onClick={() => handleClick(des)}>
                <Image src={des.img} alt='/' className={styles.imgitems} />
                <div className={styles.itemDes}>
                  <p>{des.title}</p>
                  <h4>From {des.price}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button onClick={scrollRight} className={styles.rowItemsNext}>
          <Image src={next} className={styles.rowNext} alt='next' />
        </button>
      </section>
      <div className={styles.trendCont}>
        <div className={styles.trend}>Trending</div>
      </div>
      <section className={styles.threeParal}>
        <div className={styles.tP1}>
          {[
            {
              title:
                'GIGABYTE Intel Core i7 12th Gen 12650H - (16 GB/512 GB SSD/Windows 11 Home/6 GB Graphics/NVIDIA GeForce RTX 4050) G5 MF-G2IN313SH Gaming Laptop (15 inch, Black, 2.09 Kg)',
              price: '9000',
            },
            {
              title:
                'HP AMD Athlon Dual Core - (8 GB/256 GB SSD/Windows 11 Home) 255 Laptop (15.6 inch, Black)',
              price: '4000',
            },
            {
              title:
                'GIGABYTE Intel Core i7 12th Gen 12650H - (16 GB/512 GB SSD/Windows 11 Home/6 GB Graphics/NVIDIA GeForce RTX 4050) G5 MF-G2IN313SH Gaming Laptop (15 inch, Black, 2.08 Kg)',
              price: '2500',
            },
            {
              title:
                'HP AMD Athlon Dual Core - (8 GB/256 GB SSD/Windows 11 Home) 255 Laptop (15.6 inch, grey)',
              price: '90000',
            },
            {
              title:
                'GIGABYTE Intel Core i7 12th Gen 12650H - (16 GB/512 GB SSD/Windows 11 Home/6 GB Graphics/NVIDIA GeForce RTX 4050) G5 MF-G2IN313SH Gaming Laptop (15 inch, Black, 2.1 Kg)',
              price: '7000',
            },
          ].map((laptop, index) => (
            <div key={index} className={styles.tp1IN}>
              <div className={styles.tp1INx}>
                <Image src={lapsvg} alt='lapsvg' className={styles.lapsvg} />
                <div className={styles.likeshareCont}>
                  <div
                    onClick={() => handleLike(laptop.title, laptop.price)}
                    className={styles.likeshare}>
                    <Image
                      src={wishes[laptop.title] ? heartRed : heart}
                      alt='like'
                      className={styles.likeTP}
                    />
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
                'HP AMD Athlon Dual Core - (78 GB/256 GB SSD/Windows 11 Home) 255 Laptop (15.6 inch, Black)',
              price: '320000',
            },
            {
              title:
                'HP AMD Athlon Dual Core - (2 GB/256 GB SSD/Windows 11 Home) 255 Laptop (15.6 inch, Black)',
              price: '90000',
            },
            {
              title:
                'HP AMD Athlon Dual Core - (68 GB/256 GB SSD/Windows 11 Home) 255 Laptop (15.6 inch, Black)',
              price: '78000',
            },
            {
              title:
                'HP AMD Athlon Dual Core - (8 GB/256 GB SSD/Windows 11 Home) 255 Laptop (15.6 inch, Black)',
              price: '329000',
            },
            {
              title:
                'GIGABYTE Intel Core i7 69th Gen 12650H - (16 GB/512 GB SSD/Windows 11 Home/6 GB Graphics/NVIDIA GeForce RTX 4050) G5 MF-G2IN313SH Gaming Laptop (15 inch, Black, 2.08 Kg)',
              price: '62000',
            },
          ].map((laptop, index) => (
            <div key={index} className={styles.tp1IN}>
              <div className={styles.tp1INx}>
                <Image src={lapsvg} alt='lapsvg' className={styles.lapsvg} />
                <div className={styles.likeshareCont}>
                  <div
                    onClick={() => handleLike(laptop.title, laptop.price)}
                    className={styles.likeshare}>
                    <Image
                      src={wishes[laptop.title] ? heartRed : heart}
                      alt='like'
                      className={styles.likeTP}
                    />
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
                'GIGABYTE Intel Core i7 12th Gen 12650H - (16 GB/512 GB SSD/Windows 11 Home/6 GB Graphics/NVIDIA GeForce RTX 4050) G5 MF-G2IN313SH Gaming Laptop (85 inch, Black, 2.08 Kg)',
              price: '12300',
            },
            {
              title:
                'HP AMD Athlon Dual Core - (8 GB/512 GB SSD/Windows 11 Home) 255 Laptop (15.6 inch, Black)',
              price: '19300',
            },
            {
              title:
                'GIGABYTE Intel Core i7 12th Gen 12650H - (69 GB/512 GB SSD/Windows 11 Home/6 GB Graphics/NVIDIA GeForce RTX 4050) G5 MF-G2IN313SH Gaming Laptop (15 inch, Black, 2.08 Kg)',
              price: '62300',
            },
            {
              title:
                'HP AMD Athlon pentagon Core - (8 GB/256 GB SSD/Windows 11 Home) 255 Laptop (15.6 inch, Black)',
              price: '69000',
            },
            {
              title:
                'GIGABYTE Intel Core i12 12th Gen 12650H - (16 GB/512 GB SSD/Windows 11 Home/6 GB Graphics/NVIDIA GeForce RTX 4050) G5 MF-G2IN313SH Gaming Laptop (15 inch, Black, 2.08 Kg)',
              price: '90000',
            },
          ].map((laptop, index) => (
            <div key={index} className={styles.tp1IN}>
              <div className={styles.tp1INx}>
                <Image src={lapsvg} alt='lapsvg' className={styles.lapsvg} />
                <div className={styles.likeshareCont}>
                  <div
                    onClick={() => handleLike(laptop.title, laptop.price)}
                    className={styles.likeshare}>
                    <Image
                      src={wishes[laptop.title] ? heartRed : heart}
                      alt='like'
                      className={styles.likeTP}
                    />
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
          <div ref={scrollContainerRef} className={styles.sec2items}>
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
        <button onClick={scrollRight} className={styles.rowItemsNext}>
          <Image src={next} className={styles.rowNext} alt='next' />
        </button>
      </section>
    </>
  );
}
