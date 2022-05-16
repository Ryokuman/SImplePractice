import { Box, Grid, styled } from "@mui/material";

function PostCard() {
    const PostSquare = styled(Box)({
        height: "200px",
        width: "200px",
        backgroundColor: "yellow",
    });

    return (
        <PostSquare>
            <Grid>
                <p>heklo</p>
            </Grid>
        </PostSquare>
    );
}

export default PostCard;
