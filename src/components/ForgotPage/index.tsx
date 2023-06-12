import React, {FormEvent, useState} from 'react';
import {Paper, TextField, Typography, Stack, Button} from "@mui/material";
import isEmailCorrect from "../../utils/isEmailCorrect";
import {useNavigate} from "react-router";

const Index = () => {

    const navigate = useNavigate();
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isEmailCorrectState) return;

        let data = new FormData(e.currentTarget);
        const email = data.get("email");

    //     Взаимодействие с API тут

        navigate("/forgot_sent?email=" + email)

    }

    const [isEmailCorrectState, setIsEmailCorrectState] = useState(true);

    const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setIsEmailCorrectState(isEmailCorrect(event.currentTarget.value));
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
                <Typography sx={{mb: 2}} align="center" variant="h6" component="div">FORGOT YOUR PASSWORD?</Typography>
                <Stack onSubmit={handleSubmit} component={"form"} spacing={2} direction={{
                    xs: "column",
                    sm: "row"
                }}>
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
                    <Button type={"submit"} color={"primary"} variant="contained">
                        RESTORE
                    </Button>
                </Stack>
            </Paper>
        </div>
    );
};

export default Index;