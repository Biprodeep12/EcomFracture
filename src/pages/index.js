import '@/styles/Home.module.css';
import Nav from './components/nav';
import Sect from './components/sec1';
import About from './components/about';
import Login from './components/auth/login';
import { useState } from 'react';

export default function Home() {
  const [displaySign, setDisplaySign] = useState(true);

  return (
    <>
      <Login displaySign={displaySign} setDisplaySign={setDisplaySign} />
      <Nav setDisplaySign={setDisplaySign} />
      <Sect />
      <About />
    </>
  );
}
