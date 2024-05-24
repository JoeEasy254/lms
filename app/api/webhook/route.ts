import { db } from "@/utils/db"
import { auth } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"
import Stripe from 'stripe'
import { NextRequest as req } from 'next/server'
import { headers } from 'next/headers';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)




export async function POST(request: req) {
    // console.log("executed atleast")
    // const { userId } = auth()
    // // check if there is  a user from clerk in session
    // // const sessionUser = await db.user.findUnique({
    // //     where: {
    // //         userId: userId as string
    // //     }
    // // })
    // const body = await request.text()

    // const endPointSecret = process.env.STRIPE_SECRET_WEBHOOK_KEY!

    // const sig = headers().get('stripe-signature') as string

    // let event: Stripe.Event
    // try {
    //     event = stripe.webhooks.constructEvent(body, sig, endPointSecret)

    // } catch (error) {

    //     console.log(error)
    //     return new Response(`webhook error ${error}`, { status: 400 })
    // }

    // const eventType = event.type;
    // if (eventType !== 'checkout.session.completed' && eventType !== 'checkout.session.async_payment_succeeded') {
    //     return new Response('Server Error', {
    //         status: 500
    //     })
    // }

    // const data = event.data.object
    // const metadata = data.metadata
    // const price = data.metadata?.price
    // const name = data.metadata?.name
    // const created = data.created
    // const currency = data.currency
    // const customerDetails = data.customer_details
    // const amount = data.amount_total

    // const transactionDetails = {
    //     userId,
    //     price,
    //     created,
    //     currency,
    //     customerDetails,
    //     amount
    // }

    // try {

    //     console.log(transactionDetails)
    //     return new NextResponse("subscription added", {
    //         status: 200
    //     })
    // } catch (error) {
    //     console.log(error)

    //     return new NextResponse("server error", { status: 500 })
    // }




    // console.log(metadata)
    return new NextResponse("okay", { status: 200 })

}