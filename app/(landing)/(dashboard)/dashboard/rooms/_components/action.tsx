"use client";

import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { useAuth } from "@clerk/nextjs";
import { Room, User } from "@prisma/client";
import axios from "axios";
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
  joinRoom,
  enrollCourse,
}: {
  room: RoomProps;
  joinRoom: () => void;
  enrollCourse: () => void;
}) => {
  const auth = useAuth();
  const [fetchedRoom, setFetchedRoom] = useState<RoomProps>();

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
        <Button className="w-full" onClick={joinRoom} size="sm">
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
