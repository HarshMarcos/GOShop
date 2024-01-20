import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import { LightPurpleButton } from '../../../utils/buttonStyles'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const ProductMenu = ({ dropName }) => {
    return (
        <div style={{ marginLeft: "2rem" }}>
            <LightPurpleButton
                id='demo-customized-button'
                aria-controls=''
                aria-haspopup='true'
                disableElevation
            >
                {dropName}
            </LightPurpleButton>

            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
            >
                <MenuItem>a</MenuItem>
                <MenuItem>b</MenuItem>
                <MenuItem>c</MenuItem>
                <MenuItem>d</MenuItem>
            </StyledMenu>
        </div>
    )
}

export default ProductMenu
const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));