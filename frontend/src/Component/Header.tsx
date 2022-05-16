import { Grid, styled, Box, TextField } from "@mui/material";
import { useState, useEffect, type MutableRefObject } from "react";
import "../Assets/Styles/Header.css";

interface ISearchInterface {
    searchRef: MutableRefObject<string>
}

function SearchField({ searchRef }: ISearchInterface) {
    const [localSearch, setLocalSearch] = useState<string>('');


    useEffect(() => {
        searchRef.current = localSearch;
    }, [localSearch]);



    return (
        <TextField
            style={{ width: "90%" }}
            size="small"
            variant="outlined"
            value={localSearch}
            label="검색"
            autoFocus
            onChange={(e) => {
                console.log(e.target.value);
                setLocalSearch(e.target.value);
            }}
        />
    );
}

function Header({ searchRef }: ISearchInterface) {
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
                    <SearchField searchRef={searchRef} />
                </HeaderGridItem>
                <HeaderGridItem item xs={3}>
                    item
                </HeaderGridItem>
            </Grid>
        </div>
    );
}

export default Header;
