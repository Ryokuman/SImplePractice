import { Button, Grid, Link } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";

import PostCard from "../Component/PostCard";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useState } from "react";

interface IuserInterface {
    name: string;
    follower: string[];
    followed: string[];
    isLogin: boolean;
    profilePic: string;
    posts: IpostInterface[];
}

interface IpostInterface {
    userName: string;
    date: string;
    title: string;
    img: string;
    contents: string;
}

function Calendar() {
    return (
        <FullCalendar
            height="780px"
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            weekends={false}
            events={[
                { title: "event 1", date: "2022-05-17" },
                { title: "event 2", date: "2022-05-18" },
                {
                    title: "test",
                    date: "2022-05-19",
                    url: "https://fullcalendar.io/docs/event-object",
                },
            ]}
            dateClick={() => console.log("hello")}
            eventMouseEnter={(e) => console.log(e)}
        />
    );
}

function ProfileBox({ user }: { user: IuserInterface }) {
    const [isFollowed, setIsFollowed] = useState<boolean>(true);
    const [isEntered, setIseEntered] = useState<boolean>(false);

    return (
        <div style={{ width: "100%", height: "100%" }}>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={3}
            >
                <Grid item>
                    <img
                        src={user.profilePic}
                        alt=""
                        style={{
                            width: "200px",
                            height: "200px",
                            borderRadius: "100%",
                        }}
                    />
                </Grid>
                <Grid item>{user.name}</Grid>
                <Grid item>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                    >
                        <Grid item textAlign="center">
                            <Link
                                href="http://localhost:3000/help"
                                underline="none"
                                color="black"
                            >
                                <p>{user.follower.length}</p>
                                <h3>follower</h3>
                            </Link>
                        </Grid>
                        <Grid item textAlign="center">
                            <Link
                                href="http://localhost:3000/help"
                                underline="none"
                                color="black"
                            >
                                <p>{user.followed.length}</p>
                                <h3>followd</h3>
                            </Link>
                        </Grid>
                        <Grid item textAlign="center">
                            <Button
                                onMouseEnter={() => {
                                    setIseEntered(true);
                                }}
                                onMouseLeave={() => {
                                    setIseEntered(false);
                                }}
                                onClick={() => {
                                    setIsFollowed(isFollowed ? false : true);
                                }}
                            >
                                {isFollowed ? (
                                    isEntered ? (
                                        <HeartBrokenIcon />
                                    ) : (
                                        <FavoriteIcon />
                                    )
                                ) : isEntered ? (
                                    <FavoriteBorderIcon />
                                ) : (
                                    <FavoriteIcon />
                                )}
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

function Main({ user }: { user: IuserInterface }) {
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            spacing={2}
            style={{ marginTop: "10px" }}
        >
            <Grid item xs={1}></Grid>
            <Grid item xs>
                <Calendar />
            </Grid>
            <Grid item xs={4} marginTop="70px">
                <ProfileBox user={user} />
            </Grid>
        </Grid>
    );
}

export default Main;
