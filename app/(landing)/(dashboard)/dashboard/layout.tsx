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
  Settings,
  SquareLibrary,
  Trophy,
  UserRoundCog,
} from "lucide-react";

import { Toaster } from "@/components/ui/toaster";
import { ModeToggle } from "@/components/ModeToggle";
import Link from "next/link";
import SideNav from "../../../../components/dashboardComponents/SideNav";
import { MobileSideNav } from "../../../../components/dashboardComponents/MobileSideNav";
import { auth, currentUser } from "@clerk/nextjs/server";
import { db } from "@/utils/db";

export default async function HomeLayout({
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
    {
      name: "Settings",
      path: "/dashboard/settings",
      icon: <Settings />,
    },
  ];
  const { userId } = auth();

  const userExists = await db.user.findUnique({
    where: {
      userId: String(userId),
    },
  });
  const currentUserInSession = await currentUser();
  if (!userExists) {
    // create the user
    await db.user.create({
      data: {
        userId: String(userId),
        username:
          String(currentUserInSession?.firstName) ||
          String(currentUserInSession?.lastName) ||
          String(currentUserInSession?.username),
      },
    });
  }
  return (
    // clerk userId
    <>
      <div
        className="relative container  md:overflow-y-hidden "
        suppressHydrationWarning
      >
        <div className="flex justify-between">
          <div>
            <div className="md:block hidden ">
              <SideNav routes={routes} />
            </div>

            <div className="md:hidden block ">
              <MobileSideNav routes={routes} />
            </div>
          </div>
          <div className="mt-[60px] mb-[30px] w-full my-3 ">
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
                        href={"/dashboard/blog"}
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
                  <UserButton
                    afterMultiSessionSingleSignOutUrl="/"
                    afterSignOutUrl="/"
                  />
                </div>
              </ClerkLoaded>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
