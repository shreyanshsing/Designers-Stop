import React from "react";
import {Card,CardHeader,CardContent,makeStyles,Typography} from "@material-ui/core";
const style = makeStyles((theme)=>({
    card:{
        padding:'3%',
        borderRadius:'20px',
        '&:hover':{
            boxShadow:'10px 10px 15px lightgrey'
        }
    },
    cardContent:{
        textAlign:'justify'
    },
    cardActions:{
        alignItems:'center',
        justifyContent:'center',
    }
}))
export const Card1 = () => {
    const classes = style();
    return(
        <>
        <Card raised className={classes.card}>
            <CardHeader
                title="New revolutionary technology"
                subheader="based on blockchain"
            />
            <CardContent className={classes.cardContent} style={{color:'#404040'}}>
                <Typography variant="body1" gutterBottom>
                    This platform provides you to experince  a new trend of shopping with us. 
                    This revolutionary  technonolgy makes it possible to reduce middle man cost.
                    Now pay what's resonable not extra as you all have done till yet .   
                </Typography>
            </CardContent>
        </Card>
        </>
    )
}

export const Card2 = () => {
    const classes = style();
    return(
        <>
        <Card raised className={classes.card}>
            <CardHeader
                title="For designer's"
                subheader="make your designs available to rest of the world."
            />
            <CardContent className={classes.cardContent} style={{color:'#404040'}}>
                <Typography variant="body1" gutterBottom>
                    Boost your game with attractive and user friendly website. Here you can auction your new styles and get amazing offer's for it .
                    Don't worry for people to recognise your work , we will promote every work that you do.
                </Typography>
            </CardContent>
        </Card>
        </>
    )
}

export const Card3 = () => {
    const classes = style();
    return(
        <>
        <Card raised className={classes.card}>
            <CardHeader
                title="Auction Feat"
                subheader="get amazing deals in auction."
            />
            <CardContent className={classes.cardContent} style={{color:'#404040'}}>
                <Typography variant="body1" gutterBottom>
                   Online Auction is a very revolutionary featuer , earlier we had only offline auctions but this pandemic told us that we need good deals available 
                   anywhere in world at our home , so we think of a funtion and here we come up with this. 
                </Typography>
            </CardContent>
        </Card>
        </>
    )
}
