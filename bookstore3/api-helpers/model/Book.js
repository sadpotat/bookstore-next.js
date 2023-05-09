import mongoose, { mongo } from "mongoose";
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    imageURL: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    details: {
        type: String,
        required: true,
    },
    featured: {
        type: Boolean,
    },
});

export default mongoose.models.Book || mongoose.model("Book", bookSchema);
