'use client'

import { Button } from "@/components/ui/button";
import Menu from "./Menu";
import { ArrowUpRight } from "lucide-react";

export default function Header() {
  return (
    <div className="w-full absolute lg:top-[calc(10vh)] top-[calc(3vh)]">
      <div className="flex items-center justify-between container mx-auto lg:px-0 px-4">
        <div className="w-full lg:text-2xl text-xl font-semibold text-white">
          Rehan Ardian.
        </div>
        <div className="flex w-full justify-end">
          <Button size="custom">
            <span className="lg:block hidden">Get In Touch</span>
            <ArrowUpRight />
          </Button>
        </div>
      </div>
      <Menu />
    </div>
  );
}
