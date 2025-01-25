import '@/styles/Home.module.css';
import Nav from './components/nav';
import Sect from './components/sec1';
import About from './components/about';

export default function Home() {
  return (
    <>
      <Nav />
      <Sect />
      <About />
    </>
  );
}
