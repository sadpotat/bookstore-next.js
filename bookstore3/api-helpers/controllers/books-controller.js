import Book from "../model/Book";

export const config = {
    api: {
        externalResolver: true,
    },
};

export const getAllBooks = async (req, res) => {
    let books;

    try {
        console.log("FINDING BOOKS");
        books = await Book.find();
    } catch (err) {
        console.log("ERROR FINDING BOOKS");
        // return new Error(err);
        return res.status(500).json({ message: "failed to find books" });
    }

    if (!books) {
        return res.status(500).json({ message: "Internal Server Error" });
    }

    if (books.length === 0) {
        return res.status(404).json({ message: "No books found" });
    }
    return res.status(200).json({ books });
};

export const addBook = async (req, res) => {
    const { title, author, price, imageURL, category, details, featured } =
        req.body;
    if (
        !title &&
        title.trim() === "" &&
        !author &&
        author.trim() === "" &&
        !price &&
        price.trim() === "" &&
        !imageURL &&
        imageURL.trim() === "" &&
        !category &&
        category.trim() === "" &&
        !details &&
        details.trim() === ""
    ) {
        return res.status(422).json({ message: "Invalid Inputs" });
    }

    let book;
    try {
        book = new Book({
            title,
            author,
            price,
            imageURL,
            category,
            details,
            featured,
        });
        book = await book.save();
        console.log("BOOK SAVED");
    } catch (err) {
        console.log("ERROR SAVING BOOK");
        // return new Error(err);
        return res.status(500).json({ message: "failed to save book" });
    }

    if (!book) {
        console.log("NO BOOK");
        return res.status(500).json({ message: "Internal Server Error" });
    }

    console.log("RETURNING BOOK");
    return res.status(201).json({ book });
};

export const updateBook = async (req, res) => {
    const id = req.query.id;
    console.log(id);
    const { title, author, price, imageURL, category, details, featured } =
        req.body;

    if (
        !title &&
        title.trim() === "" &&
        !author &&
        author.trim() === "" &&
        !price &&
        price.trim() === "" &&
        !imageURL &&
        imageURL.trim() === "" &&
        !category &&
        category.trim() === "" &&
        !details &&
        details.trim() === ""
    ) {
        return res.status(422).json({ message: "Invalid Inputs" });
    }

    let book;
    try {
        book = await Book.findByIdAndUpdate(id, {
            title,
            author,
            price,
            imageURL,
            category,
            details,
            featured,
        });
    } catch (err) {
        // return console.log(err);
        return res
            .status(500)
            .json({ message: "failed to find by id and update" });
    }

    if (!book) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
    return res.status(200).json({ message: "Successfully Updated" });
};

export const deleteBook = async (req, res) => {
    const id = req.query.id;

    let book;
    try {
        book = await Book.findByIdAndRemove(id);
    } catch {
        return new Error(err);
    }

    if (!book) {
        return res.status(500).json({ message: "Unable to delete book" });
    }

    return res.status(200).json({ message: "Successfully deleted" });
};

export const getBookFromId = async (req, res) => {
    const id = req.query.id;

    let book;

    try {
        console.log("LOOKING FOR BOOK BY ID");
        book = await Book.findById(id);
    } catch (err) {
        console.log("ERROR IN LOOKING FOR BOOK BY ID TRY BLOCK");
        // console.log(err);
        // return new Error(err);
        return res.status(500).json({ message: "failed to find by id" });
    }

    if (!book) {
        return res
            .status(404)
            .json({ message: "No book by this ID was found" });
    }

    return res.status(200).json({ book });
};
