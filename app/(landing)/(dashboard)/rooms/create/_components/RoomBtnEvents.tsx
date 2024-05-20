"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
export default function RoomBtnEvents() {
  const router = useRouter();
  function JoinRoom() {
    return router.push("/rooms");
  }

  
  function createRoom() {
    return router.push("/rooms/create");
  }

  
  return (
    <div className=" flex mx-4 my-4">
      <div className="flex space-x-4">
        <Button onClick={createRoom}>Create a room </Button>
{/* 
        <Button onClick={JoinRoom}>Join a room</Button> */}
      </div>
    </div>
  );
}
