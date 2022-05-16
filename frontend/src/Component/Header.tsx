import { Grid, styled, Box, TextField } from "@mui/material";
import { useState, useRef } from "react";
import "../Assets/Styles/Header.css";

interface ISearchInterface {
    search: string | null;
    setSearch: React.Dispatch<React.SetStateAction<string | null>>;
}

function SearchField({ search, setSearch }: ISearchInterface) {
    return (
        <TextField
            style={{ width: "90%" }}
            size="small"
            variant="outlined"
            // value={search}
            label="검색"
            autoFocus
            onChange={(e) => {
                console.log(e.target.value);
                setSearch(e.target.value);
            }}
        />
    );
}

function Header({ search, setSearch }: ISearchInterface) {
    const HeaderGridItem = styled(Grid)({
        textAlign: "center",
    });

    return (
        <div id="Header">
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <HeaderGridItem item xs={3}>
                    <a href="http://localhost:3000">
                        <img
                            style={{ height: "40px", marginTop: "10px" }}
                            src={require("../Assets/Images/Daylog.png")}
                        />
                    </a>
                </HeaderGridItem>
                <HeaderGridItem item xs={6}>
                    <SearchField search={search} setSearch={setSearch} />
                </HeaderGridItem>
                <HeaderGridItem item xs={3}>
                    item
                </HeaderGridItem>
            </Grid>
        </div>
    );
}

export default Header;
