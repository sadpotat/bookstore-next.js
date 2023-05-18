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
    const width = home ? "100%" : "90%";
    const height = home ? "100%" : "90%";
    const typoFontSize = home ? 18 : 16;
    const typoVariant = home ? "h5" : "h6";
    title =
        title.split(" ").length <= 5
            ? title
            : title.split(" ").slice(0, 5).join(" ");
    author =
        author.split(" ").length <= 3
            ? author
            : author.split(" ")[0] + " " + author.split(" ").slice(-1);
    return (
        <Card
            onClick={() => {
                router.push(`/books/${id}`);
            }}
            sx={{
                width: width,
                height: height,
                borderRadius: 3,
                ":hover": {
                    boxShadow: "5px 5px 10px #bbbbbb",
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
            <CardContent sx={{ width: "100%", height: "20%" }}>
                <Typography
                    variant={typoVariant}
                    component="div"
                    fontSize={typoFontSize}
                >
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {author}
                </Typography>
            </CardContent>
            {home ? (
                <CardActions>
                    <Link href={`/books/${id}`}>
                        <Button
                            sx={{ fontSize: 18 }}
                            size="small"
                            color="primary"
                        >
                            View details
                        </Button>
                    </Link>
                </CardActions>
            ) : (
                <></>
            )}
        </Card>
    );
};

export default BookItem;
