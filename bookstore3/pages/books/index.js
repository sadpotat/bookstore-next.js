import sortByName from "@/api-helpers/frontend/sortingFunctions";
import { getAllBooks } from "@/api-helpers/frontend/utils";
import BookList from "@/components/BookList";

function BooksHome({ books }) {
    // const sortByName = (books) => {
    //     let sorted = [...books].sort((a, b) => {
    //         let fa = a.title.toLowerCase(),
    //             fb = b.title.toLowerCase();
    //         return fa < fb ? -1 : 1;
    //     });
    //     return sorted;
    // };
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
            <h1
                style={{
                    marginLeft: "75px",
                    marginTop: "75px",
                    fontSize: "40px",
                }}
            >
                Our Catalog
            </h1>
            <BookList data={sortByName(books)} />
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
