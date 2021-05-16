import MuiAlert from '@material-ui/lab/Alert';
import React from 'react';
import {Snackbar} from '@material-ui/core';

function Alert(props) {
  return <MuiAlert elevation={12} variant="filled" {...props} />;
}

const Toast=(props)=>{
  const message = props.message;
  const severity = props.severity;

  return(<Snackbar open={props.open} autoHideDuration={5000} onClose={()=>props.setOpen(false)} anchorOrigin={{vertical:'top',horizontal:'center'}}>
          <Alert onClose={()=>props.setOpen(false)} severity={severity}>
            {message}
          </Alert>
        </Snackbar>)
}

export default Toast;