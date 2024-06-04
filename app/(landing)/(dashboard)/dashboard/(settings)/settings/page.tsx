
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { ModeToggle } from "@/components/ModeToggle";
import RoomBtnEvents from "../../rooms/create/_components/RoomBtnEvents";
import ShowcaseRooms from "./_components/showcaseRooms";
import ShowcasePosts from "./_components/showcasePosts";

export default function SettingsPage() {
  return (
    <div className="flex flex-col ">
      <main className="flex flex-col space-y-3">
        <section className="col-span-1 md:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Course</CardTitle>
              <CardDescription>
                Manage your courses and participants.
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
