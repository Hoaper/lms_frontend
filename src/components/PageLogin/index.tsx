import React from 'react';
import {Avatar, Button, Divider, Paper, Stack, TextField, Typography} from "@mui/material";
import UILink from "./Links";
import {lightBlue} from "@mui/material/colors";
import GitHubButton from "./GitHubButton";
import GoogleButton from "./GoogleButton";

const PageLogin = () => {
    document.title = "Login";
    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
    }
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
                            <TextField type="emaail" label="Email" variant="standard" autoComplete="off"/>
                            <TextField type='password' label="Password" variant="standard" autoComplete="off"/>

                            <Stack direction="row" spacing={2}>
                                <Button type={"submit"} variant="contained">Sign up</Button>
                                <Button type={"submit"} variant="contained">Login</Button>
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