import { db } from "@/utils/db";
import RoomBtnEvents from "./(dashboard)/rooms/create/_components/RoomBtnEvents";
import Room from "./(dashboard)/rooms/_components/room";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
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
