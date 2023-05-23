import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getBookFromId, updateBook } from "@/api-helpers/frontend/utils";
import Form from "./Form";
import { Alert, Snackbar } from "@mui/material";

const Edit = () => {
    // snackbar
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
        router.push(`/details/${id}`);
    };
    const [data, setBook] = useState();
    const router = useRouter();
    const id = router.query.id;
    useEffect(() => {
        getBookFromId(id)
            .then((data) => setBook(data))
            .catch((err) => console.log(err));
    }, [router.query.id]);
    const getFormData = (data) => {
        updateBook(id, data)
            .then((value) => setOpen(true))
            .catch((err) => console.log(err));
        // BUG updateBook is neither resolving nor throwing errors for some reason so:
        console.log("updated");
        setOpen(true);
    };
    return (
        <div>
            {data ? (
                <Form data={data} onSubmit={getFormData} />
            ) : (
                <p>unable to load</p>
            )}
            <Fragment>
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
                            Edited Successfully
                        </Alert>
                    </Snackbar>
                )}
            </Fragment>
        </div>
    );
};

export default Edit;
