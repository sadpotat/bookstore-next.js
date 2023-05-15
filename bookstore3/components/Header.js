import React, { useState } from "react";
import { AppBar, Box, Tab, Tabs, Toolbar } from "@mui/material";
import BookTwoToneIcon from "@mui/icons-material/BookTwoTone";
import { useRouter } from "next/router";
import { teal } from "@mui/material/colors";

const Header = () => {
    const router = useRouter();
    const [value, setValue] = useState("");
    const tabIndex = ["/", "/books"];
    const handleChange = (event, value) => {
        setValue(value);
        if (value === 0) {
            router.push("/");
        } else if (value === 2) {
            router.push("/books");
        }
    };
    return (
        <AppBar
            position="sticky"
            sx={{
                bgcolor: "#00897b",
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
                    </Tabs>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
