import { AppBar, Avatar, Box, Button, Container, Divider, ListItemIcon, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React from 'react'

import { styled } from 'styled-components';
import { NavLogo } from '../utils/styles';
import { LocalMallOutlined, Store } from '@mui/icons-material';
import Search from './customer/components/Search';
import ProductMenu from './customer/components/ProductMenu';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <AppBar position='sticky'>
            <Container maxWidth='xl' sx={{ backgroundColor: "#4d1c9c" }}>
                <Toolbar disableGutters>
                    <HomeContainer>
                        <Typography
                            variant='h6'
                            noWrap
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none'
                            }}
                        >
                            <NavLogo
                                to="top"
                                activeClass='active'
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}

                            >
                                <LocalMallOutlined sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                                GoShop
                            </NavLogo>
                        </Typography>
                    </HomeContainer>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, }}>
                        <Search />
                        <ProductMenu dropName="Categories" />
                        <ProductMenu dropName="Products" />
                    </Box>

                    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }, }}>
                        <Button
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Sign In
                        </Button>
                        <Menu
                            id="menu-appbar"
                            PaperProps={{
                                elevation: 0,
                                sx: styles.styledPaper,
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                            <MenuItem >
                                <Avatar />
                                <Link to="/Customerlogin">
                                    Sign in as customer
                                </Link>
                            </MenuItem>
                            <Divider />
                            <MenuItem>
                                <ListItemIcon>
                                    <Store fontSize="small" />
                                </ListItemIcon>
                                <Link>
                                    Sign in as seller
                                </Link>
                            </MenuItem>


                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    )
}

export default Navbar

const HomeContainer = styled.div`
  display: flex;
  cursor:pointer;
`;

const styles = {
    styledPaper: {
        overflow: 'visible',
        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
        mt: 1.5,
        '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
        },
        '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
        },
    }
}