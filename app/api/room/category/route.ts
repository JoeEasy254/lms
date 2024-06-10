import { db } from "@/utils/db"
import { NextResponse } from "next/server"



export async function GET(request: Request) {
    try {
        const res = await db.category.findMany({
            include: {
                subcategories: true
            }
        })

        return NextResponse.json(res)
    } catch (error) {
        console.log(error)
    }
}