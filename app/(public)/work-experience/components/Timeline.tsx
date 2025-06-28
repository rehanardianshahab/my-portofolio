'use client';

import { BicepsFlexed } from 'lucide-react';

interface CompanyProps {
  name: string;
  start: string;
  end: string;
  job_title: string;
  job_desc: string;
}

export default function Timeline() {
  const data: CompanyProps[] = [
    {
      name: 'top',
      start: '',
      end: '',
      job_title: '',
      job_desc: ``
    },
    {
      name: 'CV. Torche Indonesia',
      start: '2024',
      end: 'Present',
      job_title: 'Frontend Developer',
      job_desc: `Developing web applications with Vue.js & Next.js, implementing UI designs using Element
            Plus and Windi CSS, collaborating with UI/UX designers and backend developers for
            seamless integration, and building reusable code for maintainability.`
    },
    {
      name: 'PT. Eduwork.id',
      start: '2022',
      end: '2023',
      job_title: 'Mentoring and Educational Consulting',
      job_desc: `Provided mentorship in web development through hands-on coding sessions, personalized guidance, and project-based learning, ensuring a strong technical foundation and real-world application of skills.`
    },
    {
      name: 'PT. Nan darma Kanigara (Poolapack)',
      start: '2022',
      end: '',
      job_title: 'Frontend Developer',
      job_desc: `Developed web applications with a focus on UI implementation, collaborating with designers and backend developers to ensure seamless integration. Led the development of a QR scan feature for delivery confirmation in an e-commerce platform, enhancing user experience and optimizing shipment verification.`
    },
    {
      name: 'RKTIM',
      start: '2021',
      end: '2022',
      job_title: 'Web Designer Wordpress',
      job_desc: `Provided mentorship in web development through handDesigned and developed intuitive registration pages and company profiles to enhance user experience. Built responsive web pages using a page builder for seamless cross-device compatibility. Created visually engaging event posters and comprehensive video tutorials to improve user engagement and guidance.`
    },
    {
      name: 'PT. Tri Hexa Kreasi Kerjantara',
      start: '2019',
      end: '2021',
      job_title: 'Fullstack Developer',
      job_desc: `Improved user experience by enhancing the interface and integrating a recommendation feature based on assessment results. Developed an assessment reporting application for efficient data management and analysis. Built a custom infographic application to visualize client-specific assessment results, providing actionable insights for businesses.`
    }
  ];

  return (
    <>
      {data.map((_: CompanyProps, i: number) => (
        <div
          key={i}
          className="grid w-full grid-cols-12 grid-rows-2 lg:grid-cols-11 lg:grid-rows-none"
        >
          <div className="col-span-2 row-span-3 lg:row-span-0">
            <div className="h-full">
              {_.name !== 'top' ? (
                <>
                  <div className="relative mr-5 ml-auto flex size-[24px] items-center justify-center rounded-full bg-white/30 lg:mr-9">
                    <div className="size-[16px] rounded-full bg-[#FFBE72]">&nbsp;</div>
                  </div>

                  {i != data.length - 1 ? (
                    <div className="ml-auto h-[calc(100%-10px)] w-0 border-l border-white/40 pr-8 lg:pr-12">
                      &nbsp;
                    </div>
                  ) : (
                    ''
                  )}
                </>
              ) : (
                <>
                  <div className="border-gradient relative mr-3 mb-[2px] ml-auto flex h-[56px] w-[40px] items-center justify-center rounded-[12px] bg-gradient-to-r from-[#2d3e5d]/100 to-[#354563]/10 lg:mr-3 lg:w-[72px]">
                    <div className="flex h-[56px] w-[72px] items-center justify-center px-[24px] py-[16px]">
                      <BicepsFlexed className="size-[24px] text-white" />
                    </div>
                  </div>
                  <div className="ml-auto h-[87px] w-0 border-l border-white/40 pr-8 lg:pr-12">
                    &nbsp;
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="col-span-10 row-span-2 mb-2 lg:col-span-4 lg:row-span-0 lg:mb-0">
            <p className="text-[18px] leading-[24px] text-white">{_.name != 'top' ? _.name : ''}</p>
            <span className="text-[16px] leading-[24px] text-[#FFBE72]">
              {_.start} {_.end ? '-' : ''} {_.end}
            </span>
          </div>
          <div className="col-span-10 col-start-3 pb-12 lg:col-span-5">
            <p className="text-[22px] leading-[32px] font-bold text-white">{_.job_title}</p>
            <div className="leading-[24px] text-[#CFD6E2]">{_.job_desc}</div>
          </div>
        </div>
      ))}
    </>
  );
}
