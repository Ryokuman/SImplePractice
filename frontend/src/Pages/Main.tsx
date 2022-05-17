import { Grid } from "@mui/material";

import PostCard from "../Component/PostCard";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const img: string = "../Assets/Images/Daylog.png";

function Calendar() {}

function Main() {
    return (
        <Grid>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
            />
            <PostCard img={img} title={"hello"} postNum={111} />
        </Grid>
    );
}

export default Main;
