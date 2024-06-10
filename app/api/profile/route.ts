import { db } from "@/utils/db"
import { auth } from "@clerk/nextjs/server"
import { NextRequest, NextResponse } from "next/server"



export async function POST(
    request: Request
) {
    const { userId } = auth()
    const { firstName,
        lastName,
        headline,
        biography,
        website,
        twitter,
        language,
        facebook,
        linkedIn,
        youtube } = await request.json()
    try {
        const response = await db.profile.upsert({
            where: {
                userId: userId as string
            },
            create: {
                firstName,
                lastName,
                headline,
                biography,
                userId: userId as string,
                website,
                language,
                twitter,
                linkedIn,
                youtube,
                facebook,
            },
            update: {
                firstName,
                lastName,
                headline,
                biography,
                website,
                userId: userId as string,
                twitter,
                language,
                linkedIn,
                youtube,
                facebook,
            }

        })

        return NextResponse.json(response)

    } catch (error) {
        console.log(error)
    }
}


export async function GET(request: NextRequest) {
    const { userId } = auth()
    try {
        const type = request.nextUrl.searchParams.get("type")

        if (type === "all") {
            const res = await db.profile.findMany()
            return NextResponse.json(res)

        }


        const res = await db.profile.findUnique({
            where: {
                userId: userId as string
            }
        })
        return NextResponse.json(res)

    } catch (error) {
        console.log(error)
    }
}