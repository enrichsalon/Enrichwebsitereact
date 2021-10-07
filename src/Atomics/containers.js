import styled from "@emotion/styled"
import { Box } from "@mui/material";

export const StyledBox = styled(Box)`
	display: flex;
	flex-direction: column;
	background-color: #ffffff;
	border: 1px solid #f1f1f1;
`;

export const Row = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Column = styled.div`
	display: flex;
	padding: 1em;
	flex-direction: column;
	justify-content: center;
	align-items: stretch;
`