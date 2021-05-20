import React from "react";
import {makeStyles,Card,CardHeader,CardContent} from "@material-ui/core";
import {Carousel} from "react-bootstrap";

const styles = makeStyles(theme=>({
    root:{
        width:'fit-content',
        padding:'1%',
        background:'lightgrey',
        margin:'1%'
    },
}))

const ItemCard = (props) => {
    const classes = styles();
    const item = props.data;
    return(
        <Card className={classes.root} raised>
            <CardHeader
                title={item.name}
                subheader={item.designer}/>
            <CardContent>
                <Carousel>
                    {
                        item.imgHash.length > 0 && item.imgHash.map(e => 
                            <Carousel.Item key={e}>
                                <img
                                className="d-block w-100"
                                src={`url(${e})`}
                                alt="slide"
                                />
                            </Carousel.Item>)
                    }
                </Carousel>
            </CardContent>
        </Card>
    )
}

export default ItemCard;