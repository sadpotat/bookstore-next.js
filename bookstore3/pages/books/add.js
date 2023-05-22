import React from "react";
import Add from "@/components/Add";

function AddBook() {
    return (
        <div
            style={{
                backgroundColor: "#e0f2f1",
                minHeight: "100vh",
                position: "absolute",
                top: "50px",
                right: "0px",
                left: "0px",
            }}
        >
            <Add />
        </div>
    );
}

export default AddBook;
