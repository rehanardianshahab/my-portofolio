import type { Metadata } from 'next'
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Footer from '../components/Footer';
 
export const metadata: Metadata = {
  title: 'Portfolio - Rehan Ardian',
  description: 'Hi, I&apos;m Rehan',
}
 
export default function Home() {
  return (
    <>
      <div className="lg:space-y-30 space-y-42 lg:px-0 px-4">
        <Hero />
        <div className="lg:space-y-12 space-y-18">
          <Services/>
          <Projects />
        </div>
      </div>
      <Footer />
    </>
  );
}
