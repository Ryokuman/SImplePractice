import { Box, Grid, styled } from "@mui/material";

interface IpostCardInterface {
    img: string;
    title: string;
    postNum: number;
}

function PostCard({ img, title }: IpostCardInterface) {
    const PostSquare = styled(Box)({
        height: "200px",
        width: "200px",
        backgroundColor: "yellow",
    });

    return (
        <PostSquare>
            <img src={img} alt="" />
        </PostSquare>
    );
}

export default PostCard;
