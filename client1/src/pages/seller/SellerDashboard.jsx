import React, { useState } from 'react'
import AddProduct from './pages/AddProduct'
import { Box, CssBaseline, Divider, IconButton, List, Toolbar, Typography } from '@mui/material'
import { AppBar, Drawer, NavLogo } from '../../utils/styles';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import ListIcon from '@mui/icons-material/List';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AccountMenu from './components/AccountMenu';
import CloseIcon from '@mui/icons-material/Close';
import SideBar from './components/SideBar';
import Logout from '../Logout';
import SellerHomePage from './pages/SellerHomePage';
import SellerProfile from './pages/SellerProfile';
import ShowCustomers from './pages/ShowCustomers';
import ShowOrders from './pages/ShowOrders';
import ShowProducts from './pages/ShowProducts';
import ViewProductSeller from './pages/ViewProductSeller';

const SellerDashboard = () => {
    const [open, setOpen] = useState(false);
    const toggleDrawer = () => {
        setOpen(!open);
    }
    const { currentRole } = useSelector(state => state.user);
    const navigate = useNavigate();
    const homeHandler = () => {
        navigate("/")
    };
    return (
        <>
            {/* <AddProduct /> */}
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar open={open} position='absolute' sx={{ backgroundColor: "#4d1c9c" }}>
                    <Toolbar sx={{ pr: '24px' }}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label='open drawer'
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: "36px",
                                ...(open && { display: 'none' })
                            }}
                        >
                            <ListIcon />
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{
                                mr: 2,
                                flexGrow: 1,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                cursor: "pointer"
                            }}
                        >
                            <NavLogo
                                to="top"
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={homeHandler}
                            >
                                <LocalMallIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                                GoShop
                            </NavLogo>
                        </Typography>
                        <Typography
                            variant="h5"
                            noWrap
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            <NavLogo
                                to="top"
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={homeHandler}
                            >
                                <LocalMallIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />

                                GoShop
                            </NavLogo>
                        </Typography>
                        <AccountMenu />
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant='permanent'
                    open={open}
                    sx={open ? StyleSheet.drwerStyled : styles.hideDrawer}
                >
                    <Toolbar sx={styles.toolBarStyled}>
                        <IconButton onClick={toggleDrawer}>
                            <CloseIcon />
                        </IconButton>
                    </Toolbar>
                    <Divider />
                    <List component="nav">
                        <SideBar />
                    </List>
                </Drawer>
                <Box component="main" sx={styles.boxStyled}>
                    <Toolbar />
                    <Routes>
                        <Route path="/" element={<SellerHomePage />} />
                        <Route path='*' element={<Navigate to="/" />} />
                        <Route path="/Seller/dashboard" element={<SellerHomePage />} />
                        <Route path='/Seller/profile' element={<SellerProfile />} />

                        <Route path="/Seller/addproduct" element={<AddProduct />} />
                        <Route path='/Seller/products' element={<ShowProducts />} />
                        <Route path='/Seller/products/product/:id' element={<ViewProductSeller />} />

                        <Route path='/Seller/orders' element={<ShowOrders />} />
                        <Route path='/Seller/orders/customers/:id' element={<ShowCustomers />} />
                        <Route path="/logout" element={<Logout />} />
                    </Routes>
                </Box>
            </Box>
        </>
    )
}

export default SellerDashboard

const styles = {
    boxStyled: {
        backgroundColor: (theme) =>
            theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    toolBarStyled: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        px: [1],
    },
    drawerStyled: {
        display: "flex"
    },
    hideDrawer: {
        display: 'flex',
        '@media (max-width: 600px)': {
            display: 'none',
        },
    },
}