"use client";

import "@livekit/components-styles";
import { LiveKitRoom } from "@livekit/components-react";

import { useEffect, useState } from "react";
import { Loader } from "lucide-react";
import strict from "assert/strict";

interface Data {
  roomName: string | undefined;
  username: string | undefined;
}

export default function LiveKitConfig({
  children,
  data,
}: {
  children: React.ReactNode;
  data: Data;
}) {
  // TODO: get user input for room and name
  const room: string | undefined = data.roomName;
  const name: string | undefined = data.username;
  const [token, setToken] = useState("");

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const resp = await fetch(
  //         `/api/get-participant-token?room=${room}&username=${name}`
  //       );
  //       const data = await resp.json();
  //       setToken(data.token);
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   })();
  // }, []);

  // if (token === "") {
  //   return (
  //     <div className="h-screen flex justify-center items-center">
  //       <Loader className="w-6 h-6 animate-spin " />
  //     </div>
  //   );
  // }

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
      {children}
    </LiveKitRoom>
  );
}
