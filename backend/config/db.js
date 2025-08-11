import mongoose from "mongoose";


const databaseName = "ecom" ; 

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${databaseName}`)
        console.log(`MongoDB Connected: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log( `Mongodb connection failed ! Reason : ${error}` )
        process.exit(1)
    }
}

export default connectDB ;