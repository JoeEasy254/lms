/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Ry8akKJxbNq
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  BookOpenIcon,
  CheckIcon,
  ClockIcon,
  TimerIcon,
  UserIcon,
} from "lucide-react";

export default function EnrollCourse() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold">Enroll in our Course</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Join our comprehensive course and take your skills to the next level.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold">Course Details</h2>
            <div className="mt-2 space-y-2 text-gray-500 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <ClockIcon className="h-5 w-5" />
                <span>Duration: 12 weeks</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpenIcon className="h-5 w-5" />
                <span>Curriculum: 24 modules</span>
              </div>
              <div className="flex items-center space-x-2">
                <UserIcon className="h-5 w-5" />
                <span>Instructor: John Doe</span>
              </div>
              <div className="flex items-center space-x-2">
                <TimerIcon className="h-5 w-5" />
                <span>Free 3 session trial</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold">What You'll Learn</h2>
            <ul className="mt-2 space-y-2 text-gray-500 dark:text-gray-400">
              <li className="flex items-start space-x-2">
                <CheckIcon className="h-5 w-5 text-green-500" />
                <span>Mastering the fundamentals of the subject</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckIcon className="h-5 w-5 text-green-500" />
                <span>Applying advanced techniques and strategies</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckIcon className="h-5 w-5 text-green-500" />
                <span>Developing practical, real-world skills</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
          <h2 className="text-2xl font-bold">Enroll Now</h2>
          <form className="mt-4 space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" type="text" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter your email" type="email" />
            </div>
            <Button className="w-full" type="submit">
              Enroll
            </Button>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              By enrolling, you'll get a free 3 session trial to experience the
              course.
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
