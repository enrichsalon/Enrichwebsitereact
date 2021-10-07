import React from "react";
import { Box, colors } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import StarIcon from '@mui/icons-material/Star';
import orderServiceItem from '../../../asset/images/myOrders/order_service_item.png';
import orderProductItem from '../../../asset/images/myOrders/order_product_item.png';
import successIcon from '../../../asset/images/myOrders/success_icon.png';
import pendingIcon from '../../../asset/images/myOrders/pending.png';
import cancelledIcon from '../../../asset/images/myOrders/cancelled.png';
import orderDetails from '../../../asset/images/myOrders/order_details.png';
import reorder from '../../../asset/images/myOrders/reorder.png';

const imagesMap = { completed: successIcon, pending: pendingIcon, cancelled: cancelledIcon }

const useStyle = makeStyles(() => ({
    myOrderItem: {
        width: '100%',
        textAlign: 'left',
        backgroundColor: colors.common.white,
        color: '#2B2A29',
        marginTop: 10,
        marginBottom: 10,
        padding: '15px 0'
    },
    orderContent: {
        display: 'flex',
        flexDirection: 'row',
        padding: '15px 30px'
    },
    orderData: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    orderDataContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'space-between',
        width: '100%'
    },
    orderImage: {
        paddingRight: 30
    },
    orderMetadata: {
        lineHeight: '26px'
    },
    title: {
        fontSize: 17,
        fontWeight: 500
    },
    subTitle: {
        color: '#555554'
    },
    accessAlarmIcon: {
        fontSize: '18px !important',
        marginRight: 2,
        paddingBottom: 4
    },
    time: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        fontWeight: 500
    },
    amount: {
        fontWeight: 500
    },
    quantity: {
        fontWeight: 500,
        fontSize: 15
    },
    orderStatus: {
        textAlign: 'right',
        lineHeight: '28px'
    },
    status: {
        display: 'flex',
        flexDirection: 'row'
    },
    statusIcon: {
        height: 16,
        padding: 5
    },
    statusText: {
        textTransform: 'capitalize',
        fontWeight: 500
    },
    statusDate: {
        display: 'inline-flex'
    },
    actionButton: {
        alignSelf: 'center',
        color: '#2B2A29 !important',
    },
    actionButtonText: {
        alignSelf: 'center',
        fontWeight: 500
    },
    b: {
        fontWeight: 500
    },
    verticleLine: {
        alignSelf: 'center',
        height: '50%',
        width: 0.5,
        borderWidth: 0.5,
        borderColor: "#707070",
    },
    orderActions: {
        display: 'flex',
        flexDirection: 'row'
    }
}));

const getOrderStatus = (item, classes) => {
    const status = item.appointment_status || 'completed';
    return (
        <>
            <img
                className={classes.statusIcon}
                src={imagesMap[status] || pendingIcon}
            />
            <div className={classes.statusText}>
                {status}
            </div>
        </>
    )
}

const getServiceOrderActions = (item, classes) => {
    const status = item.appointment_status || 'completed';
    switch (status) {
        case 'completed':
            return <>
                <Button className={classes.actionButton} startIcon={<img src={orderDetails} alt="View Details" />}>
                    <span className={classes.actionButtonText}>View Details</span>
                </Button>
                <div className={classes.verticleLine}></div>
                <Button className={classes.actionButton} startIcon={<StarIcon style={{ color: "#FFB917" }} />}>
                    <span className={classes.actionButtonText}>Rate Service</span>
                </Button>
            </>
        case 'cancelled':
            return <Button className={classes.actionButton} startIcon={<img src={reorder} alt="Buy It Again" />}>
                <span className={classes.actionButtonText}>Buy It Again</span>
            </Button>
        default:
            return <>
                <Button className={classes.actionButton} startIcon={<img src={reorder} alt="Reorder" />}>
                    <span className={classes.actionButtonText}>Reorder</span>
                </Button>
            </>
    }
}

const MyOrderItem = ({ type, item }) => {
    const classes = useStyle();
    const isProductOrderItem = type === "PRODUCT";
    return (
        <Box className={classes.myOrderItem}>
            <div className={classes.orderContent}>
                <div className={classes.orderImage}>
                    <img src={isProductOrderItem ? orderProductItem : orderServiceItem} />
                </div>
                <div className={classes.orderDataContainer}>
                    <div className={classes.orderData}>
                        <div className={classes.orderMetadata}>
                            <div className={classes.title}>
                                {
                                    isProductOrderItem ?
                                        "Mon Amour Splash Nail Enamel 25ml"
                                        :
                                        "Born Ethical - Skin Brightening Facial"
                                }
                            </div>
                            {
                                !isProductOrderItem && <div className={classes.subTitle}>Men's Facial</div>
                            }
                            {
                                isProductOrderItem && <div className={classes.quantity}>Quantity: 2</div>
                            }
                            {
                                !isProductOrderItem && <div className={classes.time}><AccessAlarmIcon className={classes.accessAlarmIcon} /> 30mins</div>
                            }
                            <div className={classes.amount}>₹3,000</div>
                        </div>
                        <div className={classes.orderStatus}>
                            <div className={classes.statusDate}><div className={classes.status}>{getOrderStatus(item, classes)}</div>&nbsp;on 10th Aug 2021</div>
                            {
                                !isProductOrderItem && <>
                                    <div>Appointment for: <b className={classes.b}>Gautami Sen</b></div>
                                    <div>Salon: <b className={classes.b}>Tondon Mall, Andheri East</b></div>
                                </>
                            }
                            <div>Order ID: <b className={classes.b}>SO-ECOMWH-2020-000095160</b></div>
                            {
                                isProductOrderItem &&
                                <div>Order Placed: <b className={classes.b}>on 01-February-2021</b></div>
                            }
                        </div>
                    </div>
                    <div className={classes.orderActions}>
                        {
                            getServiceOrderActions(item, classes)
                        }
                    </div>
                </div>
            </div>
        </Box>
    )
}

export default MyOrderItem;
