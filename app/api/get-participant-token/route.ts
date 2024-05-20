import { db } from "@/utils/db";
import { auth, currentUser } from "@clerk/nextjs/server";

import { AccessToken } from "livekit-server-sdk";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {
    const room = req.nextUrl.searchParams.get("room");
    // const username = req.nextUrl.searchParams.get("username");

    const user = await currentUser()
    const { userId } = auth()
    const fetchedUser = await db.user.findUnique({
        where: {
            userId: String(userId)
        }
    })
    const r = await db.room.findUnique({
        where: {
            id: String(room)
        }, include: {
            participants: true
        }
    })
    const existingUser = r?.participants.find(item => item.id === user?.id)
    if (!existingUser) {

        if (fetchedUser) {
            r?.participants.push(fetchedUser)
        }

    }
    if (!room) {
        return NextResponse.json(
            { error: 'Missing "room" query parameter' },
            { status: 400 }
        );
    } else if (!user?.firstName) {
        return NextResponse.json(
            { error: 'Missing "username" query parameter' },
            { status: 400 }
        );
    }

    const apiKey = process.env.LIVEKIT_API_KEY;
    const apiSecret = process.env.LIVEKIT_API_SECRET;
    const wsUrl = process.env.NEXT_PUBLIC_LIVEKIT_URL;

    if (!apiKey || !apiSecret || !wsUrl) {
        return NextResponse.json(
            { error: "Server misconfigured" },
            { status: 500 }
        );
    }

    const at = new AccessToken(apiKey, apiSecret, { identity: String(user.fullName) });

    at.addGrant({ room: r?.name, roomJoin: true, canPublish: true, canSubscribe: true });

    return NextResponse.json({ token: await at.toJwt() });
}