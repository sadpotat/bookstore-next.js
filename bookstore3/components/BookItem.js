import {
    Button,
    Card,
    CardActions,
    CardContent,
    Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";

const BookItem = ({ title, id, author, imageURL, featured }) => {
    return (
        <Card
            sx={{
                width: "200px",
                height: "100%",
                borderRadius: 3,
                ":hover": {
                    boxShadow: "5px 5px 10px #b2dfdb",
                },
            }}
        >
            <div style={{ width: "100%", height: "60%", position: "relative" }}>
                {featured && (
                    <div
                        style={{
                            position: "absolute",
                            top: "10px",
                            left: "10px",
                            background: "#00bfa5",
                            color: "white",
                            fontSize: 18,
                            fontFamily: "arial",
                            padding: "2px",
                        }}
                    >
                        Best Seller
                    </div>
                )}
                <img src={imageURL} alt={title} width="100%" height="100%" />
            </div>
            <CardContent sx={{ width: "100%", height: "30%" }}>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {author}
                </Typography>
            </CardContent>
            <CardActions>
                <Link href={`/books/${id}`}>
                    <Button size="small" color="primary">
                        View details
                    </Button>
                </Link>
            </CardActions>
        </Card>
    );
};

export default BookItem;
