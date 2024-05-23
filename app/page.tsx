/**
 * v0 by Vercel.
 * @see https://v0.dev/t/e5LdL0HnFaY
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import Header from "@/components/rootComponents/header";
import Mainsection from "@/components/rootComponents/main-section";
import Course from "@/components/rootComponents/Course";
import PricingCard from "@/components/rootComponents/pricing-card";

import { ClipboardIcon, PlayIcon, TrophyIcon } from "lucide-react";

export default function Home() {
  return (
    <>
      <Header />
      <Mainsection />
      <section className="bg-white dark:bg-gray-900 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
            Featured Courses
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            <Course />
            <Course />
            <Course />
            <Course />
          </div>
        </div>
      </section>
      <section className="bg-gray-100 dark:bg-gray-800 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 md:p-8">
              <div className="flex items-center mb-4">
                <PlayIcon className="w-8 h-8 text-primary mr-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Live Interactive Classes
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-400">
                Attend live, interactive classes taught by vetted instructors
                using WebRTC-powered video and audio.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 md:p-8">
              <div className="flex items-center mb-4">
                <ClipboardIcon className="w-8 h-8 text-primary mr-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Quizzes and Assessments
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-400">
                Test your knowledge with interactive quizzes and assessments to
                track your progress.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 md:p-8">
              <div className="flex items-center mb-4">
                <TrophyIcon className="w-8 h-8 text-primary mr-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Leaderboard and Achievements
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-400">
                Compete with other learners and earn achievements to climb the
                leaderboard.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
            Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <PricingCard />
            <PricingCard />
            <PricingCard />
            <PricingCard />
          </div>
        </div>
      </section>

      {/* <section className="bg-white dark:bg-gray-900 py-12 md:py-20" /> */}
    </>
  );
}
