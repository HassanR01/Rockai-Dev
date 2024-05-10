import connectMongoDB from "@/libs/mongodb"
import Ask from "@/models/Ask"
import { NextResponse } from "next/server"

export async function DELETE(req, { params }) {
    const { askId } = params
    await connectMongoDB()
    await Ask.findByIdAndDelete(askId)
    return NextResponse.json({message: 'Ask Deleted'} , {status: 200})
}
