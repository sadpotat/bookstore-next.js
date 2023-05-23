import React from "react";
import { Grid } from "@mui/material";
import BookItem from "./BookItem";

const BookList = ({ data, home }) => {
    return (
        <Grid
            paddingLeft={10}
            paddingRight={10}
            paddingTop={5}
            spacing={2}
            container
        >
            {data.map((book) => (
                <Grid
                    xs={6}
                    sm={4}
                    md={3}
                    lg={2}
                    height={home ? "500px" : "400px"}
                    width={home ? "250px" : "200px"}
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
                        price={book.price}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default BookList;
