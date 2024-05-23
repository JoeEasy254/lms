import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react'

export default function Header() {
  return (
    <header className="bg-gray-900 text-white py-4 px-6 md:px-8 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Link className="text-xl font-bold" href="#">
          Skillverse
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
        <Link className="hover:text-gray-400" href="#">
          Login
        </Link>
        <Button>Start Free Trial</Button>
      </div>
    </header>
  );
}
