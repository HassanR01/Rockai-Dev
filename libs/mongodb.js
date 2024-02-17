import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MongoDB_URI);
        console.log('Connected To MongoDB.');
    } catch (error) {
        console.log(error);
    }
}

export default connectMongoDB;