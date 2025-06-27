import Footer from '@/app/components/Footer';
import type { Metadata } from 'next';
import Hero from './components/Hero';
import Timeline from './components/Timeline';

export const metadata: Metadata = {
  title: 'Work Experience - Rehan Ardian',
  description: 'Hi, I&apos;m Rehan, this my work experience'
};

export default function Page() {
  return (
    <>
      <div className="px-4 lg:px-0">
        <Hero />
        <div className="container mx-auto mb-12 flex flex-col items-center justify-between px-0 lg:w-[calc(80vw)] lg:px-8">
          <Timeline />
        </div>
      </div>
      <Footer />
    </>
  );
}
