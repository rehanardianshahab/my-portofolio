import Image from 'next/image';

interface ToolsProps {
  label: string;
  image: string;
}

export default function Tools() {
  const data: ToolsProps[] = [
    {
      label: 'HTML',
      image: '/icon-tools/html.png'
    },
    {
      label: 'CSS',
      image: '/icon-tools/css.png'
    },
    {
      label: 'Javascript',
      image: '/icon-tools/javascript.png'
    },
    {
      label: 'NuxtJS',
      image: '/icon-tools/nuxtjs.png'
    },
    {
      label: 'NextJS',
      image: '/icon-tools/nextjs.png'
    },
    {
      label: 'VueJS',
      image: '/icon-tools/vuejs.png'
    },
    {
      label: 'Windi CSS',
      image: '/icon-tools/windicss.png'
    },
    {
      label: 'Tailwind CSS',
      image: '/icon-tools/tailwind.png'
    },
    {
      label: 'Shadcn',
      image: '/icon-tools/shadcn.png'
    },
    // {
    //   label: 'Element Plus',
    //   image: '/icon-tools/elementplus.png'
    // },
    {
      label: 'HighCharts',
      image: '/icon-tools/highCharts.png'
    },
    // {
    //   label: 'Amcharts',
    //   image: '/icon-tools/amcharts.png'
    // },
    {
      label: 'Echarts',
      image: '/icon-tools/echarts.png'
    },
    {
      label: 'Github',
      image: '/icon-tools/github.png'
    },
    {
      label: 'VS Code',
      image: '/icon-tools/vscode.png'
    },
    // {
    //   label: 'Postman',
    //   image: '/icon-tools/postman.png'
    // },
    {
      label: 'Scrum Team Jira',
      image: '/icon-tools/jira.png'
    }
  ];
  return (
    <>
      <div className="container mx-auto mb-14 flex h-[calc(80vh-100px)] items-center justify-center space-y-12">
        <div className="space-y-12">
          <div className="space-y-6 text-center text-white">
            <p className="text-4xl font-semibold">Development Toolkit</p>
            <p className="mx-auto w-full leading-[32px] break-words lg:w-[calc(55vw-100px)]">
              From front-end frameworks to essential development tools, I strive to create efficient
              and high-quality solutions. I constantly try to improve by learning new technologies
              and refining my skills.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 lg:w-[calc(60vw-100px)]">
            {data.map((item, index) => (
              <Badge data={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function Badge({ data }: { data: ToolsProps }) {
  return (
    <div className="flex flex-wrap items-center space-x-4 rounded-lg border border-white px-2 py-2 text-[12px] text-white lg:px-4 lg:text-[18px]">
      <div className="relative h-6 w-6">
        <Image
          src={data.image}
          alt={data.label}
          width={24}
          height={24}
          className="object-contain"
        />
      </div>
      <div>{data.label}</div>
    </div>
  );
}
