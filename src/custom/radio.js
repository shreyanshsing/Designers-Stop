import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { green, pink } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';

const CustomRadio = withStyles({
  root: {
    color: "#ff0066",
    '&$checked': {
      color: "#ff0066",
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

export default CustomRadio;