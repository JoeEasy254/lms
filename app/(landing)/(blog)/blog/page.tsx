/**
 * v0 by Vercel.
 * @see https://v0.dev/t/kF3YALrVeoi
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { CardContent, Card } from "@/components/ui/card";

export default function Blogpage() {
  return (
    <>
      <main className="w-full">
        <section className="py-16 md:py-24 ">
          <div >
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center">
                <span className="mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-400">
                  Latest Post
                </span>
                <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                  Mastering the Art of Online Learning
                </h1>
                <p className="mb-6 text-gray-500 dark:text-gray-400">
                  Discover the secrets to effective online learning and unlock
                  your full potential in the digital classroom.
                </p>
                <Link
                  className="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                  href="#"
                >
                  Read More
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div>
                <img
                  alt="Mastering the Art of Online Learning"
                  className="h-full w-full rounded-lg object-cover"
                  height={500}
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  style={{
                    aspectRatio: "800/500",
                    objectFit: "cover",
                  }}
                  width={800}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16">
          <div >
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                Recent Posts
              </h2>
              <div className="hidden md:block">
                <DropdownMenu>
                  <DropdownMenuTrigger className="inline-flex items-center rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2  ">
                    Filter by Category
                    <ChevronDownIcon className="ml-2 h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Link href="#">Online Learning</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="#">Productivity</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="#">Career Development</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="#">Education Technology</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <img
                  alt="Effective Strategies for Online Collaboration"
                  className="h-48 w-full rounded-t-lg object-cover"
                  height={500}
                  src="https://images.unsplash.com/photo-1611576191056-3e6696029388?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  style={{
                    aspectRatio: "800/500",
                    objectFit: "cover",
                  }}
                  width={800}
                />
                <CardContent className="p-4">
                  <h3 className="mb-2 text-xl font-bold">
                    Effective Strategies for Online Collaboration
                  </h3>
                  <p className="text-gray-500">
                    Discover the best practices for fostering effective teamwork
                    in the virtual classroom.
                  </p>
                  <Link className="mt-4 inline-flex items-center " href="#">
                    Read More
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
                <div className="flex items-center justify-center gap-4 mb-4">
                  <Avatar>
                    <AvatarImage alt="Author" src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">John Doe</div>
                    <div className="text-sm text-gray-500 ">12 Comments</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function ArrowRightIcon(props: any) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function ChevronDownIcon(props: any) {
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
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
