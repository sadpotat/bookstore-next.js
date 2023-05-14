import React from "react";
import { Grid } from "@mui/material";
import BookItem from "./BookItem";

const BookList = ({ data, home }) => {
    console.log(data);
    return (
        <div>
            <Grid padding={1} spacing={2} container>
                {data.map((book) => (
                    <Grid
                        xs={6}
                        sm={4}
                        md={3}
                        lg={2}
                        height={home ? "600px" : "400px"}
                        width={"100%"}
                        item
                        key={book._id}
                    >
                        <BookItem
                            home={home}
                            title={book.title}
                            author={book.author}
                            id={book._id}
                            imageURL={book.imageURL}
                            featured={book.featured}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default BookList;
