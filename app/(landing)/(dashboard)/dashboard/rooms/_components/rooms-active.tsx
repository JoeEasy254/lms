"use client";

import { Button } from "@/components/ui/button";
import { Room } from "livekit-server-sdk";
import { Radio } from "lucide-react";
import { useEffect, useState } from "react";

export default function ActiveRooms() {
  const [activeRooms, setActiveRooms] = useState<Room[]>([]);

  useEffect(() => {
    async function getActiveRooms() {
      // Send a POST request
      const res = await fetch("/api/room/list");

      const data = await res.json();
      setActiveRooms(data);
    }
    getActiveRooms();
  }, []);

  console.log(activeRooms.length);
  return (
    <div className={` ${activeRooms.length < 1 && "hidden"}`}>
      <Button
        disabled={true}
        className="animate-pulse relative inline-flex space-x-2 items-center p-3 text-sm font-medium text-center text-white "
      >
        <h1 className="flex space-x-3">
          <Radio /> <span>live courses</span>
        </h1>
        <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
          {activeRooms.length}
        </div>
      </Button>
    </div>
  );
}
