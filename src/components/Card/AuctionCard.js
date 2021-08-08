import React from "react";
import {Card,CardActions, CardContent,makeStyles,Typography, Button} from "@material-ui/core";
import {useHistory} from "react-router-dom";

const style = makeStyles((theme)=>({
    card:{
        padding:'1rem',
        borderRadius:'10px',
        background:theme.palette.info.main
    },
    cardContent:{
        textAlign:'justify',
        background:"whitesmoke",
        borderRadius:'10px',
    },
    cardActions:{
        alignItems:'center',
        justifyContent:'center',
    }
}))
const AuctionCard = ({title,subtitle,price,date,id}) => {
    const classes = style();
    const history = useHistory();

    const handleParticipate = () => {
        window.setTimeout(()=>{
            history.push("/auction/"+id);
        },2000)
    }
    return(
        <>
        <Card raised className={classes.card}>
            <CardContent className={classes.cardContent}>
                <Typography variant="body1" gutterBottom>{title}</Typography>
                <Typography variant="body2" gutterBottom>{`by ${subtitle}`}</Typography>
                <Typography variant="body2" gutterBottom>Base Price - <b>{price}</b></Typography>
                <Typography variant="body2" gutterBottom>Date Starting - <b>{date}</b></Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button variant="contained" color="secondary" size="small" onClick={handleParticipate}>Participate</Button>
            </CardActions>
        </Card>
        </>
    )
}

export default AuctionCard;