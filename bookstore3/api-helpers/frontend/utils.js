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
