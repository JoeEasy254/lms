import React from "react";
import SideNav from "./components/SideNav";
import {
  ClerkLoaded,
  ClerkLoading,
  SignOutButton,
  SignedIn,
  UserButton,
} from "@clerk/nextjs";
import {
  BookOpenCheck,
  Code,
  LayoutDashboard,
  Loader,
  LogOut,
  SquareLibrary,
  Trophy,
  UserRoundCog,
} from "lucide-react";
import { MobileSideNav } from "./components/MobileSideNav";
import { Toaster } from "@/components/ui/toaster";
import { ModeToggle } from "@/components/ModeToggle";
import Link from "next/link";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const routes = [
    {
      name: "Dashboard",
      path: "/",
      icon: <LayoutDashboard />,
    },
    {
      name: "Rooms",
      path: "/rooms",
      icon: <SquareLibrary />,
    },
    {
      name: "Account",
      path: "/myaccount",
      icon: <UserRoundCog />,
    },
    {
      name: "playground",
      path: "/mirror",
      icon: <Code />,
    },

    {
      name: "quizzes",
      path: "/quizzes",
      icon: <BookOpenCheck />,
    },
    {
      name: "Leaderboard",
      path: "/leaderboard",
      icon: <Trophy />,
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
          <div className=" container mt-[50px]  border-t-2">
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
                    <li>
                      <Link
                        className="hover:border-b-2 border-[#ddd]"
                        href={"#"}
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
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
