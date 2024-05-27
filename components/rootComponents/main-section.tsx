import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react'

export default function Mainsection() {
  return (
    <main className="bg-gray-100 dark:bg-gray-800 py-12 md:py-20 ">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Learn New Skills, Anytime, Anywhere
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-400 mb-8">
              Skillverse offers live, interactive classes taught by vetted
              instructors across a variety of skills and subjects. Get started
              with a free trial.
            </p>
            <div className="flex gap-4">
              <Link href="https://buy.stripe.com/test_bIY16Z1gK8I1d4keUX">
                <Button>Start Free Trial</Button>
              </Link>
              <Button variant="secondary">Explore Courses</Button>
            </div>
          </div>
          <div>
            <img
              alt="Online Learning Platform"
              className="rounded-lg shadow-lg"
              height={600}
              src="https://i.pinimg.com/564x/64/4e/5f/644e5ffe171e7603ebe4e504068dcc50.jpg"
              style={{
                aspectRatio: "800/600",
                objectFit: "cover",
              }}
              width={800}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
