import { Grid, styled, TextField, Button, Box } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PeopleIcon from "@mui/icons-material/People";
import ExploreIcon from "@mui/icons-material/Explore";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";

import "../Assets/Styles/Header.css";

const HeaderGridItem = styled(Grid)({
    textAlign: "center",
});

const ToolBoxContainer = styled(Box)({
    p: 2,
    border: "1px solid black",
    borderRadius: "10px",
});

interface ISearchFieldInterface {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}

interface IheaderInterface {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    isLogin: boolean;
    setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IisLoginInterface {
    isLogin: IisLogin;
    setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}
type IisLogin = boolean;

function SearchField({ search, setSearch }: ISearchFieldInterface) {
    return (
        <Grid container>
            <Grid item xs={11}>
                <TextField
                    style={{ width: "100%" }}
                    size="small"
                    variant="outlined"
                    value={search}
                    label="검색"
                    onChange={(e) => {
                        setSearch(e.target.value);
                    }}
                />
            </Grid>
            <Grid item xs>
                <Button variant="text" style={{ marginTop: "2px" }}>
                    <SearchIcon color="action" />
                </Button>
            </Grid>
        </Grid>
    );
}

function IconField({ isLogin, setIsLogin }: IisLoginInterface) {
    return (
        <div>
            <Button variant="text" style={{ marginTop: "2px" }}>
                <PersonIcon color="action" />
            </Button>
            <Button variant="text" style={{ marginTop: "2px" }}>
                <NotificationsIcon color="action" />
            </Button>
            <Button variant="text" style={{ marginTop: "2px" }}>
                <PeopleIcon color="action" />
            </Button>
            <Button variant="text" style={{ marginTop: "2px" }}>
                <ExploreIcon color="action" />
            </Button>
            <Button
                variant="text"
                style={{ marginTop: "2px" }}
                onClick={() => {
                    setIsLogin(false);
                    console.log(isLogin);
                }}
            >
                <LogoutIcon color="action" />
            </Button>
        </div>
    );
}

function SignUpSignIn() {
    return (
        <div>
            <Button variant="text" style={{ marginTop: "2px" }}>
                SignUp
            </Button>
            <Button variant="text" style={{ marginTop: "2px" }} color="info">
                SignIn
            </Button>
        </div>
    );
}

function ToolBox({ isLogin, setIsLogin }: IisLoginInterface) {
    return (
        <ToolBoxContainer>
            {isLogin ? (
                <IconField isLogin={isLogin} setIsLogin={setIsLogin} />
            ) : (
                <SignUpSignIn />
            )}
        </ToolBoxContainer>
    );
}

function Header({ search, setSearch, isLogin, setIsLogin }: IheaderInterface) {
    return (
        <div id="Header">
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <HeaderGridItem item xs={2.5}>
                    <a href="http://localhost:3000">
                        <img
                            style={{ height: "40px", marginTop: "10px" }}
                            src={require("../Assets/Images/Daylog.png")}
                            alt=""
                        />
                    </a>
                </HeaderGridItem>
                <HeaderGridItem item xs={7}>
                    <SearchField search={search} setSearch={setSearch} />
                </HeaderGridItem>
                <HeaderGridItem item xs={2.5}>
                    <ToolBox setIsLogin={setIsLogin} isLogin={isLogin} />
                </HeaderGridItem>
            </Grid>
        </div>
    );
}

export default Header;
