import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import {
    getBookByCategory,
    getFeaturedBooks,
} from "@/api-helpers/frontend/utils";
import BookList from "@/components/BookList";

const inter = Inter({ subsets: ["latin"] });

function Home({ books }) {
    return (
        <div
            style={{
                backgroundColor: "#e0f2f1",
                position: "absolute",
                top: "63px",
                right: "0px",
                minHeight: "100vh",
                left: "0px",
            }}
        >
            <h1
                style={{
                    margin: "75px",
                    marginBottom: 0,
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                Last Month&apos;s Best Sellers in Every Category
            </h1>
            <div
                style={{
                    marginTop: 0,
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <BookList home={true} data={books} />
            </div>
        </div>
    );
}

export default Home;
// for development only:
// getStaticProps is only clled once when the application in built, will not work in production
// also in production, cannot call the application's api inside the application, the api needs to be hosted on a different server
// because the api routes won't be available during build time
// export const getStaticProps = async () => {
//     const books = await getFeaturedBooks();
//     return {
//         props: {
//             books,
//         },
//     };
// };
export const getServerSideProps = async () => {
    const books = await getFeaturedBooks();
    return {
        props: {
            books,
        },
    };
};
