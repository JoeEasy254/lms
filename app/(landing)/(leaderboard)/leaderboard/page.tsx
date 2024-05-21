/**
 * v0 by Vercel.
 * @see https://v0.dev/t/484ZG4Daaz2
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";

export default function Leaderboard() {
  return (
    <>
      <main className="w-full ">
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                Leaderboard
              </h2>
            </div>
            <div className="border rounded-lg overflow-hidden">
              <Table className="w-[750px]">
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[32px]">Rank</TableHead>
                    <TableHead>User</TableHead>
                    <TableHead className="text-right">Points</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage alt="User" src="/placeholder-user.jpg" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">John Doe</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            Online Learning
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">1250</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage alt="User" src="/placeholder-user.jpg" />
                          <AvatarFallback>SA</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">Sarah Anderson</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            Productivity
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">1100</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>3</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage alt="User" src="/placeholder-user.jpg" />
                          <AvatarFallback>MJ</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">Michael Johnson</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            Education Technology
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">950</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>4</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage alt="User" src="/placeholder-user.jpg" />
                          <AvatarFallback>LW</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">Lisa Williams</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            Career Development
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">900</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>5</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage alt="User" src="/placeholder-user.jpg" />
                          <AvatarFallback>JR</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">Jessica Ramos</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            Online Learning
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">850</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>6</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage alt="User" src="/placeholder-user.jpg" />
                          <AvatarFallback>EG</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">Emily Garcia</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            Education Technology
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">800</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </section>
      </main>
    </>
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
