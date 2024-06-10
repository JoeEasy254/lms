"use client";

import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { db } from "@/utils/db";
import { useAuth } from "@clerk/nextjs";
import { Room, User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface RoomProps {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  description: string;
  date: string;
  price: number;
  userId: string;
  participants: User[];
}

export const CheckIfEnrolled = ({
  room,
}: {
  room: RoomProps;
  joinRoom: () => void;
  enrollCourse: () => void;
}) => {
  const auth = useAuth();
  const router = useRouter();
  const [fetchedRoom, setFetchedRoom] = useState<RoomProps>();

  const JoinRoom = () => {
    return router.push(`/dashboard/rooms/join/${room.name}/meet`);
  };
  // const removeRoom = async () => {
  //   try {
  //     const obj = {
  //       creatorId: room.userId,
  //       roomId: room.id,
  //     };

  //     await fetch("/api/room", {
  //       method: "delete",
  //       body: JSON.stringify(obj),
  //     });
  //     toast({
  //       title: "Alert",
  //       description: "room removed",
  //     });

  //     router.refresh();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  function enrollCourse() {
    return router.push(`/dashboard/rooms/${room.id}/enroll`);
  }

  useEffect(() => {
    const getRoom = async () => {
      try {
        const res = await fetch(`/api/room?roomId=${room.id}`);
        const data = await res.json();
        setFetchedRoom(data);
      } catch (error) {
        console.log(error);
      }
    };
    getRoom();
  }, []);

  const userInRoom = fetchedRoom?.participants.some(
    (participant) => participant.userId === auth.userId
  );

  const isUserInRoomOwner: boolean = room.userId === auth.userId;

  function renderButtons() {
    if (userInRoom || isUserInRoomOwner) {
      return (
        <Button onClick={JoinRoom} size="sm">
          Join Room
        </Button>
      );
    } else {
      return (
        <Button className="w-full" onClick={enrollCourse} size="sm">
          enroll
        </Button>
      );
    }
  }
  return <div>{renderButtons()}</div>;
};
