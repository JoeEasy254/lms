import React from "react";
import SideNav from "./components/SideNav";
import {
  ClerkLoaded,
  ClerkLoading,
  SignOutButton,
  SignedIn,
  UserButton,
} from "@clerk/nextjs";
import { Loader, LogOut } from "lucide-react";
import { MobileSideNav } from "./components/MobileSideNav";
import { Toaster } from "@/components/ui/toaster";
import { ModeToggle } from "@/components/ModeToggle";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const routes = [
    {
      name: "Dashboard",
      path: "/",
    },
    {
      name: "Rooms",
      path: "/rooms",
    },
    {
      name: "Account",
      path: "/myaccount",
    },
    {
      name: "playground",
      path: "/mirror",
    },

    {
      name: "quizzes",
      path: "/quizzes",
    },
    {
      name: "Leaderboard",
      path: "/leaderboard",
    },
  ];
  return (
    <>
      <div className="container" suppressHydrationWarning>
        <div className="flex justify-between">
          <div>
            <div className="md:block hidden border-r-2">
              <SideNav routes={routes} />
            </div>

            <div className="md:hidden block ">
              <MobileSideNav routes={routes} />
            </div>
          </div>
          <div className=" w-full mt-[50px]  border-t-2">
            <Toaster />
            {children}
          </div>
          <div className="absolute top-0 right-4">
            <div className="mx-4 my-2 flex justify-end">
              <ClerkLoading>
                <Loader className="mr-2 w-5 h-5 animate-spin" />
              </ClerkLoading>
              <ClerkLoaded>
                <div className="flex flex-row items-center gap-x-4">
                  <ModeToggle />
                  <UserButton />

                  <SignedIn>
                    <SignOutButton>
                      <LogOut className="cursor-pointer" />
                    </SignOutButton>
                  </SignedIn>
                </div>
              </ClerkLoaded>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
