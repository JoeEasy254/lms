import { db } from "@/utils/db"
import { auth, currentUser } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"


export async function POST(request: Request) {
    try {
        const { name } = await request.json()
        const { userId } = auth()
        const current = await currentUser()

        // check if user has a romm before creation
        const getRoomUser = await db.room.findMany({
            where: {
                userId: String(userId)
            }
        })

        if (getRoomUser.length > 0) return;
        const room = await db.room.create({
            data: {
                name,
                userId: String(userId)
            }
        })

        await db.user.create({
            data: {
                userId: String(userId),
                roomId: room.id,
                username: current?.firstName?.toString() || String(current?.lastName)
            }
        })




        return NextResponse.json(room)
    } catch (error) {
        console.log(error)
    }

}
export async function DELETE(request: Request) {
    console.log("hello")
    try {
        const { creatorId, roomId } = await request.json()
        const { userId } = auth()

        // check if useId matches to the one request object
        if (userId == creatorId) {
            const data = await db.room.delete({
                where: {
                    id: roomId
                }
            })

            return NextResponse.json(data)
        }

        return new NextResponse("Unauthorized", { status: 401 })
    } catch (error) {
        console.log(error)
    }
}