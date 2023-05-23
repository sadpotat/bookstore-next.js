import { getBookFromId } from "@/api-helpers/frontend/utils";
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
import React, { useEffect } from "react";

function Categories() {
    const router = useRouter();
    const id = router.query.id;
    const drawerWidth = 240;
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
                    {["Inbox", "Starred", "Send email", "Drafts"].map(
                        (text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        )
                    )}
                </List>
                <Divider />
                <List>
                    {["All mail", "Trash", "Spam"].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    );
}
export default Categories;
