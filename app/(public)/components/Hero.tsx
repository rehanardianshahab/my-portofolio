'use client'

import AnimatedContent from "@/components/animations/AnimatedContent/AnimatedContent";
import SplitText from "@/components/animations/SplitText/SplitText";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";
import TiltedCard from "@/components/animations/TiltedCard/TiltedCard";

export default function Hero() {
  const [isAnimation, setIsAnimation] = useState<Boolean>(false)

  const handleAnimationComplete = () => {
    setIsAnimation(true)
  }

  return (
    <div className="flex h-[calc(90vh)] items-center justify-center text-center">
      <div className="space-y-10">
        <div>
          <SplitText
            text="Hi, I&apos;m Rehan"
            className="text-6xl font-semibold text-white"
            delay={150}
            animationFrom={{ opacity: 0, transform: 'translate3d(100px,0,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            threshold={0.2}
            onLetterAnimationComplete={handleAnimationComplete}
          />
        </div>
        {!isAnimation ? <div className="h-[calc(24vh-10px)]">&nbsp;</div> : (
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
                  <p className="text-lg text-white">Building seamless, responsive, and accessible</p>
                  <p className="text-lg text-white">web interfaces is my calling.</p>
                </div>
                <div className="space-y-8">
                  <Button size="custom">
                    See my resume <ArrowUpRight/>
                  </Button>
                  <div className="flex justify-center space-x-6">
                    <a href="/">
                      <Github className="w-[32px] h-[32px] text-white hover:text-white/80" />
                    </a>
                    <a href="/">
                      <Linkedin className="w-[32px] h-[32px] text-white hover:text-white/80" />
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedContent>
          </div>
        )}
      </div>
      <div className="absolute left-[calc(10vw-20px)] top-[calc(45vh)] z-0 w-14 h-14">
        <TiltedCard
          imageSrc="/icon-rocket.svg"
          containerHeight="56px"
          containerWidth="56px"
          imageHeight="56px"
          imageWidth="56px"
          rotateAmplitude={12}
          scaleOnHover={1.5}
          showMobileWarning={false}
          showTooltip={false}
        />
      </div>
      <div className="absolute right-[calc(10vw-20px)] top-[calc(80vh)] lg:top-[calc(70vh)] z-0 w-[150px] h-[100px]">
        <TiltedCard
          imageSrc="/icon-rocket-moon.svg"
          containerHeight="150px"
          containerWidth="150px"
          imageHeight="100px"
          imageWidth="125px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={false}
        />
      </div>
      <div className="absolute right-[calc(25vw-80px)] top-[calc(20vh)] z-0 w-[150px] h-[100px]">
        <TiltedCard
          imageSrc="/planet.svg"
          containerHeight="150px"
          containerWidth="150px"
          imageHeight="100px"
          imageWidth="100px"
          rotateAmplitude={12}
          scaleOnHover={1.5}
          showMobileWarning={false}
          showTooltip={false}
        />
      </div>
    </div>
  );
}
