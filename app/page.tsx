/**
 * v0 by Vercel.
 * @see https://v0.dev/t/e5LdL0HnFaY
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import {
  CardContent,
  Card,
  CardTitle,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <>
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
      <main className="bg-gray-100 dark:bg-gray-800 py-12 md:py-20">
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
                <Button>Start Free Trial</Button>
                <Button variant="secondary">Explore Courses</Button>
              </div>
            </div>
            <div>
              <img
                alt="Online Learning Platform"
                className="rounded-lg shadow-lg"
                height={600}
                src="https://i.pinimg.com/564x/74/b5/09/74b509287789ebdaa86e16b3fb6c5100.jpg"
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
      <section className="bg-white dark:bg-gray-900 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
            Featured Courses
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            <Card>
              <img
                alt="Course Thumbnail"
                className="rounded-t-lg"
                height={225}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/225",
                  objectFit: "cover",
                }}
                width={400}
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  Introduction to Web Development
                </h3>
                <p className="text-gray-700 dark:text-gray-400 mb-4">
                  Learn the fundamentals of web development, including HTML,
                  CSS, and JavaScript.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage
                        alt="Instructor"
                        src="/instructor-avatar-1.jpg"
                      />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-gray-700 dark:text-gray-400">
                      John Doe
                    </span>
                  </div>
                  <Button size="sm">Enroll</Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <img
                alt="Course Thumbnail"
                className="rounded-t-lg"
                height={225}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/225",
                  objectFit: "cover",
                }}
                width={400}
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  Mastering Data Analysis with Python
                </h3>
                <p className="text-gray-700 dark:text-gray-400 mb-4">
                  Dive deep into data analysis using Python and popular
                  libraries like Pandas and NumPy.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage
                        alt="Instructor"
                        src="/instructor-avatar-2.jpg"
                      />
                      <AvatarFallback>SA</AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-gray-700 dark:text-gray-400">
                      Sarah Anderson
                    </span>
                  </div>
                  <Button size="sm">Enroll</Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <img
                alt="Course Thumbnail"
                className="rounded-t-lg"
                height={225}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/225",
                  objectFit: "cover",
                }}
                width={400}
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  Graphic Design Fundamentals
                </h3>
                <p className="text-gray-700 dark:text-gray-400 mb-4">
                  Learn the essential principles and techniques of graphic
                  design.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage
                        alt="Instructor"
                        src="/instructor-avatar-3.jpg"
                      />
                      <AvatarFallback>LM</AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-gray-700 dark:text-gray-400">
                      Lisa Martinez
                    </span>
                  </div>
                  <Button size="sm">Enroll</Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <img
                alt="Course Thumbnail"
                className="rounded-t-lg"
                height={225}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/225",
                  objectFit: "cover",
                }}
                width={400}
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  Mastering Public Speaking
                </h3>
                <p className="text-gray-700 dark:text-gray-400 mb-4">
                  Develop the skills to become a confident and effective public
                  speaker.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage
                        alt="Instructor"
                        src="/instructor-avatar-4.jpg"
                      />
                      <AvatarFallback>MK</AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-gray-700 dark:text-gray-400">
                      Michael Kim
                    </span>
                  </div>
                  <Button size="sm">Enroll</Button>
                </div>
              </CardContent>
            </Card>
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
            <Card>
              <CardHeader>
                <CardTitle>Basic</CardTitle>
                <CardDescription>
                  Get started with our basic plan.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-extrabold tracking-tight">
                    $9
                  </span>
                  <span className="text-xl font-semibold">/month</span>
                </div>
                <ul className="space-y-2 my-8">
                  <li className="flex items-center">
                    <CheckIcon className="w-5 h-5 mr-2 text-primary" />
                    Access to all courses
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="w-5 h-5 mr-2 text-primary" />
                    Quizzes and assessments
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="w-5 h-5 mr-2 text-primary" />
                    Certificate of completion
                  </li>
                  <li className="flex items-center">
                    <XIcon className="w-5 h-5 mr-2 text-red-500" />
                    Leaderboard and achievements
                  </li>
                </ul>
                <Button className="w-full">Get Started</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Pro</CardTitle>
                <CardDescription>
                  Unlock more features with our pro plan.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-extrabold tracking-tight">
                    $19
                  </span>
                  <span className="text-xl font-semibold">/month</span>
                </div>
                <ul className="space-y-2 my-8">
                  <li className="flex items-center">
                    <CheckIcon className="w-5 h-5 mr-2 text-primary" />
                    Access to all courses
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="w-5 h-5 mr-2 text-primary" />
                    Quizzes and assessments
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="w-5 h-5 mr-2 text-primary" />
                    Certificate of completion
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="w-5 h-5 mr-2 text-primary" />
                    Leaderboard and achievements
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="w-5 h-5 mr-2 text-primary" />
                    Personalized learning paths
                  </li>
                </ul>
                <Button className="w-full">Get Started</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <CardDescription>
                  Custom solutions for your organization.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-extrabold tracking-tight">
                    Contact us
                  </span>
                </div>
                <ul className="space-y-2 my-8">
                  <li className="flex items-center">
                    <CheckIcon className="w-5 h-5 mr-2 text-primary" />
                    Customized curriculum
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="w-5 h-5 mr-2 text-primary" />
                    Dedicated account manager
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="w-5 h-5 mr-2 text-primary" />
                    Advanced reporting and analytics
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="w-5 h-5 mr-2 text-primary" />
                    Single sign-on and integration
                  </li>
                </ul>
                <Button className="w-full">Contact Sales</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <footer className="bg-gray-900 text-white py-8 px-4 md:px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <Link className="text-2xl font-bold flex items-center" href="#">
              <MountainIcon className="h-8 w-8 mr-2" />
              Skillverse
            </Link>
            <p className="text-gray-300 text-sm mt-2">
              © 2024 Skillverse. All rights reserved.
            </p>
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
        </div>
      </footer>
      {/* <section className="bg-white dark:bg-gray-900 py-12 md:py-20" /> */}
    </>
  );
}

function MountainIcon(props) {
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

function CheckIcon(props) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function ClipboardIcon(props) {
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
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  );
}

function PlayIcon(props) {
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
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  );
}

function TrophyIcon(props) {
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
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}

function XIcon(props) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
