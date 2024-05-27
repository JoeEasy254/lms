import { db } from "@/utils/db"
import { auth, currentUser } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"
import { NextRequest as req } from 'next/server'

export async function POST(request: Request) {
    try {
        const { name, title, description, price, date } = await request.json()
        const { userId } = auth()
        const current = await currentUser()



        const room = await db.room.create({
            data: {
                name,
                title,
                description,
                date,
                price,
                userId: String(userId)
            }
        })


        const foundUser = await db.user.findUnique({
            where: {
                userId: String(userId)
            }
        })
        if (!foundUser) {
            await db.user.create({
                data: {
                    userId: String(userId),
                    username: current?.firstName?.toString() || String(current?.lastName)
                }
            })

        }

        return new NextResponse('created')
    } catch (error) {
        console.log(error)
    }

}

export async function DELETE(request: Request) {
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


export async function GET(request: req) {
    const roomId = request.nextUrl.searchParams.get("roomId")
    try {
        const room = await db.room.findFirst({
            where: {
                id: String(roomId),
            },
            include: {
                participants: true,
            },
        });

        return NextResponse.json(room)
    } catch (error) {
        console.log(error)
    }
}