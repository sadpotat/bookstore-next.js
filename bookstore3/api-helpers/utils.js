const { MongoKerberosError } = require("mongodb");
import mongoose from "mongoose";

// // loading credentials
// import fsPromises from "fs/promises";
// import path from "path";
// export async function getCredentials() {
//     const filePath = path.join(process.cwd(), "api-helpers/credentials.json");
//     const jsonData = await fsPromises.readFile(filePath);
//     const credentials = JSON.parse(jsonData);
//     return credentials;
// }

export const connectToDatabase = async () => {
    // const credentials = await getCredentials();

    // returns without calling mongoose.connect() if the
    //connection status is 1: connected or 2: connecting
    console.log("ready state before calling", mongoose.connection.readyState);
    if (
        mongoose.connection.readyState === 1 ||
        mongoose.connection.readyState === 2
    )
        return;

    await mongoose
        .connect(
            `mongodb+srv://bookstoreNextjsViewer:FtkSiKtUst4IkqGb@cluster0.etwhyuv.mongodb.net/?retryWrites=true&w=majority?connectTimeoutMS=300000`
        )
        .then(() => console.log("Connected to mongoDB"))
        .catch((err) => console.log(err));
    console.log("ready state", mongoose.connection.readyState);
};
