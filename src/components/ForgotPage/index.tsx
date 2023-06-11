import React, {SyntheticEvent} from 'react';
import {Paper, TextField, Typography, Stack, Button} from "@mui/material";

const Index = () => {
    const handleSubmit = (e: SyntheticEvent) => {
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
                <Typography sx={{mb: 2}} align="center" variant="h6" component="div">FORGOT YOUR PASSWORD?</Typography>
                <Stack onSubmit={handleSubmit} component={"form"} spacing={2} direction={{
                    xs: "column",
                    sm: "row"
                }}>
                    <TextField variant={"standard"} label={"Email"} type={"email"} autoComplete={"on"} />
                    <Button type={"submit"} color={"primary"} variant="contained">
                        RESTORE
                    </Button>
                </Stack>
            </Paper>
        </div>
    );
};

export default Index;