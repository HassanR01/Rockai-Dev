import connectMongoDB from "@/libs/mongodb";
import Project from "@/models/projects";
import { NextResponse } from "next/server";



export async function PUT(req, { params }) {
    const { id } = params;
    const { newtitle: title, newlink: link, newimage: image, newdescription: description, newtechnologies: technologies } = await req.json()
    await connectMongoDB();
    await Project.findByIdAndUpdate(id, { title, link, image, description, technologies })
    return NextResponse.json({ message: 'Project Updated' }, { status: 200 })
}

export async function GET(req, { params }) {
    const { id } = params;
    await connectMongoDB();
    const project = await Project.findOne({ _id: id })
    return NextResponse.json({ project }, { status: 200 })
}


export async function DELETE(req, { params }) {
    const { id } = params;
    await connectMongoDB()
    await Project.findByIdAndDelete(id)
    return NextResponse.json({ message: 'Project Deleted' }, { status: 200 })
}
