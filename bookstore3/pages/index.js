import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import {
    getBookByCategory,
    getFeaturedBooks,
} from "@/api-helpers/frontend/utils";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ books }) {
    console.log(books);
    return <div>Home</div>;
}

export const getStaticProps = async () => {
    const books = await getFeaturedBooks();
    return {
        props: {
            books,
        },
    };
};
