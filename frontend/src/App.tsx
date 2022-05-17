import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Container, Box } from "@mui/material";

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

interface IpostInterface {
    userName: string;
    date: string;
    title: string;
    img: string;
    contents: string;
}

interface IuserInterface {
    name: string;
    follower: string[];
    followed: string[];
    isLogin: boolean;
    profilePic: string;
    posts: IpostInterface[];
}

function App() {
    const [search, setSearch] = useState<string>("");
    const [isLogin, setIsLogin] = useState<boolean>(SampleUser.isLogin);

    useEffect(() => {
        SampleUser.isLogin = isLogin;
    }, [isLogin]);

    return (
        <Router>
            <Header
                search={search}
                setSearch={setSearch}
                isLogin={isLogin}
                setIsLogin={setIsLogin}
            />
            <Box style={{ position: "fixed", top: "55px", width: "100%" }}>
                <Routes>
                    <Route path="/*" element={<Error />} />
                    <Route path="/intro" element={<Intro />} />
                    <Route path="/" element={<Main user={SampleUser} />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/followerlist" element={<FollowerList />} />
                    <Route path="/followlist" element={<FollowList />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/signIn" element={<SignIn />} />
                    <Route path="/signUp" element={<SignUp />} />
                </Routes>
            </Box>
            <Footer />
        </Router>
    );
}

export default App;

const SampleUser: IuserInterface = {
    name: "김용민",
    follower: ["김민수", "박민수", "이진형"],
    followed: ["김민수", "박민수", "이진형"],
    isLogin: true,
    profilePic:
        "https://preview.redd.it/2aoiyozxkn931.jpg?auto=webp&s=8b1060ef8b9a92d02cc785670a14d2890a0ddbf2",
    posts: [],
};
