import React, {useEffect} from 'react';
import {redirect} from "react-router-dom";
import axios from "axios";

const Index = () => {

    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const codeParam = urlParams.get("code");
        if (!codeParam) redirect('/login')
        axios
            .get(`http://localhost:8000/getGitHubUserInfo?code=${codeParam}`)
            .then((res) => {
                console.log(res.data);
            })
    })

    return (
        <div>

        </div>
    );
};

export default Index;