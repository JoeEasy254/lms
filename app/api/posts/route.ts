import { db } from "@/utils/db"
import { auth } from "@clerk/nextjs/server"
import { Posts, User } from "@prisma/client"
import { NextResponse } from "next/server"
import { NextRequest as req } from 'next/server'

export async function POST(request: Request) {
    try {
        const { userId } = auth()


        // get this user
        const authUser: User | null = await db.user.findUnique({
            where: {
                userId: String(userId)
            }

        })
        const { content, title } = await request.json()
        if (authUser) {

            await db.posts.create({
                data: {
                    title,
                    content,
                    userId: authUser.userId
                }
            })

            return new NextResponse("post created")

        }

        return NextResponse.json({ status: 500, message: "something went wrong" })

    } catch (error) {
        console.log(error)
    }
}


export async function GET(request: req) {
    try {
        // const { skip, take } = await request.json()




        const results: any = await db.posts.findMany({

            orderBy: {
                title: "asc"
            },
        });



        return NextResponse.json({
            results,
        })
    } catch (error) {
        console.log(error)
    }
}




export async function DELETE(request: Request) {
    try {
        const { creatorId, postId } = await request.json()
        const { userId } = auth()

        // check if useId matches to the one request object
        if (userId == creatorId) {
            const data = await db.posts.delete({
                where: {
                    id: postId
                }
            })

            return NextResponse.json(data)
        }

        return new NextResponse("Unauthorized", { status: 401 })
    } catch (error) {
        console.log(error)
    }
}


