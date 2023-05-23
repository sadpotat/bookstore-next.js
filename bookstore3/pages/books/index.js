import { getAllBooks } from "@/api-helpers/frontend/utils";
import BookList from "@/components/BookList";

function BooksHome({ books }) {
    const sortByName = (books) => {
        let sorted = [...books].sort((a, b) => {
            let fa = a.title.toLowerCase(),
                fb = b.title.toLowerCase();
            return fa < fb ? -1 : 1;
        });
        return sorted;
    };
    return (
        <div
            style={{
                backgroundColor: "#e0f2f1",
                // width: "100%",
                // height: "100%",
                // position: "absolute",
                // top: "5%",
                // left: "10%",
                // right: "10%",
            }}
        >
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
