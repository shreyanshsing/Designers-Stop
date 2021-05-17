import React from "react";
import {Container,Grid,makeStyles,Typography} from "@material-ui/core";
import ItemInfo from "../../ItemInfo/ItemInfo";
import ActiveParticipants from "../../Participants/Active";
import BidArea from "../../BidArea/BidArea";


const styles = makeStyles(theme=>({
    root:{
        padding:'2%',
        background:'whitesmoke'
    },
    header:{
        padding:'5%',
        border:'2px solid grey',
        borderRadius:'10px',
    },
}))

const LiveAuction = () => {
    const classes = styles();
    return(
        <Container maxWidth="xl" className={classes.root}>
            <Grid container spacing={4}>
                <Grid item sm={12} style={{textAlign:'center'}}>
                    <Typography variant="h4" color="textSecondary"  gutterBottom>Welcome to Auction</Typography>
                </Grid>
                <Grid item sm={12} className={classes.header}>
                    <Grid container spacing={3}>
                        <Grid item sm={3}>
                            <Typography color="textSecondary" gutterBottom>Item : <b>Crop Sythel</b></Typography>
                            <Typography color="textSecondary" gutterBottom>Created By : <b>Elly Abshak</b></Typography>
                        </Grid>
                        <Grid item sm={3}>
                            <Typography color="textSecondary" gutterBottom>Date : <b>{new Date().getDate()+"/"+new Date().getDay()+"/"+new Date().getFullYear()}</b></Typography>
                            <Typography color="textSecondary" gutterBottom>Status : <b>Live (remaining time - 1 Hr)</b></Typography>
                        </Grid>
                        <Grid item sm={3}>
                            <Typography color="textSecondary" gutterBottom>Starting Bid : <b>$ 400</b></Typography>
                            <Typography color="textSecondary" gutterBottom>Crypto acceptable : <b>ETH</b></Typography>
                        </Grid>
                        <Grid item sm={3}>
                            <Typography color="textSecondary" gutterBottom>Registered Participants : <b>200</b></Typography>
                            <Typography color="textSecondary" gutterBottom>Active Participants : <b>65</b></Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sm={8}>
                    <Grid container spacing={4}>
                        <Grid item sm={6}>
                            <ItemInfo/>
                        </Grid>
                        <Grid item sm={6}>
                            <BidArea/>
                        </Grid>
                        <Grid item sm={12}>
                            <Typography variant="h6" color="textSecondary" gutterBottom>More about product</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sm={4}>
                    <ActiveParticipants/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default LiveAuction;