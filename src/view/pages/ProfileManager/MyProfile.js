import { useState } from "react";
import styled from "@emotion/styled";
import InputField from "../../../Atomics/input";
import { OutlineButton, SolidButton } from "../../../Atomics/buttons";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import { Heading } from "../../../Atomics/heading";
import { StyledBox, Column } from "../../../Atomics/containers";
import { Box } from "@mui/material";

const RadioIcon = () => {
	return (
		<svg
			style={{ marginRight: "5px" }}
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			viewBox="0 0 18 18"
		>
			<g transform="translate(-320 -472)">
				<rect
					class="a"
					style={{ fill: "#eb6165" }}
					width="18"
					height="18"
					rx="9"
					transform="translate(320 472)"
				/>
				<path
					class="b"
					style={{
						fill: "none",
						stroke: "#fff",
						strokeLinecap: "round",
						strokeWidth: "1.5px",
					}}
					d="M1353-2861.708l2.23,2.229,4.784-5.064"
					transform="translate(-1027.507 3343.01)"
				/>
			</g>
		</svg>
	);
};

const StyledRadioButton = styled.button`
	display: flex;
	justify-content: space-between;
	border-radius: 0px;
	border: 1px solid;
	font-size: 0.9em;
	background-color: transparent;
	border-color: ${(props) =>
		props.value === props.text ? "#EB6165" : "#2B2A29"};
	padding: 0.55em 1em;
	font-weight: 500;
	color: ${(props) => (props.value === props.text ? "#EB6165" : "#2B2A29")};
`;

const RadioButton = (props) => {
	return (
		<>
			<StyledRadioButton {...props}>
				{props.value === props.text ? <RadioIcon /> : ""}
				{props.text}
			</StyledRadioButton>
		</>
	);
};

 const MyProfile = (props) => {
	const [value, setValue] = useState(new Date("2014-08-18T21:11:54"));

	const handleChange = (newValue) => {
		setValue(newValue);
	};
	return (
		<StyledBox>
			<Heading>Personal Information</Heading>
			<Column>
				<InputField
					inputProps={{ maxLength: 30 }}
					margin="normal"
					id="outlined-basic"
					label="Outlined"
					variant="outlined"
					label="Full Name"
					defaultValue={props.firstName + " " + props.lastName}
				/>
				<div
					style={{
						width: "90%",
						display: "flex",
						justifyContent: "space-evenly",
						alignItems: "center",
						backgroundColor: "transparent",
					}}
				>
					<p>Your Gender</p>
					<RadioButton value={props.gender} text={"Male"} />
					<RadioButton value={props.gender} text={"Female"} />
				</div>
				<InputField
					id="outlined-error"
					label="Error"
					margin="normal"
					id="outlined-basic"
					label="Outlined"
					variant="outlined"
					label="Email"
					defaultValue={props.email}
					style={{ marginBottom: "1.25em" }}
					helperText="Please enter a valid email address"
				/>
				<div
					style={{
						display: "flex",
						justifyContent: "space-evenly",
						alignItems: "stretch",
					}}
				>
					<InputField
						margin="none"
						id="outlined-basic"
						label="Outlined"
						variant="outlined"
						label="Mobile Number"
						inputProps={{ maxLength: 10 }}
						style={{ width: "100%" }}
						defaultValue={props.contact}
					/>
					<OutlineButton size="large" text="CHANGE">
						Medium
					</OutlineButton>
				</div>
				<MobileDatePicker
					label="Birthday"
					inputFormat="MM/dd/yyyy"
					value={value}
					onChange={handleChange}
					renderInput={(params) => <InputField margin="normal" {...params} />}
					defaultValue={props.dateOfBirth}
				/>
				<InputField
					margin="normal"
					id="outlined-basic"
					label="Outlined"
					variant="outlined"
					label="Location"
					defaultValue={props.location}
				/>
				<Box
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-evenly",
						height: "100px",
						backgroundColor: "transparent",
					}}
				>
					<OutlineButton text="CHANGE PASSWORD" />
					<SolidButton text="EDIT DETAILS" />
				</Box>
			</Column>
		</StyledBox>
	);
};

export default MyProfile;