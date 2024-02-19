import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema({
    title: String,
    image: String,
    link: String,
    description: String,
    category: String,
}, { timestamps: true })

const Project = mongoose.models.Project || mongoose.model('Project', projectSchema)

export default Project;