import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Box } from "@mui/material";

import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Error from "./Pages/Error";
import FollowFollower from "./Pages/FollowFollower";
import Main from "./Pages/Main";
import Profile from "./Pages/Profile";
import Search from "./Pages/Search";
import Notification from "./Pages/Norification";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Intro from "./Pages/Intro";

declare global {
    interface IpostInterface {
        postNum: number;
        id: string;
        title: string;
        contents: string;
        img: string;
        date: Date;
        liked: string[];
        comments: number[];
    }

    interface IuserInterface {
        follower: string[];
        follow: string[];
        name: string;
        id: string;
        password: string;
        posts: number[];
        isLogin: boolean;
        profilePic: string;
        likedPosts: number[];
        likedComments: number[];
    }
}

function App() {
    const [user, setUser] = useState<IuserInterface>(notLogined);
    const [search, setSearch] = useState<string>("");

    return (
        <Router>
            <Header
                search={search}
                setSearch={setSearch}
                user={user}
                setUser={setUser}
            />
            <Box style={{ position: "fixed", top: "55px", width: "100%" }}>
                <Routes>
                    <Route path="/" element={<Intro />} />
                    <Route path=":username">
                        <Route index element={<Main user={user} />} />
                        <Route path="notification" element={<Notification />} />
                        <Route path=":isfollow" element={<FollowFollower />} />
                    </Route>
                    <Route path="profile" element={<Profile />} />
                    <Route
                        path="search/:searchValue"
                        element={
                            <Search search={search} setSearch={setSearch} />
                        }
                    />
                    <Route path="signIn">
                        {user === null ? (
                            <Route index element={<Intro />} />
                        ) : (
                            <Route
                                index
                                element={
                                    <SignIn user={user} setUser={setUser} />
                                }
                            />
                        )}
                    </Route>
                    <Route path="signUp" element={<SignUp />} />
                    <Route path="/*" element={<Error />} />
                </Routes>
            </Box>
            <Footer />
        </Router>
    );
}

export default App;

const notLogined: IuserInterface = {
    name: "",
    id: "",
    password: "",
    follower: [],
    follow: [],
    isLogin: false,
    profilePic: "",
    posts: [],
    likedPosts: [],
    likedComments: [],
};
