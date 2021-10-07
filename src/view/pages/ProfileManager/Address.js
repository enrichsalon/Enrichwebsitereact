import { useState } from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import { Heading } from "../../../../src/Atomics/heading";
import { StyledBox, Column } from "../../../../src/Atomics/containers";

const AddressBox = styled(Box)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	background-color: transparent;
	border: 1px solid #d5d5d582;
	margin: 0.35em 0em;
	padding: 1em;
	width: 60ch;
	word-wrap: break-word;
`;

const AddIcon = () => {
	return (
		<svg
			width="22"
			height="22"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z"
				fill="currentColor"
			/>
		</svg>
	);
};

const DeleteIcon = () => {
	return (
		<svg
			style={{ marginRight: "5px" }}
			xmlns="http://www.w3.org/2000/svg"
			width="12.183"
			height="15"
			viewBox="0 0 12.183 15"
		>
			<path
				style={{ fill: "#2b2a29" }}
				class="a"
				d="M222.749,154.7a.351.351,0,0,0-.351.351v6.639a.351.351,0,0,0,.7,0v-6.639A.351.351,0,0,0,222.749,154.7Zm0,0"
				transform="translate(-214.585 -149.268)"
			/>
			<path
				style={{ fill: "#2b2a29" }}
				class="a"
				d="M104.749,154.7a.351.351,0,0,0-.351.351v6.639a.351.351,0,0,0,.7,0v-6.639A.351.351,0,0,0,104.749,154.7Zm0,0"
				transform="translate(-100.731 -149.268)"
			/>
			<path
				style={{ fill: "#2b2a29" }}
				class="a"
				d="M.994,4.464v8.655a1.938,1.938,0,0,0,.515,1.337A1.73,1.73,0,0,0,2.765,15H9.411a1.729,1.729,0,0,0,1.255-.543,1.938,1.938,0,0,0,.515-1.337V4.464a1.342,1.342,0,0,0-.344-2.639h-1.8V1.386A1.38,1.38,0,0,0,7.648,0H4.528A1.38,1.38,0,0,0,3.137,1.386v.439h-1.8A1.342,1.342,0,0,0,.994,4.464ZM9.411,14.3H2.765A1.113,1.113,0,0,1,1.7,13.119V4.495h8.782v8.624A1.113,1.113,0,0,1,9.411,14.3ZM3.84,1.386A.677.677,0,0,1,4.528.7H7.648a.677.677,0,0,1,.689.685v.439H3.84Zm-2.5,1.142h9.5a.632.632,0,1,1,0,1.265h-9.5a.632.632,0,1,1,0-1.265Zm0,0"
				transform="translate(0.003 0.002)"
			/>
			<path
				style={{ fill: "#2b2a29" }}
				class="a"
				d="M163.749,154.7a.351.351,0,0,0-.351.351v6.639a.351.351,0,0,0,.7,0v-6.639A.351.351,0,0,0,163.749,154.7Zm0,0"
				transform="translate(-157.658 -149.268)"
			/>
		</svg>
	);
};

const EditIcon = () => {
	return (
		<svg
			style={{ marginRight: "5px" }}
			xmlns="http://www.w3.org/2000/svg"
			width="15.69"
			height="15.502"
			viewBox="0 0 15.69 15.502"
		>
			<g transform="translate(0.1 0.1)">
				<path
					style={{ fill: "#2b2a29", stroke: "#2b2a29", strokeWidth: "0.2px" }}
					class="a"
					d="M14.195,47.285a.383.383,0,0,0-.383.383v3.4a1.15,1.15,0,0,1-1.149,1.149H1.915A1.15,1.15,0,0,1,.766,51.069V41.087a1.15,1.15,0,0,1,1.149-1.149h3.4a.383.383,0,1,0,0-.766h-3.4A1.917,1.917,0,0,0,0,41.087v9.982a1.917,1.917,0,0,0,1.915,1.915H12.663a1.917,1.917,0,0,0,1.915-1.915v-3.4a.383.383,0,0,0-.383-.383Zm0,0"
					transform="translate(0 -37.682)"
				/>
				<path
					style={{ fill: "#2b2a29", stroke: "#2b2a29", strokeWidth: "0.2px" }}
					class="a"
					d="M118.472.766a1.724,1.724,0,0,0-2.438,0L109.2,7.6a.383.383,0,0,0-.1.169l-.9,3.244a.383.383,0,0,0,.471.471l3.244-.9a.383.383,0,0,0,.169-.1l6.833-6.834a1.726,1.726,0,0,0,0-2.438Zm-8.437,7.082,5.593-5.593,1.8,1.8-5.593,5.593Zm-.36.723,1.441,1.441-1.993.552Zm8.7-5.46-.406.406-1.8-1.8.406-.406a.957.957,0,0,1,1.354,0l.45.449A.959.959,0,0,1,118.38,3.111Zm0,0"
					transform="translate(-104.046 -0.261)"
				/>
			</g>
		</svg>
	);
};

function AddressList(props) {
	const addressItems = props.address.map((addressItem) => (
		<AddressBox key={addressItem.id}>
			<span style={{ fontWeight: "500", padding: "0.25em" }}>
				{addressItem.addressName + ", " + addressItem.pincode}
			</span>
			<span style={{ padding: "0.25em" }}>
				{addressItem.fullAddress + " - " + addressItem.cityCode}
			</span>

			<div>
				<Button variant="text" style={{ fontWeight: "500", color: "#2B2A29" }}>
					<EditIcon />
					EDIT
				</Button>
				<Button variant="text" style={{ fontWeight: "500", color: "#2B2A29" }}>
					<DeleteIcon />
					REMOVE
				</Button>
			</div>
		</AddressBox>
	));
	return <>{addressItems}</>;
}

export const MyAddress = (props) => {
	const [value, setValue] = useState(new Date("2014-08-18T21:11:54"));

	const handleChange = (newValue) => {
		setValue(newValue);
	};
	return (
		<StyledBox>
			<Heading>Manage Addresses</Heading>
			<Column>
				<Button variant="outlined" style={{fontWeight: "500", borderRadius: "0"}}><AddIcon />Add New Address</Button>
				<AddressList address={props.address} />
			</Column>
		</StyledBox>
	);
};
