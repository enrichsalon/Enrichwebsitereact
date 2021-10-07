import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import { AppBar, Box, Toolbar, IconButton, InputBase, Badge, Divider, Button, Menu } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import svgIcons from '../../../../asset/svg';
import { colors } from '../../../../theme/colors';
import { makeStyles } from '@mui/styles';
import * as R from "ramda";
import { HEADER_TABS, OVERLAY_VIEW_TABS } from '../../../../constants/pageHeaderConstants';
import PageSubHeader from './PageSubHeader';
import { useHistory } from 'react-router';
import { RoutePaths } from '../../../route/PageRoutesConstant';
import BrandsMegaMenu from '../../../pages/MegaMenu/BrandsMegaMenu/BrandsMegaMenu';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: colors.white,
    paddingLeft: "5ch",
    paddingRight: "5ch",
    boxShadow: "none",
    borderBottom: "none"
}))

const StyledLoginButton = styled(Button)(({ theme }) => ({
    color: colors.gray2,
    paddingLeft: "1rem",
    paddingRight: "1rem"
}));

const useStyle = makeStyles(theme => ({
    headerIcons: {
        color: colors.gray2
    },
    pageHeaderContainer: {
        boxShadow: "0px 0px 10px 5px #0000001a"
    },
    menuContainer: {
        marginTop: "1%",
        width: "90%",
        height: "80%"
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background: "#7cc2ae",
        width: 200,
        height: 300
    },
    overlay: {
        background: "rgba(255,255,255,0.5)",
        zIndex: 9999,
    }
}))


const PageHeader = () => {
    const history = useHistory();
    const classes = useStyle();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        console.log("I am hit !!!")
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    const handleClick = (event, tabId) => {
        if (OVERLAY_VIEW_TABS.includes(tabId)) {
            setAnchorEl(event.currentTarget);
        } else {
            history.push(RoutePaths[tabId]);
        }
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={useStyle}
                // contentLabel="Example Modal"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Login</h2>
                <button onClick={closeModal}>close</button>
                <div>I am a modal</div>
                <form>
                    <input />
                    <button>tab navigation</button>
                    <button>stays</button>
                    <button>inside</button>
                    <button>the modal</button>
                </form>
            </Modal>
            <Box sx={{ flexGrow: 1 }} className={classes.pageHeaderContainer}>
                <StyledAppBar position="static">
                    <Toolbar>
                        <IconButton size="large" color="inherit" onClick={() => history.push(RoutePaths.home)}>
                            <img src={svgIcons.Enrich_Logo} />
                        </IconButton>
                        <div>
                            {
                                R.map(tab => {
                                    return (
                                        <StyledLoginButton variant="text" key={tab.id} onClick={(e) => handleClick(e, tab.id)}>
                                            {tab.label}
                                        </StyledLoginButton>
                                    )
                                }, HEADER_TABS)
                            }
                        </div>
                        {/* Search Component */}
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <StyledLoginButton variant="text" endIcon={<PersonOutlineIcon />} 
                            // onClick={() =>
                            //     openModal
                            //     // history.push(RoutePaths.profile)
                            // }
                            onClick={openModal}
                            >
                                Login
                            </StyledLoginButton>
                            <Divider orientation="vertical" flexItem light />
                            <IconButton size="large" aria-label="show 4 new mails" color="inherit" onClick={() => history.push(RoutePaths.wishlist)}>
                                <Badge badgeContent={4} color="error">
                                    <FavoriteBorderIcon className={classes.headerIcons} />
                                </Badge>
                            </IconButton>
                            <IconButton
                                size="large"
                                aria-label="show 17 new notifications"
                                color="inherit"
                            >
                                <Badge badgeContent={17} color="error">
                                    <ShoppingBagIcon className={classes.headerIcons} />

                                </Badge>
                            </IconButton>
                        </Box>
                    </Toolbar>
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
                        <BrandsMegaMenu />
                    </Menu>
                </StyledAppBar>
                <PageSubHeader />
            </Box>
        </>
    );
};

export default PageHeader;