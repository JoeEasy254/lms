import { Button } from "@/components/ui/button";
import { SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white py-4 px-6 md:px-8 flex items-center justify-between ">
      <div className=" w-full md:container flex justify-between items-center gap-x-4">
        <div className="flex items-center gap-4 ">
          <Link className="md:text-xl font-bold" href="#">
            Pamoja Learn
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link className="hover:text-gray-400" href="#">
              Courses
            </Link>
            <Link className="hover:text-gray-400" href="#">
              Instructors
            </Link>
            <Link className="hover:text-gray-400" href="#">
              Blog
            </Link>
            <Link className="hover:text-gray-400" href="#">
              About
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <SignedOut>
            <Link className="hover:text-gray-400" href="#">
              <SignUpButton mode="modal" />
            </Link>
          </SignedOut>
          <SignedIn>
            <Link href="/dashboard">Dashboard</Link>
          </SignedIn>
          <Link href="https://buy.stripe.com/test_bIY16Z1gK8I1d4keUX">
            <Button>Start Free Trial</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
