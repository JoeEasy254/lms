import React from "react";

import {
  ClerkLoaded,
  ClerkLoading,
  SignOutButton,
  SignedIn,
  UserButton,
} from "@clerk/nextjs";
import {
  BookOpen,
  BookOpenCheck,
  Code,
  LayoutDashboard,
  Loader,
  LogOut,
  SquareLibrary,
  Trophy,
  UserRoundCog,
} from "lucide-react";

import { Toaster } from "@/components/ui/toaster";
import { ModeToggle } from "@/components/ModeToggle";
import Link from "next/link";
import SideNav from "../../../../components/dashboardComponents/SideNav";
import { MobileSideNav } from "../../../../components/dashboardComponents/MobileSideNav";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const routes = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard />,
    },
    {
      name: "Rooms",
      path: "/dashboard/rooms",
      icon: <SquareLibrary />,
    },
    {
      name: "Account",
      path: "/dashboard/myaccount",
      icon: <UserRoundCog />,
    },
    {
      name: "playground",
      path: "/dashboard/mirror",
      icon: <Code />,
    },

    {
      name: "quizzes",
      path: "/dashboard/quizzes",
      icon: <BookOpenCheck />,
    },
    {
      name: "Leaderboard",
      path: "/dashboard/leaderboard",
      icon: <Trophy />,
    },
    {
      name: "Blog",
      path: "/dashboard/blog",
      icon: <BookOpen />,
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
          <div className="mt-[50px] w-full  border-t-2">
            <Toaster />
            {children}
          </div>
          <div className="absolute top-0 right-4">
            <div className="mx-4 my-2 flex justify-end">
              <ClerkLoading>
                <Loader className="mr-2 w-5 h-5 animate-spin" />
              </ClerkLoading>
              <ClerkLoaded>
                <div className="flex flex-row items-center gap-x-4 justify-between">
                  <ul className="flex items-center space-x-3">
                    <li className="hidden md:block">
                      <Link
                        className="hover:border-b-2 border-[#ddd]"
                        href={"/blog"}
                      >
                        Blog
                      </Link>
                    </li>
                    <li className="hidden md:block">
                      <Link
                        className="hover:border-b-2 border-[#ddd]"
                        href={"#"}
                      >
                        Help
                      </Link>
                    </li>
                  </ul>
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
