import styled from "@emotion/styled";
import { Button } from "@mui/material";


const StyledSolidButton = styled(Button)`
  border-radius: 0px;
  padding: 0.55em 1.1em;
  font-weight: 600;
`;

export function SolidButton(props) {
    return(
        <StyledSolidButton color={props.color} disableElevation variant="contained" {...props}>{props.text}</StyledSolidButton>
    )
}  


export const StyledOutlineButton = styled(Button)`
  border-radius: 0px;
  padding: 0.45em 1.2em;
  font-weight: 600;
`;


export function OutlineButton(props) {
    return(
        <StyledOutlineButton color={props.color} variant="outlined" {...props}>{props.text}</StyledOutlineButton>
    )
}  

