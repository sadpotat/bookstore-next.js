const { MongoKerberosError } = require("mongodb");
import mongoose from "mongoose";

export const connectToDatabase = async () => {
    console.log(mongoose.connection.base.connections.length);
    // if (mongoose.connection.base.connections.length !== 0) {
    //     return;
    // }
    await mongoose
        .connect(
            "mongodb+srv://sadiatasneem16:sYQeTn1FMcyOZBFZ@cluster0.etwhyuv.mongodb.net/?retryWrites=true&w=majority"
        )
        .then(() => console.log("Connected to mongoDB"))
        .catch((err) => console.log(err));
    console.log(mongoose.connection.base.connections.length);
};
