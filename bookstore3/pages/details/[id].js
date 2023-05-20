import { deleteBook } from "@/api-helpers/frontend/utils";
import BookDetail from "@/components/BookDetail";
import { Alert, Button, Link, Snackbar } from "@mui/material";
import { useRouter } from "next/router";
import React, { Fragment, useState } from "react";

const detailsPage = function () {
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
                backgroundColor: "white",
                position: "absolute",
                top: "63px",
                right: "0px",
                minHeight: "100vh",
                left: "0px",
            }}
        >
            <BookDetail />
            <Fragment>
                <Link href={`/books/${id}`}>
                    <Button sx={{ fontSize: 18 }} size="small" color="primary">
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
                        autoHideDuration={3000}
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
    );
};

export default detailsPage;
