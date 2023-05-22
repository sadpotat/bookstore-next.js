import { getAllBooks } from "@/api-helpers/frontend/utils";
import BookList from "@/components/BookList";

function BooksHome({ books }) {
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
            <BookList data={books} />
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
