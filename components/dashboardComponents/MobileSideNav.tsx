"use client";

import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader, Menu, User, UserCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

interface RoutesProps {
  routes: {
    name: String;
    path: string;
    icon: React.ReactElement;
  }[];
}

export function MobileSideNav({ routes }: RoutesProps) {
  return (
    <div className="mt-6  ml-0">
      <Sheet key={"left"}>
        <SheetTrigger asChild>
          <Menu className="w-5 h-5 ml-4" />
        </SheetTrigger>
        <SheetContent side={"left"}>
          <ul className="relative flex flex-col space-y-[20px] mx-4 my-4">
            <li className="text-xl">Pamoja Learn</li>
            {routes.map((route, index: number) => (
              <>
                <li className="flex items-center gap-x-2 " key={index}>
                  <Link
                    className="flex items-center  gap-x-2 "
                    href={route.path}
                  >
                    {route.icon} {route.name}
                  </Link>
                </li>
              </>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
}
