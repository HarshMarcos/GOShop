import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Box, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addStuff } from '../../../redux/userHandler';
import { useNavigate, useParams } from 'react-router-dom';
import Popup from '../../../components/Popup';

const PaymentForm = ({ handleBack }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { status, currentUser, productDetailsCart } = useSelector(state => state.user);

    const params = useParams();
    const productID = params.id;

    const [paymentData, setPaymentData] = useState({
        cardName: '',
        cardNumber: '',
        expDate: '',
        cvv: '',
    })

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setPaymentData((prevData) => ({
            ...prevData,
            [id]: value,
        }))
    }

    const [showPopup, setShowPopup] = useState(false);
    const [message, setMessage] = useState("");



    return (
        <React.Fragment>
            <Typography variant='h6' gutterBottom>
                Payment method
            </Typography>
            <form>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <TextField
                            required
                            id='cardName'
                            label="Name on card"
                            fullWidth
                            autoCapitalize='cc-name'
                            variant='standard'
                            value={paymentData.cardName}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            required
                            id='cardNumber'
                            label="Card number"
                            type='number'
                            fullWidth
                            autoCapitalize='cc-number'
                            variant='standard'
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            required
                            id="expDate"
                            type='date'
                            helperText="Expiry date"
                            fullWidth
                            autoComplete="cc-exp"
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            required
                            id="cvv"
                            label="CVV"
                            type='number'
                            helperText="Last three digits on signature strip"
                            fullWidth
                            autoComplete="cc-csc"
                            variant="standard"
                        />
                    </Grid>
                </Grid>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                        Back
                    </Button>
                    <Button
                        variant='contained'
                        type='submit'
                        sx={{ mt: 3, ml: 1 }}
                    >
                        Place Order
                    </Button>
                </Box>
            </form>
            <Popup message={message} setShowPopup={setShowPopup} showPopup={showPopup} />
        </React.Fragment>
    )
}

export default PaymentForm