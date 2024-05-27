import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { HandshakeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 md:px-6 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div>
          <img src="./logo.png" alt="logo" className="w-[120px] rounded-md" />
        </div>

        <nav className="flex items-center space-x-6">
          <Link className="hover:text-gray-300 text-lg" href="#">
            About
          </Link>
          <Link className="hover:text-gray-300 text-lg" href="#">
            Contact
          </Link>
          <Link className="hover:text-gray-300 text-lg" href="#">
            Terms
          </Link>
          <Link className="hover:text-gray-300 text-lg" href="#">
            Privacy
          </Link>
        </nav>
      </div>
      <div className="container mx-auto mt-8 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-bold">Join our community</h3>
          <p className="text-gray-300 text-sm mt-2">
            Stay up to date with the latest news and updates.
          </p>
        </div>
        <form className="flex items-center space-x-2">
          <Input
            className="bg-gray-800 border-none text-white placeholder-gray-400 focus:ring-2 focus:ring-[#5c6ac4] focus:outline-none rounded-md py-2 px-4 w-full max-w-md"
            placeholder="Enter your email"
            type="email"
          />
          <Button
            className="bg-[#4a5568] hover:bg-[#6b7280] text-white font-bold py-2 px-4 rounded-md"
            type="submit"
          >
            Subscribe
          </Button>
        </form>
        <div className="mb-4 md:mb-0">
          <Link className="text-2xl font-bold flex items-center" href="#">
            {/* <MountainIcon /> */}
            <HandshakeIcon className="h-8 w-8 mr-2" />
            Pamoja Learn
          </Link>
          <p className="text-gray-300 text-sm mt-2">
            © 2024 PamojaLearn. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
