import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getBookFromId } from "@/api-helpers/frontend/utils";
import Form from "./Form";
import { updateBook } from "@/api-helpers/controllers/books-controller";

const BookDetail = () => {
    const [book, setBook] = useState();
    const router = useRouter();
    console.log(router.query);
    const id = router.query.id;
    // useEffect will rerun the component  everytime the query changes
    useEffect(() => {
        getBookFromId(id)
            .then((data) => setBook(data))
            .catch((err) => console.log(err));
    }, [router.query.id]);
    console.log(book);

    const getFormData = (data) => {
        updateBook(id, data);
    };

    return (
        <div>
            {book ? (
                <Form data={book} onSubmit={getFormData} />
            ) : (
                <p>Loading details</p>
            )}
        </div>
    );
};

export default BookDetail;
