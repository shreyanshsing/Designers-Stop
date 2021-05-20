import React from "react";
import {List,ListItem,ListItemText,makeStyles,Drawer} from "@material-ui/core";
import {useHistory} from "react-router-dom";


const styles = makeStyles(theme=>({
    root:{
        padding:'2%',
    },
}))

const Sidebar = ({open,setOpen}) => {
    const classes = styles();
    const history = useHistory();
    
    return(
        <Drawer
            open={open}
            onClose={()=>setOpen(false)}
            anchor="right"
            className={classes.root}
        >
            <List>
                <ListItem button divider onClick={()=>{history.push('/user-dashboard')}} >
                    <ListItemText primary="My Lobby"/>
                </ListItem>
                <ListItem button divider>
                    <ListItemText primary="Update Profile"/>
                </ListItem>
                <ListItem button divider>
                    <ListItemText primary="Account Settings"/>
                </ListItem>
                <ListItem button divider>
                    <ListItemText primary="Sign Out"/>
                </ListItem>
            </List>
        </Drawer>
    )
}

export default Sidebar;