/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Q6VzPRKRf4O
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { ModeToggle } from "@/components/ModeToggle";
import RoomBtnEvents from "../../rooms/create/_components/RoomBtnEvents";

export default function SettingsPage() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <main className="md:flex-1 md:grid grid-cols-1 md:grid-cols-3 md:gap-6 md:p-6 md:p-8 lg:p-10">
        <section className="col-span-1 md:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Rooms</CardTitle>
              <CardDescription>
                Manage your rooms and participants.
              </CardDescription>
              <div className="flex items-center gap-4 mt-4">
                <RoomBtnEvents />
                <Button size="sm" variant="outline">
                  Delete Room
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-y-3">
                <div className="grid grid-cols-[1fr_auto] gap-4">
                  <div className="grid gap-1">
                    <div className="text-lg font-medium">Room 1</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      5 participants
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <Button size="sm" variant="outline">
                      Add Participant
                    </Button>
                    <Button size="sm" variant="outline">
                      Remove Participant
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-[1fr_auto] gap-4">
                  <div className="grid gap-1">
                    <div className="text-lg font-medium">Room 2</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      3 participants
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <Button size="sm" variant="outline">
                      Add Participant
                    </Button>
                    <Button size="sm" variant="outline">
                      Remove Participant
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-[1fr_auto] gap-4">
                  <div className="grid gap-1">
                    <div className="text-lg font-medium">Room 3</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      7 participants
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <Button size="sm" variant="outline">
                      Add Participant
                    </Button>
                    <Button size="sm" variant="outline">
                      Remove Participant
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
        <section className="col-span-1 md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>
                Manage your notification preferences.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-base font-medium">
                      Email Notifications
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Receive email notifications for important updates.
                    </div>
                  </div>
                  <Switch id="email-notifications" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-base font-medium">
                      Push Notifications
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Receive push notifications for real-time updates.
                    </div>
                  </div>
                  <Switch id="push-notifications" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-base font-medium">
                      SMS Notifications
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Receive SMS notifications for important updates.
                    </div>
                  </div>
                  <Switch id="sms-notifications" />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
        <section className="col-span-1 md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Appearance</CardTitle>
              <CardDescription>
                Customize the appearance of your account.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex flex-col space-y-2 justify-between">
                  <div>
                    <div className="text-base font-medium">Theme</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Choose a theme for your account.
                    </div>
                  </div>
                  <ModeToggle />
                </div>
                <div className="flex flex-col space-y-2 justify-between">
                  <div>
                    <div className="text-base font-medium">Font Size</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Adjust the font size for your account.
                    </div>
                  </div>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Font Size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Small</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="large">Large</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col space-y-2 justify-between">
                  <div>
                    <div className="text-base font-medium">Language</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Choose the language for your account.
                    </div>
                  </div>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="de">German</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
        <section className="col-span-1 md:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Blogs</CardTitle>
              <CardDescription>Manage your blog posts.</CardDescription>
              <div className="flex items-center gap-4 mt-4 flex-wrap">
                <Button size="sm" variant="outline">
                  Create Article
                </Button>
                <Button size="sm" variant="outline">
                  Edit Article
                </Button>
                <Button size="sm" variant="outline">
                  Delete Article
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-y-3">
                <div className="grid grid-cols-[1fr_auto] gap-4">
                  <div className="grid gap-1">
                    <div className="text-lg font-medium">Blog Post 1</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Published on May 1, 2023
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="outline">
                      Edit
                    </Button>
                    <Button size="sm" variant="outline">
                      Delete
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-[1fr_auto] gap-4">
                  <div className="grid gap-1">
                    <div className="text-lg font-medium">Blog Post 2</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Published on April 15, 2023
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="outline">
                      Edit
                    </Button>
                    <Button size="sm" variant="outline">
                      Delete
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-[1fr_auto] gap-4">
                  <div className="grid gap-1">
                    <div className="text-lg font-medium">Blog Post 3</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Published on March 30, 2023
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="outline">
                      Edit
                    </Button>
                    <Button size="sm" variant="outline">
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
