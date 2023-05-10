import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import BookTwoToneIcon from "@mui/icons-material/BookTwoTone";

const Header = () => {
    return (
        <AppBar>
            <Toolbar>
                <BookTwoToneIcon />
            </Toolbar>
        </AppBar>
    );
};

export default Header;
