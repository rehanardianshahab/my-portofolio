import { cn } from '@/lib/utils';
import { GraduationCap, Monitor, Paintbrush } from 'lucide-react';

interface ServiceItem {
  title: string;
  description: string;
  icon: React.ElementType;
  customPosition: boolean;
}

export default function Services() {
  const services: ServiceItem[] = [
    {
      title: 'Website Development',
      description:
        'Building fast, responsive, and scalable websites using modern technologies. Experienced in front-end development with seamless back-end integration.',
      icon: Monitor,
      customPosition: false
    },
    {
      title: 'Web Design',
      description:
        'Creating visually appealing, intuitive, and user-friendly interfaces. Blending aesthetics with functionality for smooth digital experiences.',
      icon: Paintbrush,
      customPosition: true
    },
    {
      title: 'Mentoring',
      description:
        'Learning and sharing knowledge about front-end development and UI/UX. Helping others grow through guidance, best practices, and hands-on insights.',
      icon: GraduationCap,
      customPosition: false
    }
  ];

  return (
    <div className="h-[calc(100vh - 100px)] container mx-auto flex items-center justify-center space-y-12">
      <div className="space-y-12">
        <div className="space-y-6 text-center text-white">
          <p className="text-4xl font-semibold">My Services</p>
          <span>
            Crafting digital experiences through development, design, and knowledge sharing.
          </span>
        </div>
        <div>
          {services.map((data: ServiceItem, index: number) => (
            <div key={index}>
              <div
                className={cn(
                  'rounded-[16px] border border-gray-300 px-[40px] py-[24px] backdrop-blur-[1.5px] lg:w-[40rem]',
                  data.customPosition ? 'lg:ml-[20rem]' : ''
                )}
              >
                <div className="space-y-4 text-white">
                  <p className="flex items-center space-x-4 font-semibold">
                    <data.icon className="text-[#9747FF]" /> <span>{data.title}</span>
                  </p>
                  <span className="text-sm">{data.description}</span>
                </div>
              </div>
              {index < services.length - 1 ? <VerticalLine /> : ''}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function VerticalLine() {
  return (
    <div>
      <div className="hidden h-[100px] w-[1px] border border-white lg:ml-[24.5rem] lg:block">
        &nbsp;
      </div>
      <div className="ml-[45vw] block h-[100px] w-[1px] border border-white lg:hidden">&nbsp;</div>
    </div>
  );
}
