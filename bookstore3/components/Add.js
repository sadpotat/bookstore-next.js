import React from "react";
import Form from "./Form";
import { sendBook } from "@/api-helpers/frontend/utils";

const Add = () => {
    const getFormData = (data) => {
        sendBook(data)
            .then((value) => console.log(value))
            .catch((err) => console.log(err));
    };
    return <Form onSubmit={getFormData} />;
};

export default Add;
