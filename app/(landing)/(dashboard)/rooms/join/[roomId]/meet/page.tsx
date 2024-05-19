"use client";

import "@livekit/components-styles";
import {
  LiveKitRoom,
  VideoConference,
  GridLayout,
  ParticipantTile,
  RoomAudioRenderer,
  ControlBar,
  useTracks,
} from "@livekit/components-react";
import { Track } from "livekit-client";
import { useEffect, useMemo, useState } from "react";
import Chat from "./components/Chat";

export default function page({ params }: { params: { roomId: string } }) {
  // TODO: get user input for room and name
  const room = "quickstart-room";
  const name = "quickstart-user";
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
  }, []);

  if (token === "") {
    return <div>Getting token...</div>;
  }

  return (
    <LiveKitRoom
      video={true}
      audio={true}
      token={token}
      serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL}
      // Use the default LiveKit theme for nice styles.
      data-lk-theme="default"
      style={{ height: "100dvh" }}
    >
      <div className="flex justify-between">
        <div className="flex flex-col ">
          <MyVideoConference />

          {/* Your custom component with basic video conferencing functionality. */}
          {/* The RoomAudioRenderer takes care of room-wide audio for you. */}

      
            <ControlBar />
          <RoomAudioRenderer />
        </div>
        <div className="">
          <Chat participantName="joseph" />
        </div>
      </div>
      {/* Controls for the user to start/stop audio, video, and screen
      share tracks and to leave the room. */}
    </LiveKitRoom>
  );
}

function MyVideoConference() {
  // `useTracks` returns all camera and screen share tracks. If a user
  // joins without a published camera track, a placeholder track is returned.
  const tracks = useTracks(
    [
      { source: Track.Source.Camera, withPlaceholder: true },
      { source: Track.Source.ScreenShare, withPlaceholder: false },
    ],
    { onlySubscribed: false }
  );
  return (
    <GridLayout
      tracks={tracks}
      style={{ height: "calc(100vh - var(--lk-control-bar-height))" }}
    >
      {/* The GridLayout accepts zero or one child. The child is used
      as a template to render all passed in tracks. */}
      <ParticipantTile />
    </GridLayout>
  );
}
