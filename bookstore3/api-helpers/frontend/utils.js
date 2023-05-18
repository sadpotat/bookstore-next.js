import axios from "axios";
export const getAllBooks = async () => {
    const res = await axios.get("http://localhost:3000/api/books");
    if (res.status !== 200) {
        return new Error("Internal Server Error");
    }
    const data = await res.data?.books;
    return data;
};

export const getFeaturedBooks = async () => {
    const books = await getAllBooks();
    if (books.length === 0) {
        return [];
    }

    const featuredBooks = books.filter((book) => book.featured === true);
    return featuredBooks;
};

// Categories so I don't forget them
// Adventure
// Fiction
// Mystery
// Science Fiction
// Young Adult
// Romance

export const getBookByCategory = async (category) => {
    const books = await getAllBooks();
    if (books.length === 0) {
        return [];
    }

    const booksInCategory = books.filter((book) => book.category === category);
    return booksInCategory;
};

export const sendBook = async (book) => {
    const res = await axios.post("http://localhost:3000/api/books", {
        title: book.title,
        author: book.author,
        imageURL: book.imageURL,
        category: book.category,
        price: book.price,
        details: book.details,
        price: Number(book.price),
        featured: Boolean(book.featured),
    });
    if (res.status !== 201) {
        return new Error("Database Request Rejected");
    }
    const data = res.book;
    return data;
};

export const getBookFromId = async (id) => {
    const res = await axios.get(`http://localhost:3000/api/book/${id}`);
    if (res.status !== 200) {
        console.log("fetching failed");
        return new Error("Unable to Fetch Book from ID");
    }
    const resData = await res.data;
    return resData.book;
};
