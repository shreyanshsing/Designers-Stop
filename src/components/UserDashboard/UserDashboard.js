import React , {useState,useEffect} from "react";
import {Avatar, Container,Grid,makeStyles,Typography} from "@material-ui/core";
import {ownItems} from './Data';
import ItemCard from "../Card/ItemCard";
import RegisterProduct from "./RegisterProduct";
import {useSelector} from "react-redux";
import {selectorUserProfile} from "../../service/userProfile/userProfile.slice";
import Header from "../Dashboard/Header/header";

const styles = makeStyles(theme=>({
    root:{
        padding:'2%',
        background:'whitesmoke'
    },
    dFlex:{
        display:'flex',
        flexGrow:1
    },
    large:{
        width:theme.spacing(7),
        height:theme.spacing(7)
    }
}))

const UserDashboard = () => {
    const classes = styles();
    const [user,setUser] = useState({});
    const profile = useSelector(selectorUserProfile);

    useEffect(()=>{
        const curr_user = JSON.parse(localStorage.getItem('user'));
        setUser(curr_user);
    },[])

    return(
        <>
        <Header/>
        <Container maxWidth="xl" className={classes.root}>
            <Grid container spacing={4}>
                <Grid item sm={12} style={{textAlign:'center'}}>
                    <Typography variant="h4" color="textSecondary"  gutterBottom>Welcome {user.first_name}</Typography>
                </Grid>
                <Grid item sm={12}>
                    <Grid container spacing={3} style={{border:'2px solid grey',borderRadius:'10px'}}>
                        <Grid item sm={2} className={classes.dFlex}>
                            <Avatar src={`${profile.profile}`} alt="Profile" className={classes.large}/>
                            <Typography variant="body1" color="textSecondary" style={{paddingTop:'5%'}}  gutterBottom>
                                &nbsp;&nbsp;
                                {user.first_name}
                            </Typography>
                        </Grid>
                        <Grid item sm={5}>
                            <Typography variant="body1" color="textSecondary" style={{paddingTop:'2%'}}  gutterBottom>Address : {user.address}</Typography>
                        </Grid>
                        <Grid item sm={2}>
                            <Typography variant="body1" color="textSecondary" style={{paddingTop:'5%'}}  gutterBottom>User Type : {user.user_type}</Typography>
                        </Grid>
                        <Grid item sm={3}>
                            <Typography variant="body1" color="textSecondary" style={{paddingTop:'3%'}} gutterBottom>Last Check In Time : {new Date(user.lastCheckinTime*1000).getMinutes()}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sm={6}>
                    <Typography variant="h4" color="textSecondary"  gutterBottom>Owned Products</Typography>
                    <Grid container direction="row" justify="flex-start" alignItems="center" spacing={3}>
                        {
                            ownItems.map(item => <ItemCard key={item.key} data={item}/>)
                        }
                    </Grid>
                </Grid>
                <Grid item sm={6}>
                    <RegisterProduct/>
                </Grid>
            </Grid>
        </Container>
        </>
    )
}

export default UserDashboard;