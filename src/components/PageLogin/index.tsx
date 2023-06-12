import React, {SetStateAction, useState} from 'react';
import {Avatar, Button, Divider, Paper, Stack, TextField, Typography} from "@mui/material";
import UILink from "./Links";
import {lightBlue} from "@mui/material/colors";
import GitHubButton from "./GitHubButton";
import GoogleButton from "./GoogleButton";
import isEmailCorrect from "../../utils/isEmailCorrect";
import isPasswordCorrect from "../../utils/isPasswordCorrect";

const PageLogin = () => {
    document.title = "Login";
    const [isEmailCorrectState, setIsEmailCorrectState] = useState(true);
    const [
        isPasswordCorrectState,
        setIsPasswordCorrectState
    ] = useState(true);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isPasswordCorrectState || !isEmailCorrectState) return;
        let data = new FormData(e.currentTarget);
        const email = data.get("email")
        const password = data.get("password")

        console.log(email, password)
    }

    const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setIsEmailCorrectState(isEmailCorrect(event.currentTarget.value));
    }

    const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setIsPasswordCorrectState(
            isPasswordCorrect(event.currentTarget.value)
        );
    }

    const passwordErrorText = "Password must contain at least 1 uppercase symbol and 1 number and with length 8";

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Paper elevation={3} sx={{
                p: 4
            }}>
                <Typography sx={{mb: 2}} align="center" variant="h6" component="div">AUTHORIZE INTO LMS</Typography>
                <Stack direction={{
                    xs: `column`,
                    md: `row`
                }} spacing={2}>

                    {/* Default login page */}
                    <form onSubmit={handleSubmit}>
                        <Stack direction="column" spacing={2}>
                            <TextField
                                onChange={handleChangeEmail}
                                required
                                error={!isEmailCorrectState}
                                helperText={isEmailCorrectState ? "" : "Incorrect email"}
                                name="email"
                                type="email"
                                label="Email"
                                variant="standard"
                                autoComplete="off"
                            />
                            <TextField
                                onChange={handleChangePassword}
                                required
                                error={!isPasswordCorrectState}
                                helperText={
                                isPasswordCorrectState
                                    ? ""
                                    : passwordErrorText
                            }
                                name="password"
                                type='password'
                                label="Password"
                                variant="standard"
                                autoComplete="off"
                            />

                            <Stack direction="row" spacing={2}>
                                <Button
                                    type={"submit"}
                                    variant="contained"
                                >
                                    Next
                                </Button>
                            </Stack>
                            <Stack direction="row" spacing={2}>
                                <UILink to={"/forgot"}>Forgot password?</UILink>
                            </Stack>
                        </Stack>
                    </form>

                    <Divider orientation="vertical" flexItem>
                        <Avatar sx={{
                            bgcolor: lightBlue[700]
                        }} >OR</Avatar>
                    </Divider>


                    {/*  Login via services  */}
                    <Stack direction="column" spacing={2} sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "left"
                    }}>
                        <GitHubButton>Login with GitHub</GitHubButton>
                        <GoogleButton>Login with Google</GoogleButton>
                    </Stack>
                </Stack>
            </Paper>
        </div>
    );
};

export default PageLogin;