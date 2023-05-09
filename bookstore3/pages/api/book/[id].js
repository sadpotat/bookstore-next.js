import {
    deleteBook,
    getBookFromId,
    updateBook,
} from "@/api-helpers/controllers/books-controller";
import { connectToDatabase } from "@/api-helpers/utils";

export const config = {
    api: {
        externalResolver: true,
    },
};

export default async function handler(req, res) {
    await connectToDatabase();
    if (req.method === "PUT") {
        return updateBook(req, res);
    } else if (req.method === "DELETE") {
        return deleteBook(req, res);
    } else if (req.method === "GET") {
        return getBookFromId(req, res);
    }
}
