import { useState } from "react";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import SimpleAccordion from "../../../../src/Atomics/Accordian";
import { Heading } from "../../../../src/Atomics/heading";
import { StyledBox, Row } from "../../../../src/Atomics/containers";

const WalletDashHeader = styled(Box)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: white;
	border-bottom: 1px solid #f1f1f1;
`;

const EnrichCashDash = (props) => {
	return (
		<>
			<WalletDashHeader>
				<h2>Available Enrich Cash </h2>
				<h1>₹{props.cashAmount}</h1>
			</WalletDashHeader>
			<Row>
				<div
					style={{
						padding: "1em 1.05em 1em 1em",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						borderRight: "2px solid #F1F1F1",
					}}
				>
					<h2>For Quick Checkout</h2>
					<h3 style={{ cursor: "pointer", color: "#EB6165" }}>TOP UP</h3>
				</div>
				<div
					style={{
						padding: "1em",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<h2>Have A Gift Card?</h2>
					<h3 style={{ cursor: "pointer", color: "#EB6165" }}>ADD GIFT CARD</h3>
				</div>
			</Row>
			<SimpleAccordion transactions={props.transactionLog} />
		</>
	);
};

const GiftTabs = (props) => {
	const [value, setValue] = useState("1");

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<>
			<TabContext value={value}>
				<Box
					sx={{
						borderBottom: 0,
						borderColor: "divider",
						backgroundColor: "transparent",
					}}
				>
					<TabList onChange={handleChange} aria-label="Wallet Tabs">
						<Tab label="All" value="1" />
						<Tab label="Earned" value="2" />
						<Tab label="Spent" value="3" />
					</TabList>
				</Box>
				<TabPanel value="1">
					<SimpleAccordion transactions={props.transactionLog} />
				</TabPanel>
				<TabPanel value="2">
					<SimpleAccordion transactions={props.transactionLog} />
				</TabPanel>
				<TabPanel value="3">
					<SimpleAccordion transactions={props.transactionLog} />
				</TabPanel>
			</TabContext>
		</>
	);
};

const EnrichGiftDash = (props) => {
	return (
		<>
			<WalletDashHeader>
				<h2>Available Reward Points </h2>
				<h1>₹{props.cashAmount}</h1>
			</WalletDashHeader>
			<GiftTabs {...props} />
		</>
	);
};

const CashTabs = (props) => {
	const [value, setValue] = useState("1");

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<>
			<TabContext value={value}>
				<Box
					sx={{
						borderBottom: 0,
						borderColor: "divider",
						backgroundColor: "transparent",
					}}
				>
					<TabList onChange={handleChange} aria-label="Wallet Tabs">
						<Tab label="Enrich Cash" value="1" />
						<Tab label="Reward Points" value="2" />
					</TabList>
				</Box>
				<TabPanel value="1">{EnrichCashDash(props)}</TabPanel>
				<TabPanel value="2">{EnrichGiftDash(props)}</TabPanel>
			</TabContext>
		</>
	);
};

export const MyWallet = (props) => {
	return (
		<StyledBox>
			<Heading>Enrich Wallet</Heading>
			<div>
				<CashTabs {...props} />
			</div>
		</StyledBox>
	);
};
