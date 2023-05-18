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
                backgroundColor: "white",
                height: "100%",
                minHeight: "100vh",
                position: "absolute",
                top: "63px",
                right: "0px",
                left: "0px",
            }}
        >
            <BookList home={true} data={books} />
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
