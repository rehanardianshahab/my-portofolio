'use client';

import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import Menu from './Menu';

export default function Header() {
  return (
    <div className="absolute top-[calc(3vh)] w-full lg:top-[calc(10vh)]">
      <div className="container mx-auto flex items-center justify-between px-4 lg:w-[calc(80vw)] lg:px-0">
        <div className="w-full text-xl font-semibold text-white lg:text-2xl">Rehan Ardian.</div>
        <div className="flex w-full justify-end">
          <Button size="custom">
            <span className="hidden lg:block">Get In Touch</span>
            <ArrowUpRight />
          </Button>
        </div>
      </div>
      <Menu />
    </div>
  );
}
