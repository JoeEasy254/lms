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
      <div className="mx-4 my-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {rooms.map((room) => (
          <Room room={room} key={room.id} />
        ))}
      </div>
    </>
  );
}
