import Nav from './components/nav';
import Login from './components/auth/login';
import { useState } from 'react';
import Wish from './components/wish';

export default function CartPage() {
  const [displaySign, setDisplaySign] = useState(true);

  return (
    <>
      <Login displaySign={displaySign} setDisplaySign={setDisplaySign} />
      <Nav setDisplaySign={setDisplaySign} />
      <Wish />
    </>
  );
}
