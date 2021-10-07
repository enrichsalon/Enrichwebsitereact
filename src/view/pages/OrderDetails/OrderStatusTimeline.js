import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CircleIcon from '@mui/icons-material/Circle';

const statusList = [{
    status: "Order Placed",
    date: "01-Feb-2021"
}, {
    status: "Confirmed",
    date: "01-Feb-2021"
}, {
    status: "Shipped",
    date: "01-Feb-2021"
}, {
    status: "Delivered",
    date: "01-Feb-2021"
}];

const useStyles = makeStyles({
    timeline: {
        display: 'inline-flex',
        fontSize: 14
    },
    completedStepIcon: {
        color: "#1EAF67",
        height: '16px !important'
    },
    todoStepIcon: {
        color: "#AAAAAA",
        height: '16px !important'
    },
    timelineStepTitle: {
        textAlign: 'center',
        minWidth: 100
    },
    timelineStepDate: {
        textAlign: 'center',
        fontSize: 12
    },
    timelineConnector: {
        display: 'flex',
        margin: '5px 0'
    },
    timelineIconsConnectorLine: {
        width: '100%',
        position: 'relative',
        marginBottom: 7,
        marginLeft: -6,
        marginRight: -7,
        borderBottom: '2px solid #000'
    },
    timelineIcon: {
        position: 'relative',
        top: '3px'
    }
});

const OrderStatusTimeline = () => {
    const classes = useStyles();

    return (
        <Box className={classes.timeline}>
            {
                statusList.map((item, index) => {
                    const isCompleted = index < 2;
                    return <div key={index}>
                        <div className={classes.timelineStepTitle} style={{ color: isCompleted ? '#1EAF67' : 'inherit' }}>{item.status}</div>
                        <div className={classes.timelineConnector}>
                            <div className={classes.timelineIconsConnectorLine} style={{ borderColor: index < 2 ? '#1EAF67' : 'inherit', visibility: index === 0 ? 'hidden' : 'visible' }}></div>
                            <div className={classes.timelineIcon}>{isCompleted ? <CheckCircleIcon className={classes.completedStepIcon} /> : <CircleIcon className={classes.todoStepIcon} />}</div>
                            <div className={classes.timelineIconsConnectorLine} style={{ borderColor: index < 1 ? '#1EAF67' : 'inherit', visibility: index === statusList.length - 1 ? 'hidden' : 'visible' }}></div>
                        </div>
                        <div className={classes.timelineStepDate}>{item.date}</div>
                    </div>
                })
            }
        </Box >
    );
}
export default OrderStatusTimeline;
