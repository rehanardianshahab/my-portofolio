import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

type CardItemProps = {
  title: string;
  skills: string[];
  image: string;
  imageWidth?: number;
  imageHeight?: number;
  imagePadding?: string;
};

export default function Page() {
  return (
    <div className="mx-auto flex justify-center space-y-12 pb-12 lg:h-[calc(100vh)] lg:w-[64rem] lg:items-center">
      <div>
        <div className="mb-10 w-full space-y-4 lg:flex lg:items-center lg:justify-between lg:space-y-0">
          <div className="w-full space-y-6 text-white">
            <p className="text-2xl font-semibold lg:text-4xl">Highlighted Projects</p>
            <span className="text-sm">
              A showcase of my recent projects, highlighting my expertise in front-end development,
              responsive design, and interactivity to create impactful user experiences.
            </span>
          </div>
          <div className="lg:w-[calc(35vw)] lg:text-right">
            <div className="flex w-full justify-center lg:justify-end">
              <Button size="custom">
                <span>Dive into my projects</span>
                <ArrowUpRight />
              </Button>
            </div>
          </div>
        </div>
        <div className="gap-6 space-y-4 lg:flex lg:space-y-0">
          <div className="grid w-full gap-[16px]">
            <CardItem
              title="Satu Data Indonesia"
              image="/project/SDI.png"
              skills={['Next JS', 'Shadcn UI', 'Typescript']}
            />
            <CardItem
              title="Skinalyze Detection"
              image="/project/Skinalyze.png"
              imagePadding="pt-10 pb-6"
              skills={['Next JS', 'Shadcn UI', 'Typescript']}
            />
          </div>
          <CardItem
            title="Geki"
            image="/project/Geki.png"
            imageWidth={300}
            imageHeight={400}
            skills={['Next JS', 'Shadcn UI', 'Typescript']}
          />
        </div>
      </div>
    </div>
  );
}

function CardItem({
  title,
  skills,
  image,
  imageWidth = 200,
  imageHeight = 120,
  imagePadding = 'p-6'
}: CardItemProps) {
  return (
    <div className="w-full rounded-[16px] bg-white">
      <div className={imagePadding}>
        <Image
          src={image}
          alt={title}
          className="mx-auto"
          width={imageWidth}
          height={imageHeight}
        />
      </div>
      <hr className="border-primary/70 border-dashed" />
      <div className="space-y-2 p-6">
        <p className="text-primary text-lg font-semibold">{title}</p>
        <div className="flex flex-wrap gap-4 text-sm">
          {skills.map((skill, index) => (
            <span key={index}>{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
