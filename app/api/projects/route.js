import connectMongoDB from "@/libs/mongodb"
import Project from "@/models/projects";
import { NextResponse } from "next/server";

export async function POST(req) {
    const { title, link, image, description, technologies } = await req.json()
    await connectMongoDB();
    await Project.create({ title, link, image, description, technologies })
    return NextResponse.json({ message: 'Project Created' }, { status: 201 })
}

export async function GET() {
    await connectMongoDB();
    const projects = await Project.find()
    return NextResponse.json({ projects })
}

