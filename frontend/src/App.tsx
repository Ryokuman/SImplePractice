import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Box } from "@mui/material";

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
    postNum: number;
    nickName: string;
    title: string;
    contents: string;
    img: string;
    date: Date;
}

interface IuserInterface {
    nickName: string;
    follower: string[];
    follow: string[];
    name: string;
    id: string;
    password: string;
    posts: number[];
    isLogin: boolean;
    profilePic: string;
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

const SmaplePost1: IpostInterface = {
    postNum: 1,
    nickName: "@ryokuman",
    title: "1번 포스팅",
    contents: "안녕하세요",
    img: "https://blog.kakaocdn.net/dn/uVzcY/btrs8RnnubZ/hJVo53gyagmVG5XtkCvMB1/img.png",
    date: new Date(2022, 5, 17),
};

const SmaplePost2: IpostInterface = {
    postNum: 2,
    nickName: "@ryokuman",
    title: "2번 포스팅",
    contents: "안녕하세요",
    img: "https://www.sportager.net/files/attach/images/7370560/750/373/007/Dynamax%20System%20for%20AWD.jpg",
    date: new Date(2022, 5, 17),
};

const SmaplePost3: IpostInterface = {
    postNum: 3,
    nickName: "@ryokuman",
    title: "3번 포스팅",
    contents: "안녕하세요",
    img: "https://pbs.twimg.com/profile_images/1525826647605518337/yOSH43wU_400x400.png",
    date: new Date(2022, 5, 17),
};

const SampleUser: IuserInterface = {
    name: "김용민",
    id: "ryokuman",
    password: "1q2w3e4r",
    nickName: "@ryokuman",
    follower: ["김민수", "박민수", "이진형"],
    follow: ["김민수", "박민수", "이진형"],
    isLogin: true,
    profilePic:
        "https://preview.redd.it/2aoiyozxkn931.jpg?auto=webp&s=8b1060ef8b9a92d02cc785670a14d2890a0ddbf2",
    posts: [1, 2, 3],
};
