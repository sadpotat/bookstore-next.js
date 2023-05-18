import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getBookFromId, updateBook } from "@/api-helpers/frontend/utils";
import Form from "./Form";

const BookDetail = () => {
    const [data, setBook] = useState();
    const router = useRouter();
    const id = router.query.id;
    useEffect(() => {
        getBookFromId(id)
            .then((data) => setBook(data))
            .catch((err) => console.log(err));
    }, [router.query.id]);
    const getFormData = (data) => {
        updateBook(id, data);
    };
    console.log("book", data);
    return (
        <div>
            {data ? (
                <Form data={data} onSubmit={getFormData} />
            ) : (
                <p>unable to load</p>
            )}
        </div>
    );
};

export default BookDetail;
