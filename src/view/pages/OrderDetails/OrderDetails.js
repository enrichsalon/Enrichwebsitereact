import React from "react";
import { Box, colors } from '@mui/material';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { BODY_BG } from '../../../constants/colors';
import { ReactComponent as OrderDetailsIcon } from '../../../asset/svg/order_details.svg';
import { ReactComponent as VisaIcon } from '../../../asset/svg/visa.svg';
import orderProductItem from '../../../asset/images/myOrders/order_product_item.png';
import StarIcon from '@mui/icons-material/Star';
import reorder from '../../../asset/images/myOrders/reorder.png';
import OrderStatusTimeline from "./OrderStatusTimeline";

const useStyle = makeStyles(() => ({
    homeContainer: {
        backgroundColor: BODY_BG,
        color: '#2B2A29',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '30px 15vw',
    },
    section: {
        width: '100%',
        textAlign: 'left'
    },
    sectionHeader: {
        backgroundColor: colors.common.white,
        padding: '15px 30px'
    },
    orderHeaderData: {
        display: 'flex',
        flexDirection: 'row'
    },
    orderHeaderDataContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    separator: {
        color: '#555554',
        margin: '0 10px',
        lineHeight: '18px'
    },
    b: {
        fontWeight: 500
    },
    downloadButton: {
        borderRadius: '0 !important'
    },
    orderAddressPaymentSummary: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        marginTop: 10
    },
    address: {
        width: '35%',
        marginRight: 3,
        backgroundColor: colors.common.white,
        padding: 15,
        paddingLeft: 30
    },
    addressDetails: {
        padding: '10px 0'
    },
    payment: {
        width: '30%',
        marginRight: 3,
        backgroundColor: colors.common.white,
        padding: 15
    },
    cardPayment: {
        display: 'flex',
        alignItems: 'center'
    },
    cardPaymentIcon: {
        color: "#293688",
        fill: "#293688"
    },
    summary: {
        width: '35%',
        backgroundColor: colors.common.white,
        padding: 15
    },
    title: {
        margin: 0,
        marginBottom: 15,
        fontWeight: 700
    },
    summaryTitle: {
        marginLeft: 15
    },
    statusContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
        backgroundColor: colors.common.white,
        padding: '15px 30px',
        justifyContent: 'space-between'
    },
    summaryItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: '10px 5px',
        marginLeft: 15
    },
    horizontalSeparator: {
        backgroundColor: '#D5D5D5',
        borderBottom: '1px solid #D5D5D5'
    },
    orderData: {
        display: 'flex',
        flexDirection: 'row',
        width: '40%'
    },
    orderImage: {
        padding: 0
    },
    orderMetadata: {
        lineHeight: '26px'
    },
    productName: {
        fontSize: 17,
        fontWeight: 500
    },
    amount: {
        fontWeight: 500
    },
    quantity: {
        fontWeight: 500,
        fontSize: 15
    },
    orderStatusData: {
        padding: '0 15px'
    },
    orderStatusTitle: {
        marginBottom: 15
    },
    actionButton: {
        color: '#2B2A29 !important'
    },
    actionButtonText: {
        fontWeight: 500
    },
    orderActions: {
        display: 'flex',
        flexDirection: 'column',
        "& .MuiButton-root": {
            borderColor: "#E3E3E3 !important",
            borderRadius: 0,
            margin: '5px 0',
            padding: 10
        }
    }
}));

const getOrderActions = (item, classes) => {
    const status = item.appointment_status || 'completed';
    switch (status) {
        case 'completed':
            return <>
                <Button variant="outlined" className={classes.actionButton} startIcon={<StarIcon style={{ color: "#FFB917" }} />}>
                    <span className={classes.actionButtonText}>Rate Service</span>
                </Button>
                <Button variant="outlined" className={classes.actionButton} alt="View Details">
                    <span className={classes.actionButtonText}>Return Product</span>
                </Button>
            </>
        case 'cancelled':
            return <Button variant="outlined" className={classes.actionButton} startIcon={<img src={reorder} alt="Buy It Again" />}>
                <span className={classes.actionButtonText}>Buy It Again</span>
            </Button>
        default:
            return <>
                <Button variant="outlined" className={classes.actionButton} startIcon={<img src={reorder} alt="Reorder" />}>
                    <span className={classes.actionButtonText}>Reorder</span>
                </Button>
            </>
    }
}

const OrderDetails = () => {
    const classes = useStyle();
    return (
        <Box className={classes.homeContainer}>
            <Box className={classes.section}>
                <div className={classes.sectionHeader}>
                    <h3>Order Details</h3>
                    <div className={classes.orderHeaderDataContainer}>
                        <div className={classes.orderHeaderData}>
                            <div>
                                Order ID: <b className={classes.b}>SO-ECOMWH-2020-000095160</b>
                            </div>
                            <div className={classes.separator}> | </div>
                            <div>
                                Order placed: <b className={classes.b}>on 01-February-2021</b>
                            </div>
                        </div>
                        <div>
                            <Button className={classes.downloadButton} variant="outlined" startIcon={<OrderDetailsIcon />}>DOWNLOAD INVOICE</Button>
                        </div>
                    </div>
                </div>
                <div className={classes.orderAddressPaymentSummary}>
                    <div className={classes.address}>
                        <div className={classes.title}>Delivery Address</div>
                        <div>
                            <div>
                                <b className={classes.b}>Aditya Sen, 400062</b>
                            </div>
                            <div className={classes.addressDetails}>
                                313 & 334, Satra Park Co.Op.Hsg, Shimpoli road, Borivali W,<br />
                                Mumbai, Maharashtra - 400092<br />
                                India
                            </div>
                            <div>
                                Phone Number: <b className={classes.b}>+91-970259 12345</b>
                            </div>
                        </div>
                    </div>
                    <div className={classes.payment}>
                        <div className={classes.title}>Payment Method</div>
                        <div className={classes.cardPayment}>
                            <VisaIcon className={classes.cardPaymentIcon} />
                            <span>&nbsp;&nbsp; **** 3207</span>
                        </div>
                    </div>
                    <div className={classes.summary}>
                        <div className={`${classes.title} ${classes.summaryTitle}`}>Order Summary</div>
                        <div>
                            <div>
                                <div className={classes.summaryItem}>
                                    <div>Total MRP</div>
                                    <div><b className={classes.b}>₹6,499</b></div>
                                </div>
                                <div className={classes.summaryItem}>
                                    <div>Discount On MRP</div>
                                    <div><b className={classes.b}>₹6,499</b></div>
                                </div>
                                <div className={classes.summaryItem}>
                                    <div>Coupon Discount</div>
                                    <div><b className={classes.b}>₹6,499</b></div>
                                </div>
                                <div className={classes.summaryItem}>
                                    <div>Shipping Charge</div>
                                    <div><b className={classes.b}>₹6,499</b></div>
                                </div>
                            </div>
                            <div className={classes.horizontalSeparator}></div>
                            <div className={classes.summaryItem}>
                                <div><b className={classes.b}>Amount Paid</b></div>
                                <div><b className={classes.b}>₹6,199</b></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.statusContainer}>
                    <div className={classes.orderData}>
                        <div className={classes.orderImage}>
                            <img src={orderProductItem} />
                        </div>
                        <div className={classes.orderMetadata}>
                            <div className={classes.productName}>
                                Mon Amour Splash Nail Enamel 25ml
                            </div>
                            <div className={classes.quantity}>Quantity: 2</div>
                            <div className={classes.amount}>₹3,000</div>
                        </div>
                    </div>
                    <div className={classes.orderStatusData}>
                        <div className={classes.orderStatusTitle}>
                            <b>Order Status</b>
                        </div>
                        <div>
                            <OrderStatusTimeline />
                        </div>
                    </div>
                    <div className={classes.orderActions}>
                        {getOrderActions({}, classes)}
                    </div>
                </div>
            </Box>
        </Box>
    )
}

export default OrderDetails;