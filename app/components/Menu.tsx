'use client';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { usePathname, useRouter } from 'next/navigation';

export default function Menu() {
  const router = useRouter();

  const routers = [
    {
      route: '/',
      label: 'About'
    },
    {
      route: '/project',
      label: 'Project'
    },
    {
      route: '/work-experience',
      label: 'Work Experience'
    },
    {
      route: '/contact',
      label: 'Contact'
    }
  ];

  const pathname = usePathname();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className="fixed top-[calc(8vh)] left-[calc(35vw)] z-10 mx-auto w-full">
      <Tabs isScroll className="fixed hidden min-w-[calc(30vw)] xl:block">
        <TabsList className="space-x-1">
          {routers.map((data, index) => (
            <TabsTrigger
              key={index}
              data-state={data.route == pathname ? 'active' : 'inactive'}
              value={data.route}
              onClick={() => handleNavigation(data.route)}
            >
              {data.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
}
