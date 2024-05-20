"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader, Menu, User, UserCircle } from "lucide-react";
import Link from "next/link";

interface RoutesProps {
  routes: {
    name: String;
    path: string;
  }[];
}

export function MobileSideNav({ routes }: RoutesProps) {
  return (
    <div className="grid grid-cols-2 gap-2 mt-6">
      <Sheet key={"left"}>
        <SheetTrigger asChild>
          <Menu className="w-5 h-5 ml-4" />
        </SheetTrigger>
        <SheetContent side={"left"}>
          <ul className="relative flex flex-col space-y-[20px] mx-4 my-4">
            {routes.map((route) => (
              <>
                <li className="flex items-center gap-x-2 ">
                  <Link href={route.path}>{route.name}</Link>
                </li>
              </>
            ))}
            <li className="flex items-center gap-x-2 ">
              <ClerkLoading>
                <Loader className="w-5 h-5 animate-spin mr-2" />
              </ClerkLoading>

              <ClerkLoaded>
                <UserButton />
              </ClerkLoaded>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
}
