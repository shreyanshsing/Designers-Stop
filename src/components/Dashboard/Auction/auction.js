import React from "react";
import {Container,Grid,makeStyles,Typography} from "@material-ui/core";
import AuctionCard from "../../Card/AuctionCard";
import {AuctionData} from "./Data";

const styles = makeStyles(theme=>({
    root:{
        padding:'5%',
    }
}))

const Auctions = () => {
    const classes = styles();
    return(
        <Container maxWidth="xl" className={classes.root}>
            <Grid container spacing={1}>
                <Grid item sm={12} style={{textAlign:'center'}}>
                    <Typography variant="h6" color="textSecondary" gutterBottom>Active Auctions</Typography>
                </Grid>
                {
                    AuctionData.map(item=>
                        <Grid item sm={6} key={item.id}>
                            <AuctionCard title={item.productName} price={item.startingBid} date={item.auctionDate} subtitle={item.desginer} key={item.id}/>
                        </Grid>)
                }
            </Grid>
        </Container>
    )
}

export default Auctions;