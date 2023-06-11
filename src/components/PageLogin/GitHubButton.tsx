import React from 'react';
import {GitHub} from "@mui/icons-material";
import styled from "@emotion/styled";
import {Button, ButtonProps} from "@mui/material";

const GitHubButton = ({children, ...props}: ButtonProps) => {

    const loginWithGitHub = () => {
        const CLIENT_ID = process.env.REACT_APP_GITHUB_CLIENT_ID;
        window.location.assign(`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}`)
    }

    const StyledButton = styled(Button)({
        backgroundColor: "#383838",
        color: "white",
        "&:hover": {
            backgroundColor: "black",
        }
    }) as typeof Button
    return (
        <StyledButton onClick={loginWithGitHub} {...props} startIcon={<GitHub fontSize="large" />}>
            {children}
        </StyledButton>
    );
};

export default GitHubButton;