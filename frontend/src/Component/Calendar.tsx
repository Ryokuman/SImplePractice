import { Grid, Typography, Button } from "@mui/material";
import { useState } from "react";

import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

function CalendarTitle({
    date,
    setDate,
}: {
    date: Date;
    setDate: React.Dispatch<React.SetStateAction<Date>>;
}) {
    const myYear: number = date.getFullYear();
    const myMonth: number = date.getMonth();
    const myDate: number = date.getDate();

    const mothArray: string[] = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        " Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

    return (
        <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ width: "1000px" }}
        >
            <Grid item>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    style={{ marginBottom: "10px" }}
                >
                    <Grid item marginRight={2}>
                        <Typography variant="h4">
                            {mothArray[myMonth]}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h4">{myYear}</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Button
                    onClick={() => {
                        setDate(new Date(myYear, myMonth - 1, myDate));
                    }}
                >
                    <ArrowCircleLeftIcon />
                </Button>
                <Button
                    onClick={() => {
                        setDate(new Date());
                    }}
                >
                    Today
                </Button>
                <Button
                    onClick={() => {
                        setDate(new Date(myYear, myMonth + 1, myDate));
                    }}
                >
                    <ArrowCircleRightIcon />
                </Button>
            </Grid>
        </Grid>
    );
}

function ClaendarDateForm({
    date,
    day,
    isToday,
    isStart,
    isEnd,
}: {
    date: Date;
    day: number;
    isToday: boolean;
    isStart: boolean;
    isEnd: boolean;
}) {
    const month = date.getMonth();
    const year = date.getFullYear();

    return (
        <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            id={`${year}-${month + 1}-${day}`}
            style={{
                width: "136.5px",
                height: "105px",
                margin: "3px",
                backgroundColor: isStart
                    ? isToday
                        ? "yellow"
                        : "white"
                    : "grey",
            }}
        >
            <Grid item>{isEnd && isStart ? day : ""}</Grid>
            <Grid item></Grid>
            <Grid item></Grid>
        </Grid>
    );
}

function ClaendarDayForm({ day }: { day: number }) {
    const week: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return (
        <div
            style={{
                width: "136.5px",
                height: "25px",
                margin: "3px",
                backgroundColor: "white",
            }}
        >
            <Typography sx={{ color: day === 0 ? "red" : "black" }}>
                {week[day]}
            </Typography>
        </div>
    );
}

function CalendarForm({ date }: { date: Date }) {
    const days: number[] = [0, 1, 2, 3, 4, 5, 6];
    const weeks: number[] = [0, 1, 2, 3, 4, 5, 6];
    const nowDate: Date = new Date();

    let day: number = 0;
    let isStart: boolean = false;
    let isToday: boolean = false;
    let isEnd: boolean = true; // 끝나면 false 안끝나면 true
    let isNow: boolean =
        date.getFullYear() === nowDate.getFullYear() &&
        date.getMonth() === nowDate.getMonth();

    console.log(isNow);

    const newDate = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const dayLabel = newDate.getDay();

    return (
        <Grid
            container
            style={{
                width: "1000px",
                height: "700px",
                backgroundColor: "black",
            }}
            direction="column"
        >
            {weeks.map((e, i: number) => {
                if (e === 0)
                    return (
                        <Grid item key={i}>
                            <Grid container direction="row">
                                {days.map((e, i: number) => {
                                    return (
                                        <Grid item key={i}>
                                            <ClaendarDayForm day={e} />
                                        </Grid>
                                    );
                                })}
                            </Grid>
                        </Grid>
                    );
                else
                    return (
                        <Grid item key={i}>
                            <Grid container direction="row">
                                {days.map((e, i: number) => {
                                    if (dayLabel === e && isEnd) isStart = true;
                                    if (isStart) day++;
                                    if (day > lastDate.getDate()) {
                                        isStart = false;
                                        isEnd = false;
                                    }
                                    if (date.getDate() === day && isNow)
                                        isToday = true;
                                    else isToday = false;

                                    return (
                                        <Grid item key={i}>
                                            <ClaendarDateForm
                                                date={date}
                                                isStart={isStart}
                                                day={day}
                                                isToday={isToday}
                                                isEnd={isEnd}
                                            />
                                        </Grid>
                                    );
                                })}
                            </Grid>
                        </Grid>
                    );
            })}
        </Grid>
    );
}

function Calendar() {
    const [date, setDate] = useState<Date>(new Date());

    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
        >
            <Grid item>
                <CalendarTitle date={date} setDate={setDate} />
            </Grid>
            <Grid item>
                <CalendarForm date={date} />
            </Grid>
        </Grid>
    );
}

export default Calendar;
