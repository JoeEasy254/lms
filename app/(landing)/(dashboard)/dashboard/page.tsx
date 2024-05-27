import { db } from "@/utils/db";

import { auth } from "@clerk/nextjs/server";
import Room from "./rooms/_components/room";
import PaginatePages from "@/components/rootComponents/Paginate";

export default async function dashboard() {
  const { userId } = auth();
  const rooms = await db.room.findMany({
    where: {
      userId: String(userId),
    },
    orderBy: {
      name: "asc",
    },
    include: {
      participants: true,
    },
  });
  return (
    <>
      <h1 className="text-2xl font-bold">My Rooms</h1>
      {/* my rooms */}
      <div className=" flex flex-wrap md:grid grid-cols-3 w-full md:gap-x-4">
        {rooms.map((room: any) => (
          <Room room={room} key={room.id} />
        ))}
      </div>

      <div className="flex items-center justify-center mt-4">
        <PaginatePages />
      </div>
    </>
  );
}
