import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";
import React from "react";

const BookItem = ({ title, id, author, imageURL }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <img src={imageURL} alt={title} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {author}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">View details</Button>
            </CardActions>
        </Card>
    );
};

export default BookItem;
