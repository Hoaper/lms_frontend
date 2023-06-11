import React from 'react';
import Router from "./routes";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {GoogleOAuthProvider} from "@react-oauth/google";

const theme = createTheme({

})

const App = () => {
    return (
        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || "none"}>
            <ThemeProvider theme={theme}>
                <Router />
            </ThemeProvider>
        </GoogleOAuthProvider>
);
};

export default App;