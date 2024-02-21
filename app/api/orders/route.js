import connectMongoDB from "@/libs/mongodb"
import Order from "@/models/orders";
import { NextResponse } from "next/server";

export async function POST(req) {
    const { name, email, phoneNum, bName, service, details, exLink, cDate, hunous } = await req.json()
    await connectMongoDB();
    await Order.create({ name, email, phoneNum, bName, service, details, exLink, cDate, hunous })
    return NextResponse.json({ message: 'Order Sent' }, { status: 201 })
}

export async function GET() {
    await connectMongoDB();
    const orders = await Order.find()
    return NextResponse.json({ orders })
}

export async function DELETE(req) {
    const id = req.nextUrl.searchParams.get('id')
    await connectMongoDB()
    await Order.findByIdAndDelete(id)
    return NextResponse.json({message: 'Order Delete'}, {status: 200})
}