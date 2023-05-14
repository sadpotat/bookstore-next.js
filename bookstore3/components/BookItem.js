import {
    Button,
    Card,
    CardActions,
    CardContent,
    Typography,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const BookItem = ({ title, id, author, imageURL, featured, home }) => {
    const router = useRouter();
    return (
        <Card
            onClick={() => {
                router.push(`/books/${id}`);
            }}
            sx={{
                width: "100%",
                height: "100%",
                borderRadius: 3,
                ":hover": {
                    boxShadow: "5px 5px 10px #bbbbbb",
                },
            }}
        >
            <div style={{ width: "100%", height: "70%", position: "relative" }}>
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
            <CardContent sx={{ width: "100%", height: "20%" }}>
                <Typography variant="h5" component="div" fontSize={18}>
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
