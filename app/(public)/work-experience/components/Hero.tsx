'use client';

import AnimatedContent from '@/components/animations/AnimatedContent/AnimatedContent';
import SplitText from '@/components/animations/SplitText/SplitText';
import { useState } from 'react';

export default function Hero() {
  const [isAnimation, setIsAnimation] = useState<Boolean>(false);

  const handleAnimationComplete = () => {
    setIsAnimation(true);
  };

  return (
    <div className="flex h-[calc(70vh)] items-center justify-center pt-54 text-center">
      <div className="space-y-10">
        <div>
          <SplitText
            text="Career Journey"
            className="text-6xl font-semibold text-white"
            delay={150}
            animationFrom={{ opacity: 0, transform: 'translate3d(100px,0,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            threshold={0.2}
            onLetterAnimationComplete={handleAnimationComplete}
          />
        </div>
        {!isAnimation ? (
          <div className="h-[calc(24vh-10px)]">&nbsp;</div>
        ) : (
          <div className="h-[calc(24vh-10px)]">
            <AnimatedContent
              distance={0}
              direction="vertical"
              reverse={false}
              delay={400}
              config={{ tension: 40, friction: 30 }}
              initialOpacity={0.0}
              animateOpacity
              scale={1.1}
              threshold={0.1}
            >
              <div className="space-y-10">
                <div>
                  <p className="text-lg text-white">
                    This section showcases my career path as a Frontend Developer, highlighting my
                    experience, growth,
                  </p>
                  <p className="text-lg text-white">
                    and contributions in building engaging digital experiences.
                  </p>
                </div>
              </div>
            </AnimatedContent>
          </div>
        )}
      </div>
    </div>
  );
}
