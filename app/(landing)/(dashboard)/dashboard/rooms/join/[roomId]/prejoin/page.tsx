"use client";
import LiveKitConfig from "@/app/livekit";
import { LocalUserChoices, PreJoin } from "@livekit/components-react";
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
  async function JoinToRoom() {
    router.push(`/dashboard/rooms/join/${data.roomName}/meet`);
  }

  return (
    <div>
      <LiveKitConfig data={data}>
        <PreJoin onSubmit={JoinToRoom} />
      </LiveKitConfig>
    </div>
  );
}
