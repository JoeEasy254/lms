"use client";

import { Badge } from "@/components/ui/badge";
import axios from "axios";
import { Room } from "livekit-server-sdk";
import { Radio } from "lucide-react";
import { useEffect, useState } from "react";

export default function ActiveRooms() {
  const [activeRooms, setActiveRooms] = useState<Room[]>([]);

  useEffect(() => {
    async function getActiveRooms() {
      // Send a POST request
      const res = await axios({
        method: "get",
        url: "/api/room/list",
      });

      console.log(res.data);

      setActiveRooms(res.data);
    }
    getActiveRooms();
  }, []);

  console.log(activeRooms.length);
  return (
    <div className={` ${activeRooms.length < 1 && "hidden"}`}>
      <h1 className="flex items-center space-x-5 ">
        <Radio className="animate-ping" />{" "}
        <span className="text-xl">{activeRooms.length}</span>
      </h1>
    </div>
  );
}
