import { Poppins } from "next/font/google";
import "../globals.css";
import Particles from "@/components/animations/Particles/Particles";
import Header from "../components/Header";

const Poppins_font = Poppins({
  variable: "--font-poppins",
  weight: '400',
  subsets: ['latin']
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Poppins_font.variable} antialiased`}
      >
        <Header />
        {children}
        <BackgroundParticle />
      </body>
    </html>
  );
}

function BackgroundParticle() {
  return (
    <div className="fixed left-0 top-0 -z-10 h-screen w-full">
      <Particles
        particleColors={['#c9d8ee','#fff','#6392cd','#fbff1f']}
        particleBaseSize={120}
        particleSpread={12}
        disableRotation={true}
        cameraDistance={8}
        speed={0.7}
      />
    </div>
  );
}
