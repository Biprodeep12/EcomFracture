import { useRouter } from 'next/router';
import Image from 'next/image';

export default function ClickedItems() {
  const router = useRouter();
  const { title, price, image } = router.query;

  return (
    <div>
      <h2>{title}</h2>
      <h4>Price: {price}</h4>
      {image && <Image src={image} alt={title} width={200} height={200} />}
    </div>
  );
}
