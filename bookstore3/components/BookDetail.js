import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getBookFromId } from "@/api-helpers/frontend/utils";
import Form from "./Form";

const BookDetail = () => {
    const [data, setBook] = useState();
    const router = useRouter();
    console.log(router.query.id);
    const id = router.query.id;
    useEffect(() => {
        getBookFromId(id)
            .then((data) => setBook(data))
            .catch((err) => console.log(err));
    }, [router.query.id]);
    console.log(data);
    const getFormData = (data) => {
        console.log("data", data);
    };
    console.log("bool", data);
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
