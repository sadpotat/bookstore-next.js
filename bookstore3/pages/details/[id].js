import { deleteBook, getBookFromId } from "@/api-helpers/frontend/utils";
import BookDetail from "@/components/BookDetail";
import { Alert, Button, Link, Snackbar } from "@mui/material";
import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";

const DetailsPage = function () {
    // snackbar
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
        router.push("/books");
    };

    const router = useRouter();
    const id = router.query.id;

    const handleDelete = () => {
        deleteBook(id)
            .then(() => {
                setOpen(true);
            })
            .catch((err) => console.log(err));
        // BUG deleteBook is neither resolving nor throwing errors for some reason so:
        console.log("deleted");
        setOpen(true);
    };
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
            <BookDetail />
            <div
                style={{
                    width: "10%",
                    marginRight: "auto",
                    position: "absolute",
                    right: "10%",
                    display: "flex",
                    justifyContent: "space-evenly",
                }}
            >
                <Fragment>
                    <Link href={`/books/${id}`}>
                        <Button
                            sx={{ fontSize: 18 }}
                            size="small"
                            color="primary"
                        >
                            Edit
                        </Button>
                    </Link>

                    <Button
                        onClick={handleDelete}
                        sx={{ fontSize: 18 }}
                        size="small"
                        color="primary"
                    >
                        Delete
                    </Button>
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
                                Deleted Successfully
                            </Alert>
                        </Snackbar>
                    )}
                </Fragment>
            </div>
        </div>
    );
};

export default DetailsPage;
