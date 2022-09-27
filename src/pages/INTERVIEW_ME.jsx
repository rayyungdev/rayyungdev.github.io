import React from "react";
import Layout from "../components/Layout"
import Header from "../components/header";
import {Helmet} from 'react-helmet';

const INTERVIEW_ME = () => {

    return(
    <Layout >
        <Header location = 'Interview Bot' />
            <div className = 'container bg-white'>
                <div className="container chat_embedding pt-5 mb-2 py-2">
                    <div className="chat_widget" userid = "52caf274-5756-41f4-96f5-ec7a4be14cf8"></div>
                    <Helmet>
                    <link href="https://rayyungdev.github.io/react-chat/index.css" rel="stylesheet" />
                    <script async src="https://rayyungdev.github.io/react-chat/index.js"></script>
                    </Helmet>
                </div>
            </div>
    </Layout>
    )
}

export default INTERVIEW_ME;