import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { BlueButton, DarkRedButton, GreenButton } from '../../../utils/buttonStyles';
import { deleteStuff, getProductDetails, updateStuff } from '../../../redux/userHandler';
import { Delete, KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'
import { Avatar, Box, Card, CircularProgress, Collapse, IconButton, Stack, TextField, Typography } from '@mui/material';
import altImage from "../../../assets/altimg.png";
import Popup from '../../../components/Popup';
import { generateRandomColor, timeAgo } from '../../../utils/helperFunctions';
import { underControl } from '../../../redux/userSlice';
import AlertDialogSlide from '../../../components/AlertDialogSlide';

const ViewProductSeller = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const productID = params.id;
    return (
        <div>ViewProductSeller</div>
    )
}

export default ViewProductSeller