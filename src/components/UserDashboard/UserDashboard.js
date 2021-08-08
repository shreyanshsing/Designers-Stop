import React , {useState,useEffect} from "react";
import {Avatar, Container,Grid,makeStyles,Typography,Button} from "@material-ui/core";
//import {ownItems} from './Data';
import ItemCard from "../Card/ItemCard";
import RegisterProduct from "./RegisterProduct";
import {useSelector} from "react-redux";
import {selectorUserProfile} from "../../service/userProfile/userProfile.slice";
import Header from "../Dashboard/Header/header";
import CachedIcon from '@material-ui/icons/Cached';
import {web3Selector} from "../../service/web3/web3Reducer";
import Product from "../../contracts/Product.json";

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
    },
    info:{
        background : theme.palette.info.main,
        color:'whitesmoke',
        borderRadius:'10px'
    }
}))

const UserDashboard = () => {
    const classes = styles();
    const [user,setUser] = useState({});
    const [ownedItems,setOwnedItems] = useState([])
    const web3 = useSelector(web3Selector);
    const profile = useSelector(selectorUserProfile);

    useEffect(()=>{
        const curr_user = JSON.parse(localStorage.getItem('user'));
        setUser(curr_user);
        //console.log(curr_user);
    },[])

    const handleRefresh = () => {
        const deployedNetwork = Product.networks[web3.web3.networkId];
        const instance = new web3.web3.web3.eth.Contract(
            Product.abi,
            deployedNetwork && deployedNetwork.address,
        );
        instance && instance.methods.getItems(web3.web3.accounts[0]).call({
            from : web3.web3.accounts[0]
        })
            .then(res => {
                setOwnedItems(res);
                console.log(res)
            })
            .catch(err =>{
                console.log(err)
            })
    } 

    const handleBurn = async(id) => {
        const deployedNetwork = Product.networks[web3.web3.networkId];
        const instance = new web3.web3.web3.eth.Contract(
            Product.abi,
            deployedNetwork && deployedNetwork.address,
        );
        instance && await instance.methods.deleteToken(parseInt(id)).send({
            from : web3.web3.accounts[0]
        })
        .then(res => {
            setOwnedItems(ownedItems.filter(item => item.key !== id));
            handleRefresh();
            console.log(res)
        })
        .catch(err =>{
            console.log(err)
        })
    }

    const handleTransfer = async(sender,reciever,id) => {
        const deployedNetwork = Product.networks[web3.web3.networkId];
        const instance = new web3.web3.web3.eth.Contract(
            Product.abi,
            deployedNetwork && deployedNetwork.address,
        );
        instance && await instance.methods.transferOwnerShip(reciever,sender,parseInt(id)).send({
            from : web3.web3.accounts[0]
        })
        .then(res => {
            setOwnedItems(ownedItems.filter(item => item.key !== id));
            handleRefresh();
            console.log(res)
        })
        .catch(err =>{
            console.log(err)
        })
    }

    return(
        <>
        <Header/>
        <Container maxWidth="xl" className={classes.root}>
            <Grid container spacing={4}>
                <Grid item sm={12} style={{textAlign:'center'}}>
                    <Typography variant="h4" gutterBottom>Welcome {user.first_name}</Typography>
                </Grid>
                <Grid item sm={12}>
                    <Grid container spacing={3} className={classes.info}>
                        <Grid item sm={2} className={classes.dFlex}>
                            <Avatar src={`${profile.profile}`} alt="Profile" className={classes.large}/>
                            <Typography variant="body1"  style={{paddingTop:'5%'}}  gutterBottom>
                                &nbsp;&nbsp;
                                {user.first_name}
                            </Typography>
                        </Grid>
                        <Grid item sm={5}>
                            <Typography variant="body1"  style={{paddingTop:'2%'}}  gutterBottom>Address : {user.address}</Typography>
                        </Grid>
                        <Grid item sm={2}>
                            <Typography variant="body1"  style={{paddingTop:'5%'}}  gutterBottom>User Type : {user.user_type}</Typography>
                        </Grid>
                        <Grid item sm={3}>
                            <Typography variant="body1"  style={{paddingTop:'3%'}} gutterBottom>Last Check In Time : {new Date(user.lastCheckinTime*1000).getMinutes()}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sm={6}>
                    <Typography variant="h5" component="span" gutterBottom>Owned Products</Typography>
                    <Button type="button" variant="text" color="primary" onClick={handleRefresh} endIcon={<CachedIcon />}>Refresh</Button>
                    <Grid container direction="row" justify="flex-start" alignItems="center" spacing={3}>
                        {
                            ownedItems.length >0 && ownedItems.map(item => <ItemCard handleTransfer={handleTransfer} handleBurn={handleBurn} key={item.key} data={item}/>)
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