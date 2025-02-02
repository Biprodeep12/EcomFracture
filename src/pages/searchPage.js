import '@/styles/Home.module.css';
import Nav from './components/nav';
import Login from './components/auth/login';
import { useState } from 'react';
import Search from './components/search';

export default function Home() {
  const [displaySign, setDisplaySign] = useState(true);

  return (
    <>
      <Login displaySign={displaySign} setDisplaySign={setDisplaySign} />
      <Nav setDisplaySign={setDisplaySign} />
      <Search />
    </>
  );
}
