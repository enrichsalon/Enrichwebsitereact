import styled from "@emotion/styled"
import { FormLabel, TextField } from '@mui/material';

const Input = styled(TextField)({
    "& label.Mui-focused": {
      color: "#555554",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        color: "#2B2A29",
        borderRadius: "0px",
        border: "1px solid #D5D5D5",
      },
      "&.Mui-focused fieldset": {
        borderRadius: "0px",
        color: "#2B2A29",
        border: "1px solid black",
      }
    }
  });
  
  export default Input;