import { MailIcon } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <>
      <hr />
      <div className="container mx-auto items-center justify-between space-y-10 px-4 py-24 text-white lg:flex lg:w-[calc(80vw)]">
        <div className="space-y-6">
          <p className="text-2xl font-semibold">Rehan Ardian Shahab</p>
          <p className="text-sm">
            Designing with purpose—where visuals
            <br />
            and performance work in harmony.
          </p>
          <div className="flex space-x-8">
            <a href="/">
              <Github className="h-[32px] w-[32px] text-white hover:text-white/80" />
            </a>
            <a href="/">
              <Linkedin className="h-[32px] w-[32px] text-white hover:text-white/80" />
            </a>
          </div>
        </div>
        <div className="space-y-6 lg:w-[calc(20vw)]">
          <p>I'm always open to discussions, inquiries, or collaboration opportunities.</p>
          <div className="flex space-x-4 text-[#FFBE72]">
            <MailIcon />
            <p>rehanardian1@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
}
