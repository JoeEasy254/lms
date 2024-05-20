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
  const [token, setToken] = useState("");

  return (
    <LiveKitRoom
      video={true}
      audio={true}
      token={token}
      serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL}
      // Use the default LiveKit theme for nice styles.
      data-lk-theme="default"
      style={{ height: "100vh" }}
    >
      {children}
    </LiveKitRoom>
  );
}
