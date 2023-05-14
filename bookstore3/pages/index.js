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
    return <BookList data={books} />;
}

export const getStaticProps = async () => {
    const books = await getFeaturedBooks();
    return {
        props: {
            books,
        },
    };
};
