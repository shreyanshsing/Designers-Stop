import React from "react";
import {Container,Grid,makeStyles,Divider} from "@material-ui/core";
import Header from "./Header/header";
import Auctions from "./Auction/auction";

const styles = makeStyles(theme=>({
    root:{
        padding:'0%',
        background:'linear-gradient(45deg , whitesmoke 10% , whitesmoke 20%)',
    }
}))

const Dashboard = () => {
    const classes = styles();
    return(
        <Container maxWidth="xl" className={classes.root}>
            <Grid container spacing={3}>
                <Grid item sm={12}>
                    <Header/>
                </Grid>
                <Grid item sm={12}>
                    <Auctions/>
                    <Divider orientation="vertical"/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Dashboard;