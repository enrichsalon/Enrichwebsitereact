const Data = {
	firstName: "Gautami",
	lastName: "Sen",
	gender: "Male",
	email: "gautamisen@example.com",
	contact: "97029512345",
	dateOfBirth: "19/06/1989",
	location: "Mumbai, Maharashtra",
	address: [
		{
			id: "01",
			addressName: "Aditya Sen",
			pincode: "400062",
            cityCode: "400092",
			fullAddress:
				"313 & 334, Satra Park Co.Op.Hsg, Shimpoli road, Borivali W, Mumbai, Maharashtra",
		},
		{
			id: "02",
			addressName: "Aditya Sen",
			pincode: "400062",
            cityCode: "400092",
			fullAddress:
				"313 & 334, Satra Park Co.Op.Hsg, Shimpoli road, Borivali W, Mumbai, Maharashtra",
		},
	],
    cashAmount: "2315",
    transactionLog: [
        {
			id: "01",
			transactionAction: "Added Gift Card: EN124569",
			transactionAmount: "2560",
			transactionDate: "22-Feb-2021",
			isDebited: false,
		},
        {
			id: "02",
			transactionAction: "Added Gift Card: EN124569",
			transactionAmount: "2560",
			transactionDate: "22-Feb-2021",
			isDebited: true,
		},
    ]
};

export default Data;