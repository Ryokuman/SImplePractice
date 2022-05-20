import { Grid, Box, styled, TextField, Button } from "@mui/material";
import { useState } from "react";

const LoginBox = styled(Grid)({
    border: "2px solid black",
    width: "400px",
});

interface IsignInInterface {
    user: IuserInterface;
    setUser: React.Dispatch<React.SetStateAction<IuserInterface>>;
}

interface IonLoginInterface {
    user: IuserInterface;
    id: string;
    password: string;
    setUser: React.Dispatch<React.SetStateAction<IuserInterface>>;
    setId: React.Dispatch<React.SetStateAction<string>>;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
}

function LoginForm({ user, setUser }: IsignInInterface) {
    const [id, setId] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (
        <Grid
            container
            direction="column"
            justifyContent="space-between"
            style={{ width: "400px", height: "600px" }}
        >
            <Grid item>
                <LoginBox
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    height="450px"
                    spacing={2}
                >
                    <Grid item>
                        <img
                            style={{ height: "60px" }}
                            src={require("../Assets/Images/Daylog.png")}
                            alt=""
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            style={{ width: "300px", marginTop: "50px" }}
                            label="id"
                            placeholder="id를 입력해 주세요"
                            value={id}
                            onChange={(e) => {
                                setId(e.target.value);
                            }}
                        ></TextField>
                    </Grid>
                    <Grid item>
                        <TextField
                            style={{ width: "300px" }}
                            label="password"
                            placeholder="password를 입력해 주세요"
                            value={password}
                            type="password"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        ></TextField>
                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            style={{ width: "300px", marginTop: "20px" }}
                            onClick={() => {}}
                        >
                            Sign In
                        </Button>
                    </Grid>
                </LoginBox>
            </Grid>
            <Grid item></Grid>
        </Grid>
    );
}

function SignIn({ user, setUser }: IsignInInterface) {
    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            style={{
                marginTop: "13px",
                width: "1700px",
                height: "800px",
                margin: "0 auto",
            }}
        >
            <Grid item>
                <LoginForm user={user} setUser={setUser} />
            </Grid>
        </Grid>
    );
}

export default SignIn;
