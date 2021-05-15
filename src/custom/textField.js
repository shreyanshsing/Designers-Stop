import {TextField,withStyles} from "@material-ui/core";

const CustomTextField = withStyles((theme)=>({
    root: {
        color:"#ff0066",
        '& label.Mui-focused': {
          color: '#ff0066',
        },
        '& .MuiInput-underline:after': {
            color:"#ff0066",
          borderBottomColor: '#ff0066',
        },
        '& .MuiOutlinedInput-root': {
            color:"#ff0066",
          '& fieldset': {
            color:"#ff0066",
            borderColor: '#ff0066',
          },
          '&:hover fieldset': {
            color:"#ff0066",
            borderColor: '#ff0066',
          },
          '&.Mui-focused fieldset': {
            color:"#ff0066",
            borderColor: '#ff0066',
          },
        },
      },
}))(TextField);

export default CustomTextField;