import React from "react";
import {Card,CardActions, CardContent,makeStyles,Typography, Button} from "@material-ui/core";

const style = makeStyles((theme)=>({
    card:{
        padding:'1%',
        backgroundImage:`linear-gradient(40deg,rgba(0, 0, 0,0.2), rgba(0, 0, 0, 0.5))`,
        borderRadius:'10px',
    },
    cardContent:{
        textAlign:'justify'
    },
    cardActions:{
        alignItems:'center',
        justifyContent:'center',
    }
}))
const AuctionCard = ({title,subtitle,price,date}) => {
    const classes = style();
    return(
        <>
        <Card raised className={classes.card}>
            <CardContent className={classes.cardContent} style={{color:'#404040'}}>
                <Typography variant="body1" gutterBottom>{title}</Typography>
                <Typography variant="body2" gutterBottom>{`by ${subtitle}`}</Typography>
                <Typography variant="body2" gutterBottom>Base Price - <b>{price}</b></Typography>
                <Typography variant="body2" gutterBottom>Date Starting - <b>{date}</b></Typography>
            </CardContent>
            <CardActions style={{textAlign:'center'}}>
                <Button variant="standard" color="primary">Participate</Button>
            </CardActions>
        </Card>
        </>
    )
}

export default AuctionCard;