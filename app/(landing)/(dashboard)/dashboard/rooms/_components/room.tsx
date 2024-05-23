"use client";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { useAuth } from "@clerk/nextjs";
import { Room as R, User } from "@prisma/client";
import axios from "axios";
import { Trash } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { CheckIfEnrolled } from "./action";
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

export default function Room({ room }: { room: RoomProps }) {
  const router = useRouter();
  const auth = useAuth();

  const JoinRoom = () => {
    // (async () => {
    //   try {
    //     const info = await axios.post("/api/room/join", { roomId: room.id });

    //     await fetch(`/api/get-participant-token?room=${room.id}`);
    //   } catch (e) {
    //     console.error(e);
    //   }
    // })();
    return router.push(`rooms/join/${room.id}/prejoin`);
  };

  const removeRoom = async () => {
    try {
      const obj = {
        creatorId: room.userId,
        roomId: room.id,
      };

      await axios({
        method: "delete",
        url: "/api/room",
        data: {
          ...obj,
        },
      });
      toast({
        title: "Alert",
        description: "room removed",
      });

      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  function enrollCourse() {
    return router.push(`/dashboad/rooms/${room.id}/enroll`);
  }

  return (
    <div className="md:w-[400px] bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-sm">
      <Image
        alt="Room Thumbnail"
        className=" hover:border-2 border-green-500 cursor-pointer "
        height={225}
        src="/pic.jpg"
        style={{
          aspectRatio: "400/225",
          objectFit: "cover",
        }}
        width={400}
      />
      <div className="p-4">
        <h3 className="text-lg font-medium mb-2">{room.name}</h3>
        <div>
          <ul className="flex space-y-4 flex-col ">
            <li className="flex justify-between">
              <span>Title: </span> {room.title}
            </li>
            <li className="flex space-x-2 justify-between">
              <span>Description: </span>{" "}
              <p className="line-clamp-4">{room.description}</p>
            </li>
            <li className="flex justify-between items-center">
              <p>Price: </p> <Badge variant="outline"> {room.price}</Badge>
            </li>
            <li className="flex justify-around">
              <span>Date: </span>{" "}
              <p className="line-clamp-4">{room.date.split("T")[0]}</p>
            </li>
          </ul>
        </div>

        <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
          <UsersIcon className="w-4 h-4 mr-2" />
          <span>{Array.from(room.participants).length} participants</span>
        </div>
        <div className="flex items-center  justify-between">
          {/* here show join or enroll btns */}
          <CheckIfEnrolled
            room={room}
            joinRoom={JoinRoom}
            enrollCourse={enrollCourse}
          />
          {auth.userId == room.userId && (
            <Button variant={"ghost"} onClick={removeRoom} size="sm">
              <Trash /> Remove
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

function UsersIcon(props: any) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
