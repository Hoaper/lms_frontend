import React, {Suspense} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {Routes} from "react-router";
import PageLogin from "components/PageLogin";
import ForgotPage from "../components/ForgotPage";
import GitHubLoginPage from "../components/GitHubLoginPage";
import MessageSent from "../components/ForgotPage/MessageSent";

const Router = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<div />}>
                <Routes>
                    <Route path={"/login"} element={<PageLogin />} />
                    <Route path={"/forgot"} element={<ForgotPage />}/>
                    <Route path={"/forgot_sent"} element={<MessageSent />}/>
                    <Route path={"/github_login_success"} element={<GitHubLoginPage />}/>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default Router;