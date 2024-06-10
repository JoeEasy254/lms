import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import ShowcaseRooms from "../(settings)/settings/_components/showcaseRooms";
import RoomBtnEvents from "../rooms/create/_components/RoomBtnEvents";

export default function InstructorPage() {
  return (
    <div className="flex flex-col space-y-4 ">
      <Link
        href="/dashboard/instructor/settings
      "
      >
        <Button>Profile</Button>
      </Link>

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
      </main>
    </div>
  );
}
