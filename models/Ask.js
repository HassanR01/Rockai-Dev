import mongoose, { Schema } from "mongoose";

const askScehem = new Schema({
    name: String,
    email: String,
    phone: String,
    reason: String,
    message: String,
    pProject: String
})

const Ask = mongoose.models.Ask || mongoose.model('Ask', askScehem)

export default Ask;