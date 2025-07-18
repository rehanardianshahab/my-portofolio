import type { Metadata } from 'next';
import Footer from '../components/Footer';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Services from './components/Services';
import Tools from './components/Tools';

export const metadata: Metadata = {
  title: 'About - Rehan Ardian',
  description: 'Hi, I&apos;m Rehan, this is about'
};

export default function Home() {
  return (
    <>
      <div className="space-y-42 px-4 lg:space-y-30 lg:px-0">
        <Hero />
        <div className="space-y-18 lg:space-y-12">
          <Services />
          <Projects />
          <Tools />
        </div>
      </div>
      <Footer />
    </>
  );
}
