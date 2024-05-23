"use client";
import LiveKitConfig from "@/app/livekit";
import {
  LocalUserChoices,
  PreJoin,
  RoomName,
  useRoomInfo,
} from "@livekit/components-react";
import { useRouter } from "next/navigation";

interface Data {
  roomName: string | undefined;
  username: string | undefined;
}
export default function BeforeJoining({
  params,
}: {
  params: { roomId: string };
}) {
  const data: Data = {
    username: undefined,
    roomName: params.roomId,
  };

  const router = useRouter();
  async function JoinToRoom(values: LocalUserChoices) {
    router.push(`/rooms/join/${data.roomName}/meet`);
  }

  return (
    <div>
      <LiveKitConfig data={data}>
        <PreJoin onSubmit={JoinToRoom} />
      </LiveKitConfig>
    </div>
  );
}
