import BookDetail from "@/components/BookDetail";
import { Button, Link } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

const detailsPage = function () {
    const router = useRouter();
    const id = router.query.id;
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
            <Link href={`/books/${id}`}>
                <Button sx={{ fontSize: 18 }} size="small" color="primary">
                    Edit
                </Button>
            </Link>
            <Link href={`/books/${id}`}>
                <Button sx={{ fontSize: 18 }} size="small" color="primary">
                    Delete
                </Button>
            </Link>
        </div>
    );
};

export default detailsPage;
