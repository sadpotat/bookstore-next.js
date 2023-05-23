import { getBookFromId } from "@/api-helpers/frontend/utils";
import BookList from "@/components/BookList";
import {
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function Categories({ books }) {
    const router = useRouter();
    const id = router.query.id;
    const drawerWidth = 240;
    const category = [
        "Adventure",
        "Fiction",
        "Mystery",
        "Science Fiction",
        "Young Adult",
    ];
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };
    return (
        <div
            style={{
                backgroundColor: "#e0f2f1",
                position: "absolute",
                top: "63px",
                right: "0px",
                bottom: "0px",
                left: "0px",
            }}
        >
            <h1 style={{ color: "black" }}>Book categories</h1>
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
                <List>
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
            {/* <BookList data={sortByName(books)} /> */}
        </div>
    );
}
export default Categories;
