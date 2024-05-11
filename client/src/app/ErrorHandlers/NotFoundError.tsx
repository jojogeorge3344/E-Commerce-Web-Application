import { Button, Container, Divider, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function NotFoundError() {
    return (
        <Container component={Paper} sx={{height: 500}}>
            <Typography gutterBottom variant='h3'>Oops - We Could not find what you are looking for!!!</Typography>
            <Divider />
            <Button fullWidth component={Link} to='/catalog'>Go back to shop</Button>
        </Container>
    )
}