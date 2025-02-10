import styles from '@/styles/sec1.module.css';
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import lap1 from '@/ProdutImages/lap1.png';
import lap2 from '@/ProdutImages/lap2.png';
import lap3 from '@/ProdutImages/lap3.png';
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
import { doc, getDoc, updateDoc, setDoc, arrayUnion } from 'firebase/firestore';
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

import Trend1 from '@/ProdutImages/sonyBravia.webp';
import Trend2 from '@/ProdutImages/Apple14.webp';
import Trend3 from '@/ProdutImages/Dell14.webp';
import Trend4 from '@/ProdutImages/SamsungG.webp';
import Trend5 from '@/ProdutImages/JblParty.webp';
import Trend6 from '@/ProdutImages/asusRog.webp';
import Trend7 from '@/ProdutImages/samGal.webp';
import Trend8 from '@/ProdutImages/BoseW.webp';
import Trend9 from '@/ProdutImages/dysonV15.webp';
import Trend10 from '@/ProdutImages/garmin.webp';
import Trend11 from '@/ProdutImages/dellXps.webp';
import Trend12 from '@/ProdutImages/appleMac.webp';
import Trend13 from '@/ProdutImages/asusZep.webp';
import Trend14 from '@/ProdutImages/lenovoLegPro.webp';
import Trend15 from '@/ProdutImages/hpSpec.webp';

const sec2Cont1 = [
  {
    img: Samsug,
    title: 'Samsung Crystal UHD 4K TV',
    price: '29,999',
    orgPrice: '49,999',
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
    price: '42,499',
    orgPrice: '68,900',
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
    price: '89,999',
    orgPrice: '116,900',
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
    price: '9,499',
    orgPrice: '15,999',
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
    price: '25,999',
    orgPrice: '35,000',
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
    price: '34,990',
    orgPrice: '78,000',
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
    price: '1,299',
    orgPrice: '5,000',
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
    price: '7,999',
    orgPrice: '15,000',
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
    price: '5,999',
    orgPrice: '8,999',
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
    price: '13,499',
    orgPrice: '18,500',
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
    price: '2,499',
    orgPrice: '3,900',
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
    price: '799',
    orgPrice: '1,500',
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
    items: [
      {
        img: lapsvg,
        title: 'Sony WH-1000XM5 Noise Cancelling Headphones',
        orgPrice: '29,999',
        price: '25,999',
        Discount: '13% off',
        features: [
          'Industry-leading Active Noise Cancellation',
          'Up to 30 hours of battery life',
          'Touch controls for playback and volume',
          'LDAC support for high-resolution audio',
          'Multipoint connection for dual device pairing',
          'Adaptive sound control',
          'Lightweight and comfortable fit',
        ],
      },
      {
        img: lapsvg,
        title: 'Apple MacBook Air M2 Chip - 13.6-inch',
        orgPrice: '1,14,900',
        price: '1,05,900',
        Discount: '8% off',
        features: [
          'Apple M2 chip with 8-core CPU & 8-core GPU',
          '13.6-inch Liquid Retina display',
          'Up to 18 hours of battery life',
          'Fanless design for silent operation',
          'MagSafe charging port',
          '1080p FaceTime HD camera',
          'Supports up to 24GB unified memory',
        ],
      },
      {
        img: lapsvg,
        title: 'Samsung Galaxy S23 Ultra 5G',
        orgPrice: '1,24,999',
        price: '1,09,999',
        Discount: '12% off',
        features: [
          '6.8-inch Dynamic AMOLED 2X display',
          '200MP primary camera with Nightography',
          'Snapdragon 8 Gen 2 processor',
          'S Pen support with built-in slot',
          '5,000mAh battery with 45W fast charging',
          'IP68 water and dust resistance',
          'One UI 5.1 based on Android 13',
        ],
      },
      {
        img: lapsvg,
        title: 'boAt Airdopes 141 Wireless Earbuds',
        orgPrice: '4,499',
        price: '1,299',
        Discount: '71% off',
        features: [
          'Up to 42 hours of total playback',
          'ENx technology for clear calls',
          '10mm dynamic drivers',
          'IPX4 sweat and water resistance',
          'Bluetooth v5.1 for stable connectivity',
          'Low-latency gaming mode',
          'Type-C fast charging support',
        ],
      },
    ],
  },
  {
    head: 'More to Explore',
    items: [
      {
        img: lapsvg,
        title: 'Asus ROG Strix G16 Gaming Laptop',
        orgPrice: '1,29,990',
        price: '1,09,990',
        Discount: '15% off',
        features: [
          'Intel Core i7 13th Gen processor',
          'NVIDIA RTX 4060 GPU',
          '16GB DDR5 RAM, 512GB SSD',
          '165Hz 16-inch QHD+ display',
          'Per-key RGB backlit keyboard',
          'ROG Intelligent Cooling system',
          'Dolby Atmos audio',
        ],
      },
      {
        img: lapsvg,
        title: 'GoPro HERO12 Black Action Camera',
        orgPrice: '45,000',
        price: '39,500',
        Discount: '12% off',
        features: [
          '5.3K60 and 4K120 video recording',
          'HyperSmooth 6.0 stabilization',
          'Waterproof up to 33ft',
          '10-bit color depth for vivid visuals',
          'Horizon Lock for steady shots',
          'Voice control and live streaming',
          'GP2 processor for high performance',
        ],
      },
      {
        img: lapsvg,
        title: 'Logitech MX Master 3S Wireless Mouse',
        orgPrice: '10,999',
        price: '8,999',
        Discount: '18% off',
        features: [
          '8K DPI precision sensor',
          'Silent magnetic scroll wheel',
          'Ergonomic hand-sculpted design',
          'Up to 70 days of battery life',
          'USB-C quick charging',
          'Customizable buttons',
          'Works on virtually any surface',
        ],
      },
      {
        img: lapsvg,
        title: 'Kindle Paperwhite 11th Gen',
        orgPrice: '13,999',
        price: '11,499',
        Discount: '18% off',
        features: [
          '6.8-inch glare-free display',
          'Adjustable warm light',
          'Up to 10 weeks of battery life',
          'Waterproof (IPX8 rating)',
          '300 PPI high-resolution screen',
          'Bluetooth support for audiobooks',
          'USB-C charging',
        ],
      },
    ],
  },
  {
    head: 'Top Selection',
    items: [
      {
        img: lapsvg,
        title: 'Samsung The Frame 55-inch QLED 4K TV',
        orgPrice: '1,29,990',
        price: '89,990',
        Discount: '31% off',
        features: [
          '55-inch QLED 4K UHD display',
          'Art Mode to display artwork when not in use',
          'Quantum HDR for enhanced contrast',
          '100% Color Volume with Quantum Dot technology',
          'Motion Sensor to activate Art Mode',
          'Dolby Atmos and Object Tracking Sound',
          'Slim Fit Wall Mount for seamless installation',
        ],
      },
      {
        img: lapsvg,
        title: 'Sony PlayStation 5 Console',
        orgPrice: '54,990',
        price: '49,990',
        Discount: '9% off',
        features: [
          'Ultra-fast SSD for near-instant loading',
          'Ray tracing for realistic lighting and shadows',
          '4K gaming with up to 120Hz refresh rate',
          'Haptic feedback and adaptive triggers',
          'Tempest 3D AudioTech for immersive sound',
          'Backwards compatibility with PS4 games',
          'DualSense controller with advanced vibration',
        ],
      },
      {
        img: lapsvg,
        title: 'Nikon Z50 Mirrorless Camera',
        orgPrice: '99,995',
        price: '89,995',
        Discount: '10% off',
        features: [
          '20.9MP APS-C CMOS sensor',
          '4K UHD video recording',
          '11fps continuous shooting',
          'Flip-down touchscreen for vlogging',
          'Eye-detection autofocus',
          'Bluetooth and Wi-Fi connectivity',
          'Weather-sealed body',
        ],
      },
      {
        img: lapsvg,
        title: 'Bose SoundLink Revolve+ Bluetooth Speaker',
        orgPrice: '29,999',
        price: '24,999',
        Discount: '16% off',
        features: [
          '360-degree sound for uniform audio dispersion',
          'IP55 water and dust resistance',
          'Up to 17 hours of battery life',
          'Built-in microphone for voice assistant support',
          'Pair two speakers for stereo mode',
          'Rugged aluminum body',
          'Supports NFC pairing',
        ],
      },
    ],
  },
  {
    head: 'Suggested for You',
    items: [
      {
        img: lapsvg,
        title: 'HP Pavilion x360 Touchscreen Laptop',
        orgPrice: '74,999',
        price: '67,999',
        Discount: '9% off',
        features: [
          '11th Gen Intel Core i5 processor',
          '14-inch Full HD touchscreen display',
          '360-degree hinge for multiple modes',
          '8GB RAM, 512GB SSD storage',
          'Backlit keyboard',
          'B&O dual speakers',
          'Fast-charging support',
        ],
      },
      {
        img: lapsvg,
        title: 'Apple iPad Air (5th Gen, Wi-Fi, 64GB)',
        orgPrice: '59,900',
        price: '54,900',
        Discount: '8% off',
        features: [
          'Apple M1 chip for faster performance',
          '10.9-inch Liquid Retina display',
          'Touch ID for secure authentication',
          'Supports Apple Pencil (2nd Gen)',
          '12MP ultra-wide front camera with Center Stage',
          'All-day battery life',
          'Wi-Fi 6 for fast internet connectivity',
        ],
      },
      {
        img: lapsvg,
        title: 'JBL PartyBox 310 Portable Speaker',
        orgPrice: '44,999',
        price: '39,999',
        Discount: '11% off',
        features: [
          '240W powerful JBL Pro Sound',
          'Dynamic light show with party sync',
          'Up to 18 hours of battery life',
          'IPX4 splash-proof rating',
          'Bluetooth, USB, and AUX connectivity',
          'Dual mic and guitar inputs',
          'Telescopic handle and wheels for portability',
        ],
      },
      {
        img: lapsvg,
        title: 'Canon EOS R10 Mirrorless Camera',
        orgPrice: '84,995',
        price: '79,995',
        Discount: '6% off',
        features: [
          '24.2MP APS-C CMOS sensor',
          '4K 60p video recording',
          'Dual Pixel CMOS AF II for fast focus',
          '15fps continuous shooting',
          'Vari-angle LCD touchscreen',
          'Wi-Fi and Bluetooth connectivity',
          'Lightweight and compact design',
        ],
      },
    ],
  },
  {
    head: 'Trending in Laptops',
    items: [
      {
        img: lapsvg,
        title: 'Dell XPS 13 OLED Laptop',
        orgPrice: '1,49,990',
        price: '1,29,990',
        Discount: '13% off',
        features: [
          '13.4-inch 3.5K OLED touchscreen',
          'Intel Core i7 13th Gen processor',
          '16GB RAM, 512GB SSD storage',
          'Backlit keyboard with fingerprint reader',
          'EyeSafe display technology',
          'Thunderbolt 4 support',
          'Long-lasting battery life',
        ],
      },
      {
        img: lapsvg,
        title: 'Lenovo Legion 5 Pro Gaming Laptop',
        orgPrice: '1,69,990',
        price: '1,49,990',
        Discount: '12% off',
        features: [
          'AMD Ryzen 7 6800H processor',
          'NVIDIA RTX 3070 Ti GPU',
          '16-inch WQXGA 165Hz display',
          '16GB DDR5 RAM, 1TB SSD storage',
          'Legion Coldfront 4.0 cooling system',
          'Per-key RGB backlit keyboard',
          'Nahimic 3D audio',
        ],
      },
      {
        img: lapsvg,
        title: 'Microsoft Surface Laptop Studio',
        orgPrice: '2,09,999',
        price: '1,89,999',
        Discount: '10% off',
        features: [
          '14.4-inch PixelSense Flow touchscreen',
          'Intel Core i7 11th Gen processor',
          'NVIDIA RTX 3050 Ti GPU',
          '16GB RAM, 512GB SSD storage',
          'Dynamic woven hinge for multiple modes',
          'Windows 11 Pro pre-installed',
          'Studio-quality dual far-field microphones',
        ],
      },
      {
        img: lapsvg,
        title: 'Acer Nitro 5 Gaming Laptop',
        orgPrice: '89,999',
        price: '79,999',
        Discount: '11% off',
        features: [
          'Intel Core i5 12th Gen processor',
          'NVIDIA RTX 3050 GPU',
          '15.6-inch FHD 144Hz display',
          '8GB RAM, 512GB SSD storage',
          'NitroSense cooling technology',
          'RGB backlit keyboard',
          'DTS:X Ultra audio',
        ],
      },
    ],
  },
  {
    head: 'Recommended for You',
    items: [
      {
        img: lapsvg,
        title: 'OnePlus Nord CE 3 Lite 5G',
        orgPrice: '21,999',
        price: '19,999',
        Discount: '9% off',
        features: [
          '6.72-inch FHD+ 120Hz display',
          'Snapdragon 695 processor',
          '108MP AI triple camera setup',
          '5000mAh battery with 67W SUPERVOOC charging',
          'OxygenOS based on Android 13',
          'Dual stereo speakers',
          '5G connectivity',
        ],
      },
      {
        img: lapsvg,
        title: 'Samsung Galaxy Watch 5 Pro',
        orgPrice: '44,999',
        price: '39,999',
        Discount: '11% off',
        features: [
          '1.4-inch AMOLED display with Sapphire Glass',
          'BioActive Sensor for health tracking',
          'GPS with Route Tracking',
          'Up to 80 hours battery life',
          '5ATM + IP68 water resistance',
          'Wireless fast charging',
          'Wear OS powered by Samsung',
        ],
      },
      {
        img: lapsvg,
        title: 'Anker PowerCore 20000mAh Power Bank',
        orgPrice: '5,499',
        price: '3,999',
        Discount: '27% off',
        features: [
          '20000mAh high-capacity battery',
          'PowerIQ and VoltageBoost for fast charging',
          'Dual USB-A output',
          'Compact and lightweight design',
          'Trickle-charging mode for smaller devices',
          'MultiProtect safety system',
          'Micro-USB and USB-C input',
        ],
      },
      {
        img: lapsvg,
        title: 'Samsung 25W USB-C Super Fast Charger',
        orgPrice: '₹2,999',
        price: '₹1,999',
        Discount: '33% off',
        features: [
          '25W Super Fast Charging with USB-C PD 3.0',
          'Compatible with multiple devices',
          'Compact and travel-friendly design',
          'Overcurrent and overvoltage protection',
          'Universal voltage support (100V-240V)',
          'Detachable USB-C to USB-C cable',
          'Lightweight and durable build',
          'Certified safety compliance',
        ],
      },
    ],
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

  const handleLike = async (title, img, price, orgPrice, features) => {
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
      const item = { title, img, price, orgPrice, features: features || [] };

      if (!userDoc.exists()) {
        await setDoc(userRef, { wishlist: [] });
      }

      let updatedWishlist = userDoc.data()?.wishlist || [];

      if (wishes[title]) {
        updatedWishlist = updatedWishlist.filter(
          (wishItem) => wishItem.title !== title,
        );
        await updateDoc(userRef, { wishlist: updatedWishlist });
        alert('Item removed from Wishlist');
      } else {
        await updateDoc(userRef, {
          wishlist: arrayUnion(item),
        });
        alert('Item added to Wishlist');
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
        orgPrice: item.orgPrice,
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
                  <h4>From ₹{des.price}</h4>
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
              {info.items.map((item, idx) => (
                <div
                  key={idx}
                  className={styles.tccAllItems}
                  onClick={() => handleClick(item)}>
                  <Image
                    src={item.img}
                    alt='4item'
                    className={styles.Fouritems}
                  />
                  <div className={styles.tccItemTitle}>{item.title}</div>
                  <div className={styles.tccItemDes}>
                    <p className={styles.pPrt1}>{item.orgPrice}</p>
                    <h3>{item.price}</h3>
                    <p className={styles.pPrt2}>{item.Discount}</p>
                  </div>
                </div>
              ))}
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
                  <h4>From ₹{des.price}</h4>
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
              img: Trend1,
              title:
                'Sony Bravia 55-inch 4K Ultra HD Smart LED TV with Google TV, Dolby Vision, and 120Hz Refresh Rate',
              price: '52,000',
              orgPrice: '65,000',
              features: [
                '55-inch 4K Ultra HD display with HDR10 support',
                'Google TV with voice assistant and app store',
                'Dolby Vision and Dolby Atmos for immersive experience',
                '120Hz refresh rate for smooth motion',
                'Multiple HDMI and USB ports for connectivity',
                'Built-in Chromecast and Apple AirPlay support',
                'Slim bezel design with metal stand',
                'Wi-Fi 6 and Bluetooth 5.2 for seamless connectivity',
              ],
            },
            {
              img: Trend2,
              title:
                'Apple iPhone 14 Pro Max (128GB) - Space Black with A16 Bionic Chip, ProMotion Display',
              price: '1,14,000',
              orgPrice: '1,30,000',
              features: [
                '6.7-inch Super Retina XDR display with ProMotion technology',
                '120Hz adaptive refresh rate for ultra-smooth scrolling',
                '48MP main camera with advanced computational photography',
                'A16 Bionic chip for superior performance and efficiency',
                'Crash detection and emergency SOS via satellite',
                'All-day battery life with fast charging support',
                'iOS 16 with new lock screen customization',
                'IP68 water and dust resistance for durability',
                '5G connectivity for ultra-fast downloads and streaming',
              ],
            },
            {
              img: Trend3,
              title:
                'Dell Inspiron 14 Ryzen 7 (16GB RAM/512GB SSD) Laptop with Windows 11, Full HD Display, and Backlit Keyboard',
              price: '65,000',
              orgPrice: '78,000',
              features: [
                'AMD Ryzen 7 5700U processor with 8 cores and 16 threads',
                '14-inch Full HD anti-glare display with vibrant colors',
                '16GB DDR4 RAM for multitasking efficiency',
                '512GB NVMe SSD for lightning-fast storage',
                'Windows 11 Home pre-installed for seamless experience',
                'Backlit keyboard with fingerprint sensor for security',
                'Wi-Fi 6 and Bluetooth 5.2 support',
                'Integrated AMD Radeon graphics for casual gaming',
                'Lightweight aluminum chassis for portability',
              ],
            },
            {
              img: Trend4,
              title:
                'Samsung Galaxy Watch 5 Pro LTE (45mm) - Black Titanium Smartwatch with Sapphire Glass, ECG, and Sleep Tracking',
              price: '34,000',
              orgPrice: '42,000',
              features: [
                '1.4-inch Super AMOLED always-on display',
                'Titanium case with sapphire crystal glass for durability',
                'Advanced sleep tracking and body composition analysis',
                'ECG and blood pressure monitoring for health insights',
                'LTE connectivity for calls, messages, and apps',
                'Google Assistant & Samsung Pay for convenience',
                'Up to 80-hour battery life on a single charge',
                'Military-grade durability with IP68 rating',
                'Built-in GPS for outdoor activities and workouts',
              ],
            },
            {
              img: Trend5,
              title:
                'JBL PartyBox 310 Bluetooth Party Speaker with 240W Power, Bass Boost, Dynamic Light Show, and Built-in Mic Inputs',
              price: '29,999',
              orgPrice: '35,000',
              features: [
                '240W powerful JBL sound with deep bass',
                'Dynamic light show that syncs with the music',
                '18-hour battery life for all-day partying',
                'Built-in mic and guitar inputs for live performances',
                'Splashproof design (IPX4) for outdoor use',
                'Bluetooth, USB, and AUX connectivity',
                'Dual speaker pairing for stereo sound',
                'Wheels and handle for easy portability',
                'Customizable EQ settings via JBL app',
              ],
            },
          ].map((laptop, index) => (
            <div key={index} className={styles.tp1IN}>
              <div className={styles.tp1INx}>
                <Image
                  src={laptop.img}
                  alt='lapsvg'
                  className={styles.lapsvg}
                  onClick={() => handleClick(laptop)}
                />
                <div className={styles.likeshareCont}>
                  <div
                    onClick={() =>
                      handleLike(
                        laptop.title,
                        laptop.img,
                        laptop.price,
                        laptop.orgPrice,
                        laptop.features,
                      )
                    }
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
              <div
                className={styles.titleDes}
                onClick={() => handleClick(laptop)}>
                {laptop.title}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.tP2}>
          {[
            {
              img: Trend6,
              title:
                'ASUS ROG Strix G16 Gaming Laptop with Intel Core i9, NVIDIA RTX 4060, 16GB RAM, 1TB SSD, and 165Hz Display',
              price: '1,29,000',
              orgPrice: '1,45,000',
              features: [
                '16-inch Full HD IPS display with 165Hz refresh rate',
                'Intel Core i9-13900H processor for extreme gaming performance',
                'NVIDIA GeForce RTX 4060 with 8GB GDDR6 VRAM',
                '16GB DDR5 RAM for smooth multitasking',
                '1TB PCIe Gen4 SSD for ultra-fast load times',
                'RGB-backlit keyboard with customizable lighting',
                'AI-powered cooling with liquid metal thermal compound',
                'Wi-Fi 6E and Bluetooth 5.3 for next-gen connectivity',
                'Dolby Atmos surround sound with Hi-Res Audio',
              ],
            },
            {
              img: Trend7,
              title:
                'Samsung Galaxy Tab S9 Ultra 5G - 14.6-inch AMOLED, Snapdragon 8 Gen 2, 12GB RAM, 512GB Storage, S-Pen Included',
              price: '99,000',
              orgPrice: '1,15,000',
              features: [
                '14.6-inch Super AMOLED display with 120Hz refresh rate',
                'Snapdragon 8 Gen 2 processor for flagship performance',
                '12GB RAM and 512GB internal storage',
                'S-Pen with ultra-low latency for precision writing',
                'Dual rear cameras (13MP + 8MP) and 12MP front camera',
                'IP68 water and dust resistance for durability',
                'Massive 11200mAh battery with 45W fast charging',
                'Samsung DeX mode for desktop-like multitasking',
                'Wi-Fi 6 and 5G connectivity for high-speed browsing',
              ],
            },
            {
              img: Trend8,
              title:
                'Bose QuietComfort Ultra Wireless Noise Cancelling Headphones with Spatial Audio and 24-Hour Battery Life',
              price: '32,000',
              orgPrice: '38,000',
              features: [
                'Advanced noise cancellation with custom modes',
                'Bose Immersive Audio for spatial sound experience',
                '24-hour battery life with quick charge support',
                'Customizable EQ via Bose Music app',
                'Bluetooth 5.3 for stable and efficient connectivity',
                'Multipoint pairing to connect multiple devices',
                'Soft protein leather ear cushions for all-day comfort',
                'Touch and voice controls for easy operation',
                'USB-C fast charging with 3.5mm wired option',
              ],
            },
            {
              img: Trend9,
              title:
                'Dyson V15 Detect Absolute Cordless Vacuum Cleaner with Laser Dust Detection, 60-Minute Runtime, and HEPA Filtration',
              price: '63,000',
              orgPrice: '75,000',
              features: [
                'Laser dust detection for revealing hidden particles',
                'Powerful Hyperdymium motor with 230AW suction',
                'Up to 60 minutes of runtime on eco mode',
                'Advanced HEPA filtration traps 99.99% of dust',
                'Auto-adjusting suction based on floor type',
                'LCD screen displays real-time cleaning data',
                'Click-in battery system for extended cleaning sessions',
                'Includes multiple attachments for versatile cleaning',
                'Lightweight and ergonomic design for easy handling',
              ],
            },
            {
              img: Trend10,
              title:
                'Garmin Fenix 7X Sapphire Solar Multisport GPS Smartwatch with AMOLED Display, 28-Day Battery, and Advanced Metrics',
              price: '85,000',
              orgPrice: '97,000',
              features: [
                '1.4-inch AMOLED display with always-on mode',
                'Solar charging extends battery life up to 28 days',
                'Multi-band GPS with precise tracking',
                'VO2 max, recovery time, and advanced training metrics',
                'Garmin Pay for contactless payments',
                'Built-in music storage for offline listening',
                '24/7 health monitoring with heart rate and SpO2 tracking',
                '50m water resistance for swimming and outdoor use',
                'Preloaded maps for hiking, skiing, and cycling',
              ],
            },
          ].map((laptop, index) => (
            <div key={index} className={styles.tp1IN}>
              <div className={styles.tp1INx}>
                <Image
                  src={laptop.img}
                  alt='lapsvg'
                  className={styles.lapsvg}
                  onClick={() => handleClick(laptop)}
                />
                <div className={styles.likeshareCont}>
                  <div
                    onClick={() =>
                      handleLike(
                        laptop.title,
                        laptop.img,
                        laptop.price,
                        laptop.orgPrice,
                        laptop.features,
                      )
                    }
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
              <div
                className={styles.titleDes}
                onClick={() => handleClick(laptop)}>
                {laptop.title}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.tP3}>
          {[
            {
              img: Trend11,

              title:
                'Dell XPS 15 - (Intel Core i9 13th Gen/32GB RAM/1TB SSD/Windows 11/NVIDIA RTX 4060)',
              price: '1,45,000',
              orgPrice: '1,65,000',
              features: [
                '13th Gen Intel Core i9 Processor',
                '32GB DDR5 RAM',
                '1TB NVMe SSD',
                '15.6-inch 4K OLED Touch Display',
                'NVIDIA GeForce RTX 4060 8GB',
                'Aluminum CNC Chassis',
                'Thunderbolt 4 Ports',
                'Wi-Fi 6E & Bluetooth 5.3',
                'Backlit Keyboard with Fingerprint Sensor',
              ],
            },
            {
              img: Trend12,

              title:
                'Apple MacBook Pro M3 Max - (64GB RAM/2TB SSD/macOS) Liquid Retina XDR Display',
              price: '3,99,000',
              orgPrice: '4,20,000',
              features: [
                'M3 Max chip with 16-core CPU and 40-core GPU',
                '64GB Unified Memory',
                '2TB SSD Storage',
                '16.2-inch Liquid Retina XDR Display',
                'ProMotion Technology (120Hz Refresh Rate)',
                '6-Speaker High-Fidelity Audio System',
                'Thunderbolt 4, HDMI & SDXC Card Slot',
                'macOS Sonoma with Advanced AI Features',
                'MagSafe 3 Charging',
              ],
            },
            {
              img: Trend13,

              title:
                'ASUS ROG Zephyrus G16 - (Intel Core i7 14th Gen/32GB RAM/1TB SSD/Windows 11/NVIDIA RTX 4070)',
              price: '1,89,000',
              orgPrice: '2,10,000',
              features: [
                '14th Gen Intel Core i7 Processor',
                '32GB DDR5 RAM (Expandable up to 64GB)',
                '1TB PCIe Gen 4 SSD',
                '16-inch QHD+ 240Hz IPS Display',
                'NVIDIA GeForce RTX 4070 8GB',
                'AI-enhanced Cooling System',
                'Dolby Atmos Surround Sound',
                'MUX Switch for GPU Performance Boost',
                'Wi-Fi 6E & Bluetooth 5.2',
              ],
            },
            {
              img: Trend14,

              title:
                'Lenovo Legion 7 Pro - (AMD Ryzen 9 7945HX/32GB RAM/1TB SSD/Windows 11/NVIDIA RTX 4080) High-Performance Gaming Laptop (16 inch, Storm Gray, 2.3 Kg)',
              price: '2,50,000',
              orgPrice: '2,75,000',
              features: [
                'AMD Ryzen 9 7945HX 16-Core Processor',
                '32GB DDR5 RAM (Expandable to 64GB)',
                '1TB PCIe 4.0 SSD',
                '16-inch Mini LED HDR Display (165Hz)',
                'NVIDIA GeForce RTX 4080 12GB',
                'Legion Coldfront 4.0 Cooling System',
                'TrueStrike RGB Keyboard',
                'Wi-Fi 6E & Ethernet 2.5Gbps',
                'AI-Powered Battery Optimization',
              ],
            },
            {
              img: Trend15,

              title:
                'HP Spectre x360 - (Intel Core i7 13th Gen/16GB RAM/1TB SSD/Windows 11/Intel Iris Xe) 2-in-1 Convertible Laptop (14 inch, Nightfall Black, 1.3 Kg)',
              price: '1,25,000',
              orgPrice: '1,40,000',
              features: [
                '13th Gen Intel Core i7 Processor',
                '16GB LPDDR5 RAM',
                '1TB SSD NVMe Storage',
                '14-inch OLED Touchscreen Display',
                '360° Convertible Design',
                'HP Sure View Privacy Screen',
                'Bang & Olufsen Quad Speakers',
                'Wi-Fi 6E & Bluetooth 5.3',
                'HP Fast Charge (50% in 30 min)',
              ],
            },
          ].map((laptop, index) => (
            <div key={index} className={styles.tp1IN}>
              <div className={styles.tp1INx}>
                <Image
                  src={laptop.img}
                  alt='lapsvg'
                  className={styles.lapsvg}
                  onClick={() => handleClick(laptop)}
                />
                <div className={styles.likeshareCont}>
                  <div
                    onClick={() =>
                      handleLike(
                        laptop.title,
                        laptop.img,
                        laptop.price,
                        laptop.orgPrice,
                        laptop.features,
                      )
                    }
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
              <div
                className={styles.titleDes}
                onClick={() => handleClick(laptop)}>
                {laptop.title}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className={styles.sec2Cont}>
        <div className={styles.sec2}>
          <h1>Recently Viewed</h1>
          <div ref={scrollContainerRef} className={styles.sec2items}>
            {[
              { title: 'Godrej Refrigerator', price: '7,240' },
              { title: 'Godrej Refrigerator', price: '7,240' },
              { title: 'Godrej Refrigerator', price: '7,240' },
              { title: 'Godrej Refrigerator', price: '7,240' },
              { title: 'Godrej Refrigerator', price: '7,240' },
              { title: 'Godrej Refrigerator', price: '7,240' },
            ].map((des, index) => (
              <div key={index} className={styles.rowItems}>
                <Image src={lapsvg} alt='/' className={styles.imgitems} />
                <div className={styles.itemDes}>
                  <p>{des.title}</p>
                  <h4>From ₹{des.price}</h4>
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
