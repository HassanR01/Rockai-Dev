import mongoose, { Schema } from "mongoose"

const orderSchema = new Schema({
    name: String,
    email: String,
    phoneNum: Number,
    bName: String,
    service: String,
    details: String,
    exLink: String,
    cDate: String,
    hunous: String,
}, { timestamps: true })

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema)

export default Order;