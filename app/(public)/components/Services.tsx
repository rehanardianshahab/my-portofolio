import { cn } from "@/lib/utils";
import { GraduationCap, Monitor, Paintbrush } from "lucide-react";

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
            description: 'Building fast, responsive, and scalable websites using modern technologies. Experienced in front-end development with seamless back-end integration.',
            icon: Monitor,
            customPosition: false,
        },
        {
            title: 'Web Design',
            description: 'Creating visually appealing, intuitive, and user-friendly interfaces. Blending aesthetics with functionality for smooth digital experiences.',
            icon: Paintbrush,
            customPosition: true,
        },
        {
            title: 'Mentoring',
            description: 'Learning and sharing knowledge about front-end development and UI/UX. Helping others grow through guidance, best practices, and hands-on insights.',
            icon: GraduationCap,
            customPosition: false,
        }
    ]
    
    return (
        <div className="flex items-center justify-center container h-[calc(100vh - 100px)] space-y-12 mx-auto">
            <div className="space-y-12">
                <div className="space-y-6 text-white text-center">
                    <p className="text-4xl font-semibold">My Services</p>
                    <span>Crafting digital experiences through development, design, and knowledge sharing.</span>
                </div>
                <div>
                    {services.map((data: ServiceItem,index: number)=> (
                        <div key={index}>
                            <div className={cn('border py-[24px] px-[40px] backdrop-blur-[1.5px] border-gray-300 rounded-[16px] lg:w-[40rem]', data.customPosition ? 'lg:ml-[20rem]' : '')}>
                                <div className="text-white space-y-4">
                                    <p className="font-semibold flex items-center space-x-4"><data.icon className="text-[#9747FF]"/> <span>{data.title}</span></p>
                                    <span className="text-sm">{data.description}</span>
                                </div>
                            </div>
                            {index < services.length - 1 ? <VerticalLine /> : ''}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

function VerticalLine() {
    return (
        <div>
            <div className="lg:block hidden border border-white w-[1px] h-[100px] lg:ml-[24.5rem]">&nbsp;</div>
            <div className="lg:hidden block border border-white w-[1px] h-[100px] ml-[40vw]">&nbsp;</div>
        </div>
    )
}