import { db } from "@/utils/db";
import { auth } from "@clerk/nextjs/server";
import { Room, User } from "@prisma/client";
import { NextRequest as Req } from 'next/server'
import { NextResponse } from "next/server";



export async function GET(request: Req) {

    const myrooms = request.nextUrl.searchParams.get("myrooms")
    try {
        const { userId } = auth()
        if (myrooms) {
            const myrooms = await db.room.findMany({
                where: {
                    userId: String(userId)
                },
                orderBy: {
                    name: "asc",
                },
                include: {
                    participants: true,
                },
            });

            return NextResponse.json(myrooms)
        }
        const rooms: any = await db.room.findMany({
            orderBy: {
                name: "asc",
            },
            include: {
                participants: true,
            },
        });

        return NextResponse.json(rooms)
    } catch (error) {
        console.log(error)
    }
}



export async function PUT(request: Request) {
    const { userId } = auth()
    const { data, id } = await request.json()


    console.log("triger", id, data);

    try {
        const { name } = data

        // check if this user can edit this post
        const isUserLegit = await db.room.findFirst({
            where: {
                id,
                userId: userId as string
            }
        })

        if (!isUserLegit) {
            return new Response("Not authorized", {
                status: 401
            })
        }

        const post = await db.room.update({
            where: {
                id: isUserLegit.id

            }, data: {
                name
            }
        })

        return NextResponse.json("course updated")
    } catch (error) {
        console.log(error)
    }
}


