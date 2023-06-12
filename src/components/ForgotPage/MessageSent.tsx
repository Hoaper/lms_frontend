import React, {useEffect} from 'react';
import {Paper, Typography} from "@mui/material";
import UILink from "../PageLogin/Links";

const MessageSent = () => {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const email = urlParams.get("email");
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Paper elevation={3} sx={{
                p: 4
            }}>
                <Typography align="center" variant="h5">Only last step!</Typography>
                <Typography variant="h6">Link to restore password sent on your email</Typography>
                <Typography
                    variant="h5"
                    align="center"
                    color={"deepskyblue"}
                >
                    {email}
                </Typography>
                <Typography align="center" variant="h6">
                    <UILink to={"/"}>Home</UILink>
                </Typography>
            </Paper>
        </div>
    );
};

export default MessageSent;