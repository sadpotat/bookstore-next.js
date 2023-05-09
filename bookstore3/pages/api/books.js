import { connectToDatabase } from "@/api-helpers/utils";
import {
    addBook,
    getAllBooks,
} from "../../api-helpers/controllers/books-controller";

export const config = {
    api: {
        externalResolver: true,
    },
};

export default async function handler(req, res) {
    await connectToDatabase();

    if (req.method === "GET") {
        console.log("CALLING getAllBooks");
        return getAllBooks(req, res);
    } else if (req.method === "POST") {
        console.log("CALLING addBook");
        return addBook(req, res);
    }
    return;
}
