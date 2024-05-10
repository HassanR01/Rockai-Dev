import connectMongoDB from "@/libs/mongodb"
import Ask from "@/models/Ask"
import { NextResponse } from "next/server"

export async function POST(req){
    const { name, email, pProject, phone, reason, message } = await req.json()
    await connectMongoDB()
    await Ask.create({ name, email, pProject, phone, reason, message })
    return NextResponse.json({message: 'Ask Sent'} , {status: 201})
}

export async function GET(){
    await connectMongoDB()
    const asks = await Ask.find()
    return NextResponse.json({asks})
}
