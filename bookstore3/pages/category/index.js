import sortByTitle, {
    sortByAuthor,
    sortByPrice,
} from "@/api-helpers/frontend/sortingFunctions";
import {
    getAllBooks,
    getBookByCategory,
    getBookFromId,
} from "@/api-helpers/frontend/utils";
import BookList from "@/components/BookList";
import SortBy from "@/components/SortBy";
import {
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export const getStaticProps = async () => {
    const books = await getAllBooks();
    return {
        props: {
            books,
        },
    };
};

function Categories({ books }) {
    const router = useRouter();
    const drawerWidth = "10%";
    const category = [
        "Adventure",
        "Fiction",
        "Mystery",
        "Science Fiction",
        "Young Adult",
    ];
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [bookList, setBookList] = useState(books);
    const [sortChoice, setSortChoice] = useState("Title");
    useEffect(() => {
        let sortedData;
        getBookByCategory(category[selectedIndex])
            .then((data) => {
                if (sortChoice === "Title") sortedData = sortByTitle(data);
                if (sortChoice === "Author") sortedData = sortByAuthor(data);
                if (sortChoice === "Price") sortedData = sortByPrice(data);
                setBookList(sortedData);
            })
            .catch((err) => console.log(err));
    }, [selectedIndex, sortChoice]);
    const getSort = (data) => {
        setSortChoice(data);
    };
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };
    return (
        <div
            style={{
                backgroundColor: "#e0f2f1",
                position: "absolute",
                top: "50px",
                right: "0px",
                left: "10%",
                minHeight: "100vh",
            }}
        >
            <div
                style={{
                    display: "flex",
                    paddingLeft: "75px",
                    paddingTop: "100px",
                }}
            >
                <div style={{ width: "70%" }}>
                    <h1>Products in the {category[selectedIndex]} Genre</h1>
                </div>
                <div style={{ width: "30%", margin: "auto" }}>
                    <SortBy onSubmit={getSort} />
                </div>
            </div>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: drawerWidth,
                        boxSizing: "border-box",
                    },
                }}
            >
                <Toolbar />
                <Divider />

                <List
                    sx={{
                        marginTop: "30%",
                    }}
                >
                    {category.map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton
                                selected={selectedIndex === index}
                                onClick={(event) =>
                                    handleListItemClick(event, index)
                                }
                            >
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <BookList data={bookList} />
        </div>
    );
}
export default Categories;
