import { MailIcon } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
        <>
            <hr/>
            <div className="lg:flex justify-between space-y-10 lg:w-[calc(80vw)] w-[calc(90vw)] mx-auto lg:px-4 py-24 text-white">
                <div className="space-y-6">
                    <p className="font-semibold">Rehan Ardian Shahab</p>
                    <p className="text-sm">Designing with purpose—where visuals<br/>and performance work in harmony.</p>
                    <div className="flex space-x-4 text-2xl">
                        <FaGithub/>
                        <FaLinkedinIn/>
                    </div>
                </div>
                <div className="space-y-4 lg:w-[calc(20vw)]">
                    <p>I'm always open to discussions, inquiries, or collaboration opportunities.</p>   
                    <div className="flex space-x-4 text-[#FFBE72]">
                        <MailIcon/>
                        <p>rehanardian1@gmail.com</p>
                    </div>
                </div>
            </div>
        </>
    )
}