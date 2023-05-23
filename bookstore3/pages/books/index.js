import sortByTitle, {
    sortByAuthor,
    sortByPrice,
} from "@/api-helpers/frontend/sortingFunctions";
import sortByName from "@/api-helpers/frontend/sortingFunctions";
import { getAllBooks, getBookByCategory } from "@/api-helpers/frontend/utils";
import BookList from "@/components/BookList";
import SortBy from "@/components/SortBy";
import { useEffect, useState } from "react";

function BooksHome({ books }) {
    const [booklist, setBookList] = useState(books);
    const [sortChoice, setSortChoice] = useState("Title");
    useEffect(() => {
        let sortedData;
        if (sortChoice === "Title") sortedData = sortByTitle(books);
        if (sortChoice === "Author") sortedData = sortByAuthor(books);
        if (sortChoice === "Price") sortedData = sortByPrice(books);
        setBookList(sortedData);
    }, [sortChoice]);
    const getSort = (data) => {
        setSortChoice(data);
    };

    return (
        <div
            style={{
                backgroundColor: "#e0f2f1",
                backgroundColor: "#e0f2f1",
                minHeight: "100vh",
                position: "absolute",
                top: "63px",
                right: "0px",
                left: "0px",
            }}
        >
            <div
                style={{
                    display: "flex",
                    marginLeft: "75px",
                    marginRight: "125px",
                    marginTop: "75px",
                }}
            >
                <div style={{ width: "70%" }}>
                    <h1>Our Catalog</h1>
                </div>
                <div
                    style={{
                        width: "30%",
                        margin: "auto",
                        display: "flex",
                        justifyContent: "end",
                    }}
                >
                    <SortBy onSubmit={getSort} />
                </div>
            </div>
            <BookList data={booklist} />
        </div>
    );
}
export default BooksHome;

export const getStaticProps = async () => {
    const books = await getAllBooks();
    return {
        props: {
            books,
        },
    };
};
