import { useState } from "react";
import styled from "@emotion/styled";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import { Button } from "@mui/material";

const DropDownArrowIcon = () => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M17.6569 16.2427L19.0711 14.8285L12.0001 7.75739L4.92896 14.8285L6.34317 16.2427L12.0001 10.5858L17.6569 16.2427Z"
				fill="currentColor"
			/>
		</svg>
	);
};

const StyledAccordion = styled((props) => (
	<Accordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
	border: `1px solid ${theme.palette.divider}`,
	"&:not(:last-child)": {
		borderBottom: 0,
	},
	"&:before": {
		display: "none",
	},
}));

function TransactionList(data) {
	const transactions = data.transactions.map((transactionItem) => (
		<AccordionSummary
			style={{ padding: "0.1em 1em", borderBottom: "1px solid #F1F1F1" }}
			key={transactionItem.id}
		>
			<div
				style={{
					width: "100%",
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<div>
					<span>{transactionItem.transactionAction}</span>
                    <p>{transactionItem.transactionDate}</p>
				</div>
				<span>{transactionItem.transactionAmount}</span>
			</div>
		</AccordionSummary>
	));
	return <>{transactions}</>;
}

export default function SimpleAccordion(data) {
	const [isExpanded, setIsExpanded] = useState(true);
	return (
		<div>
			<StyledAccordion expanded={isExpanded} elevation={0} disableGutters={1}>
				<AccordionSummary
					onClick={() => {
						setIsExpanded(!isExpanded);
					}}
					expandIcon={<DropDownArrowIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>	
				<div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start"}}>
					<img src="transaction.png" style={{height: "1em", marginRight: "8px"}}></img>
					<p>Transaction Log</p>
				</div>
				</AccordionSummary>
				<TransactionList {...data} />
				<Button style={{ width: "100%" }} variant="text">
					SHOW MORE
				</Button>
			</StyledAccordion>
		</div>
	);
}
