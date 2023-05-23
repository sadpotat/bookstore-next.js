import React, { Fragment, useState } from "react";
import Form from "./Form";
import { sendBook } from "@/api-helpers/frontend/utils";
import { Alert, Snackbar } from "@mui/material";
import { useRouter } from "next/router";

const Add = () => {
    // snackbar
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
        location.reload();
    };

    const getFormData = (data) => {
        sendBook(data)
            .then((value) => setOpen(true))
            .catch((err) => console.log(err));
        // BUG sendBook is throwing errors even though the book is being added:
        console.log("added");
        setOpen(true);
    };
    return (
        <Fragment>
            <Form onSubmit={getFormData} />
            {open && (
                <Snackbar
                    open={open}
                    autoHideDuration={2000}
                    onClose={handleClose}
                >
                    <Alert
                        onClose={handleClose}
                        severity="success"
                        sx={{ width: "100%" }}
                    >
                        Added Successfully
                    </Alert>
                </Snackbar>
            )}
        </Fragment>
    );
};

export default Add;
