import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { AppBar, Box, Toolbar, Button, Menu } from '@mui/material';
import { colors } from '../../../../theme/colors';
import { makeStyles } from '@mui/styles';
import * as R from "ramda";
import { OVERLAY_VIEW_TABS, SUB_HEADER_TABS } from '../../../../constants/pageHeaderConstants';
import MakeupMegaMenu from '../../../pages/MegaMenu/MakeupMegaMenu';
import { useHistory } from 'react-router';
import { RoutePaths } from '../../../route/PageRoutesConstant';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: colors.white,
    paddingLeft: "5ch",
    paddingRight: "5ch",
    borderTop: "none",
    boxShadow: "none",
    minHeight: "50px",
    height: "50px"
}))

const StyledTab = styled(Button)(({ theme }) => ({
    color: colors.gray2,
    paddingLeft: "1rem",
    paddingRight: "1rem"
}));

const StyledToolBar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    minHeight: "40px !important"
}))

const useStyle = makeStyles(theme => ({
    headerIcons: {
        color: colors.gray2
    },
    menuContainer: {
        marginTop: "1%",
        width: "90%",
        height: "80%"
    }
}))

const PageSubHeader = () => {
    const classes = useStyle();
    const history = useHistory();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event, tabId) => {
        if (OVERLAY_VIEW_TABS.includes(tabId)) {
            setAnchorEl(event.currentTarget);
        }else{
            history.push(RoutePaths[tabId]);
        }
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <StyledAppBar position="static">
                <StyledToolBar>
                    <div>
                        {
                            R.map(tab => {
                                return (
                                    <StyledTab variant="text" key={tab.id} onClick={(e) => handleClick(e, tab.id)}>
                                        {tab.label}
                                    </StyledTab>
                                )
                            }, SUB_HEADER_TABS)
                        }
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                            className={classes.menuContainer}
                        >
                            <MakeupMegaMenu />
                        </Menu>
                    </div>
                </StyledToolBar>
            </StyledAppBar>
        </Box >
    );
};

export default PageSubHeader;