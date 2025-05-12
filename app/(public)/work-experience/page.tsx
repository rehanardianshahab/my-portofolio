import Footer from '@/app/components/Footer';
import type { Metadata } from 'next';
import Hero from './components/Hero';

export const metadata: Metadata = {
  title: 'Portfolio - Rehan Ardian',
  description: 'Hi, I&apos;m Rehan'
};

export default function Page() {
  return (
    <>
      <div className="space-y-42 px-4 lg:space-y-30 lg:px-0">
        <Hero />
        <div className="space-y-18 lg:space-y-12">Hello</div>
      </div>
      <Footer />
    </>
  );
}
