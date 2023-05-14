import React from "react";
import { Grid } from "@mui/material";
import BookItem from "./BookItem";

const BookList = ({ data }) => {
    console.log(data);
    return (
        <div>
            <Grid container>
                {data.map((book) => (
                    <Grid item key={book._id}>
                        <BookItem
                            title={book.title}
                            author={book.author}
                            id={book._id}
                            imageURL={book.imageURL}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default BookList;
