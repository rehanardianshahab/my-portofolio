"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

type TabsProps = React.ComponentProps<typeof TabsPrimitive.Root> & {
  isScroll?: boolean;
};

function Tabs({ className, isScroll = false, ...props }: TabsProps) {
  // State to track scroll
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    if (isScroll) {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50); // Change threshold as needed
      };

      // Attach scroll listener
      window.addEventListener("scroll", handleScroll);

      // Cleanup listener on unmount
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isScroll]);

  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn(
        "flex flex-col gap-2 rounded-full transition-all duration-300",
        isScroll && isScrolled ? "bg-primary/80 backdrop-blur-[2.5px] shadow-lg" : "bg-transparent",
        className
      )}
      {...props}
    />
  );
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <div className="flex items-center justify-between rounded-full border border-white bg-gradient-to-r from-white/20 to-transparent px-[32px] py-[12px] shadow-lg">
      <TabsPrimitive.List
        data-slot="tabs-list"
        className={cn(
          "text-white inline-flex h-9 w-full py-[28px] rounded-full items-center justify-center",
          className
        )}
        {...props}
      />
    </div>
  );
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "cursor-pointer hover:bg-linear-90 hover:bg-[#6E7FA4EF] data-[state=active]:bg-linear-65 data-[state=active]:from-[#6E7FA4EF] data-[state=active]:to-[#6E7FA44D] dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/50 inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-full border border-transparent px-[12px] py-[28px] text-sm font-medium whitespace-nowrap transition-all duration-500 focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-lg [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
