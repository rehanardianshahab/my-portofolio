import Particles from '@/components/animations/Particles/Particles';
import { Raleway } from 'next/font/google';
import Header from '../components/Header';
import '../globals.css';

const Raleway_font = Raleway({
  variable: '--font-raleway',
  weight: '400',
  subsets: ['latin']
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Raleway_font.variable} antialiased`}>
        <Header />
        {children}
        <BackgroundParticle />
      </body>
    </html>
  );
}

function BackgroundParticle() {
  return (
    <div className="fixed top-0 left-0 -z-10 h-screen w-full">
      <Particles
        particleColors={['#c9d8ee', '#fff', '#6392cd', '#fbff1f']}
        particleBaseSize={120}
        particleSpread={12}
        disableRotation={true}
        cameraDistance={8}
        speed={0.7}
      />
    </div>
  );
}
