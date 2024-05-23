import { db } from "@/utils/db";

import { auth } from "@clerk/nextjs/server";
import RoomBtnEvents from "./rooms/create/_components/RoomBtnEvents";
import Room from "./rooms/_components/room";


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
      <RoomBtnEvents />

      {/* my rooms */}
      <div className="m-4 flex flex-wrap space-x-4 items-center">
        {rooms.map((room: any) => (
          <Room room={room} key={room.id} />
        ))}
      </div>
    </>
  );
}
