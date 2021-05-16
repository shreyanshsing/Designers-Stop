import React , {useState} from "react";
import {makeStyles,Typography,Dialog,DialogTitle,DialogContent,Button,Grid} from "@material-ui/core";
import CustomTextField from "../../../custom/textField";
import Toast from "../../../custom/toast";
import Registration from "../../../contracts/Registration.json";
import {web3Selector} from "../../../service/web3/web3Reducer";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

const style = makeStyles((theme)=>({
    paper:{
        width:'100%',
        height:'auto',
        padding:'3%',
        overflowY:'hidden',
        backgroundImage:`linear-gradient(40deg,rgba(0, 0, 0,0.2), rgba(0, 0, 0, 0.5))`,
        borderRadius:'20px',
    },
    form:{
        overflow:'hidden'
    }
}))

const Signin = ({open,setOpen}) => {
    const classes = style();
    const history = useHistory();
    const config = useSelector(web3Selector)
    const [name,setName] = useState("");
    const [address,setAddress] = useState("");
    const [toastView,setToastView] = useState(false);
    const [severity,setSeverity] = useState("");
    const [message,setMessage] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();
        const deployedNetwork = Registration.networks[config.web3.networkId];
        const instance = new config.web3.web3.eth.Contract(
            Registration.abi,
            deployedNetwork && deployedNetwork.address,
        );
        instance && instance.methods.signin(address).send({from:config.web3.accounts[0]})
        .then(res=>{
            setMessage("Login successful , redirecting you to dashboard");
            setSeverity("success");
            setToastView(true);
            window.setTimeout(()=>{
                history.push('/dashboard');
            },3000)
        })
        .catch(err=>{
            setMessage(err.message);
            setSeverity("error");
            setToastView(true);
        })
    }
    return(
        <>
        <Dialog
            open={open}
            onClose={()=>setOpen(false)}
            classes={{paper:classes.paper}}>
            <DialogTitle disableTypography={true}>
                <Typography variant="h5" gutterBottom>Enter Details</Typography>
            </DialogTitle>
            <DialogContent className={classes.form}>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        <Grid item sm={6}>
                            <CustomTextField type="text" value={name} onChange={(e)=>setName(e.target.value)} variant="outlined" margin="dense" label="Name" fullWidth required/>
                        </Grid>
                        <Grid item sm={6}>
                            <CustomTextField type="text" value={address} onChange={(e)=>setAddress(e.target.value)} error={address.length<32 && address.length>0?true:false} variant="outlined" margin="dense" label="Crypto Address" fullWidth required/>
                        </Grid>
                        <Grid item sm={12} style={{textAlign:'center'}}>
                            <Button type="reset" variant="contained" color="primary">Reset</Button>&nbsp; / &nbsp;
                            <Button type="submit" variant="contained" color="primary">Submit</Button>
                        </Grid>
                    </Grid>
                </form>
            </DialogContent>
            {
                toastView ? <Toast open={toastView} setOpen={setToastView} message={message} severity={severity}/> : null
            }
        </Dialog>
        </>
    )
}
export default Signin;