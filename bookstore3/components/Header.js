import React, { useState } from "react";
import { AppBar, Box, Tab, Tabs, Toolbar } from "@mui/material";
import BookTwoToneIcon from "@mui/icons-material/BookTwoTone";
import { useRouter } from "next/router";
import { teal } from "@mui/material/colors";

const Header = () => {
    const router = useRouter();
    const [value, setValue] = useState("");
    const tabIndex = ["/", "/category", "/books", "/books/add"];
    const handleChange = (event, value) => {
        setValue(value);
        if (value === 0) {
            router.push("/");
        } else if (value === 1) {
            router.push("/category");
        } else if (value === 2) {
            router.push("/books");
        } else if (value === 3) {
            router.push("/books/add");
        }
    };
    return (
        <AppBar
            position="fixed"
            sx={{
                bgcolor: "#00897b",
                zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
        >
            <Toolbar>
                <BookTwoToneIcon sx={{ fontSize: "40px" }} />
                <Box display="flex" margin={"auto"}>
                    <Tabs
                        onChange={handleChange}
                        value={tabIndex.includes(router.pathname) ? value : NaN}
                        textColor="inherit"
                    >
                        <Tab label="Home" sx={{ select: "#eeeeee" }} />
                        <Tab label="Browse by Categories" />
                        <Tab label="All Books" />
                        <Tab label="Add Book" />
                    </Tabs>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
