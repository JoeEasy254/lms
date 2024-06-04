"use client";

import "@livekit/components-styles";
import {
  LiveKitRoom,
  VideoConference,
  GridLayout,
  ParticipantTile,
  useTracks,
  useParticipants,
  ParticipantLoop,
  ParticipantName,
} from "@livekit/components-react";
import { Track } from "livekit-client";
import { useEffect, useMemo, useState } from "react";
import Loader from "@/components/rootComponents/loading";
import { Disc, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MeetPage({ params }: { params: { roomId: string } }) {
  // // TODO: get user input for room and name
  // const room = "quickstart-room";
  // const name = "quickstart-user";
  const [token, setToken] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const resp = await fetch(
          `/api/get-participant-token?room=${params.roomId}`
        );
        const data = await resp.json();
        setToken(data.token);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [params.roomId]);

  if (token === "") {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <>
      <LiveKitRoom
        color="green"
        video={false}
        audio={false}
        token={token}
        serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL}
        // Use the default LiveKit theme for nice styles.

        data-lk-theme="default"
      >
        <MyVideoConference />
        <VideoConference />
        {/* Your custom component with basic video conferencing functionality. */}
        {/* The RoomAudioRenderer takes care of room-wide audio for you. */}

        {/* Controls for the user to start/stop audio, video, and screen
      share tracks and to leave the room. */}
      </LiveKitRoom>
    </>
  );
}

function MyVideoConference() {
  // `useTracks` returns all camera and screen share tracks. If a user
  // joins without a published camera track, a placeholder track is returned.

  const participants = useParticipants();
  console.log(participants);
  return (
    <>
      <div className="flex  items-center space-x-5">
        <div>
          <Button
            disabled={true}
            className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white "
          >
            Partipants
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
              {participants.length}
            </div>
          </Button>
        </div>

        <div>
          <Button variant={"destructive"}>
            <Disc />
          </Button>
        </div>
      </div>
    </>
  );
}
