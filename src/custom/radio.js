import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';

const CustomRadio = withStyles((theme)=>({
  root: {
    color:theme.palette.primary,
    '&$checked': {
      color:theme.palette.primary,
    },
  },
  checked: {},
}))((props) => <Radio color="default" {...props} />);

export default CustomRadio;