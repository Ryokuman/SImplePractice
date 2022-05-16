import React, { useRef, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Container } from "@mui/material";

import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Error from "./Pages/Error";
import Blog from "./Pages/Blog";
import FollowerList from "./Pages/FollowerList";
import FollowList from "./Pages/FollowList";
import Main from "./Pages/Main";
import Profile from "./Pages/Profile";
import Search from "./Pages/Search";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Intro from "./Pages/Intro";

function App() {
    const searchRef = useRef('');

    return (
        <Router>
            <Header searchRef={searchRef} />
            <Container style={{ position: "fixed", top: "40px" }}>
                <Routes>
                    <Route path="/*" element={<Error />} />
                    <Route path="/intro" element={<Intro />} />
                    <Route path="/" element={<Main />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/followerlist" element={<FollowerList />} />
                    <Route path="/followlist" element={<FollowList />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/signIn" element={<SignIn />} />
                    <Route path="/signUp" element={<SignUp />} />
                </Routes>
            </Container>
            <Footer />
        </Router>
    );
}

export default App;
