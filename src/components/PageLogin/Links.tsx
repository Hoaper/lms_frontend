import React, {ReactNode} from 'react';
import {Link as RouterLink} from "react-router-dom";
import styled from "@emotion/styled";

const UILink = ({to, children}: {to: string, children: ReactNode}) => {
    const Link = styled(RouterLink)({
        "&:visited": {
            color: "#0087ca"
        },
        "&::after": {
            content: '""',
            position: "absolute",
            width: "100%",
            transform: "scaleX(0)",
            height: "2px",
            bottom: 0,
            left: 0,
            backgroundColor: "#0087ca",
            transformOrigin: "bottom right",
            transition: "transform 0.25s ease-out",
        },
        "&:hover::after": {
            transform: "scaleX(1)",
            transformOrigin: "bottom left",
        },
        "&:hover": {
            color: "#0087ca"
        },
        display: "inline-block",
        position: "relative",
        color: "#0087ca",
        textDecoration: "none",
        fontSize: "18px",
        verticalAlign: "center",
    })
    return (
        <Link to={to}>{children}</Link>
    );
};

export default UILink;