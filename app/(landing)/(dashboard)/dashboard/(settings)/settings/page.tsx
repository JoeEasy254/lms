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
import Room from "./_components/room";
import ShowcaseRooms from "./_components/showcaseRooms";
import ShowcasePosts from "./_components/showcasePosts";

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
              </div>
            </CardHeader>
            <CardContent>
              <ShowcaseRooms />
            </CardContent>
          </Card>
        </section>
        {/* <section className="col-span-1 md:col-span-2">
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
        </section> */}
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
                <Link href="/dashboard/blog/write">
                  <Button size="sm" variant="outline">
                    Create Article
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <ShowcasePosts />
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
