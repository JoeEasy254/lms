
import { RoomServiceClient, Room } from 'livekit-server-sdk';
import { NextResponse } from 'next/server';

const livekitHost = 'https://discord-i8bk3ckm.livekit.cloud';
const roomService = new RoomServiceClient(livekitHost, process.env.LIVEKIT_API_KEY, process.env.LiveKIT_API_SECRET);


export async function GET(request: Request) {
    try {
        const rooms: Room[] = await roomService.listRooms()
       
        return NextResponse.json(rooms)
    } catch (error) {
        console.log(error)
    }
}