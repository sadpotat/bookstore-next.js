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

export default function Home({ books }) {
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
                Last Month's Best Sellers in Every Category
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

export const getStaticProps = async () => {
    const books = await getFeaturedBooks();
    return {
        props: {
            books,
        },
    };
};
