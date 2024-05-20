import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Room from "./_components/room";
import { db } from "@/utils/db";

export default async function RoomPage() {
  const rooms = await db.room.findMany({
    orderBy: {
      name: "asc",
    },
    include: {
      participants: true,
    },
  });

  return (
    <div className="w-full  py-6 px-4 md:px-6">
      <div className="">
        <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Webconferencing Rooms</h1>
          <div className="relative w-full max-w-md">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400" />
            <Input
              className="w-full pl-10 pr-4 py-2 rounded-md bg-white shadow-sm dark:bg-gray-950"
              placeholder="Search rooms..."
              type="search"
            />
          </div>
        </div>
        <div className="mx-4 my-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {rooms.map((room) => (
            <Room room={room} key={room.id} />
          ))}
        </div>
      </div>
    </div>
  );



}

function SearchIcon(props: any) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
