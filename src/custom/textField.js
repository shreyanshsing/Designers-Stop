import {TextField,withStyles} from "@material-ui/core";

const CustomTextField = withStyles((theme)=>({
    root: {
        color:theme.palette.primary,
        '& label.Mui-focused': {
          color: theme.palette.primary,
        },
        '& .MuiInput-underline:after': {
          color:theme.palette.primary,
          borderBottomColor: theme.palette.primary,
        },
        '& .MuiOutlinedInput-root': {
            color:theme.palette.primary,
          '& fieldset': {
            color:theme.palette.primary,
            borderColor: theme.palette.primary,
          },
          '&:hover fieldset': {
            color:theme.palette.primary,
            borderColor: theme.palette.primary,
          },
          '&.Mui-focused fieldset': {
            color:theme.palette.primary,
            borderColor: theme.palette.primary,
          },
        },
      },
}))(TextField);

export default CustomTextField;