import { db } from "@/utils/db"
import { auth } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"


export async function POST(request: Request) {
    try {
        const { roomId } = await request.json()
        const { userId } = auth()
        // check if roomId matches to any of the rooms
        const room = await db.room.findFirst({
            where: {
                id: roomId
            },
            include: {
                participants: true
            }
        })



        if (room?.id !== roomId) {
            return new NextResponse("room not found!")
        }

        // check if the user is a participant in this room

        const isFound = room?.participants.some(userSomeHow => userSomeHow.userId === userId)


        if (isFound) {
            return new NextResponse("you are already a participant in this room")
        } else {
            const findUserWithId = await db.user.findUnique({
                where: {
                    userId: String(userId)
                }
            })


            room?.participants.push(findUserWithId!!);
            const response = await db.room.update({
                where: {
                    id: room?.id,
                },
                data: {
                    participants: {
                        set: room?.participants.map(participant => ({ id: findUserWithId?.id }))
                    },
                },
            });

            return new NextResponse("you've joined as participant in this room")




        }




    } catch (error) {
        console.log(error)
    }
}