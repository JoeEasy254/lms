"use client";

import "@livekit/components-styles";
import {
  LiveKitRoom,
  VideoConference,
  GridLayout,
  ParticipantTile,
  useTracks,
  useParticipants,
} from "@livekit/components-react";
import { Track } from "livekit-client";
import { useEffect, useMemo, useState } from "react";

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
    return <div>Getting token...</div>;
  }

  return (
    <>
      <LiveKitRoom
        video={false}
        audio={false}
        token={token}
        serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL}
        // Use the default LiveKit theme for nice styles.
        data-lk-theme="default"
      >
        <div className="flex justify-between">
          <div className="flex flex-col ">
            <VideoConference />
            {/* <MyVideoConference /> */}
            {/* Your custom component with basic video conferencing functionality. */}
            {/* The RoomAudioRenderer takes care of room-wide audio for you. */}
          </div>
        </div>
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
  return;
}
