import { getAllBooks } from "@/api-helpers/frontend/utils";
import BookList from "@/components/BookList";

function BooksHome({ books }) {
    return <BookList data={books} />;
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
