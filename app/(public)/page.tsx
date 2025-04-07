import type { Metadata } from 'next'
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
 
export const metadata: Metadata = {
  title: 'Portfolio - Rehan Ardian',
  description: 'Hi, I&apos;m Rehan',
}
 
export default function Home() {
  return (
    <div className="lg:space-y-30 space-y-64 lg:px-0 px-4">
      <Hero/>
      <Services/>
      <Projects />
    </div>
  );
}
