const { MongoKerberosError } = require("mongodb");
import mongoose from "mongoose";

export const connectToDatabase = async () => {
    console.log("ready state", mongoose.connection.readyState);
    // returns without calling mongoose.connect() if the
    //connection status is 1: connected or 2: connecting
    if (
        mongoose.connection.readyState === 1 ||
        mongoose.connection.readyState === 2
    )
        return;

    await mongoose
        .connect(
            "mongodb+srv://sadiatasneem16:sYQeTn1FMcyOZBFZ@cluster0.etwhyuv.mongodb.net/?retryWrites=true&w=majority?connectTimeoutMS=300000"
        )
        .then(() => console.log("Connected to mongoDB"))
        .catch((err) => console.log(err));
    console.log("ready state", mongoose.connection.readyState);
};
