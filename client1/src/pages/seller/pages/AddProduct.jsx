import { Box, CircularProgress, Stack, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { BlueButton } from '../../../utils/buttonStyles'
import styled from 'styled-components'
import { addStuff1 } from '../../../redux/userHandler'
import Popup from '../../../components/Popup'
import { useDispatch, useSelector } from 'react-redux'

const AddProduct = () => {

    const dispatch = useDispatch();

    const { currentUser, status, response, error } = useSelector(state => state.user);

    const [productName, setProductName] = useState("");
    const [mrp, setMrp] = useState("");
    const [cost, setCost] = useState("");
    const [discountPercent, setDiscountPercent] = useState("");
    const [subcategory, setSubcategory] = useState("");
    const [productImage, setProductImage] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [tagline, setTagline] = useState("");
    const seller = currentUser._id;

    const fields = {
        productName,
        price: {
            mrp: mrp,
            cost: cost,
            discountPercent: discountPercent,
        },
        subcategory,
        productImage,
        category,
        description,
        tagline,
        seller
    }

    const [loader, setLoader] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [message, setMessage] = useState("");


    const submitHandler = (e) => {
        e.preventDefault();
        setLoader(true);
        console.log(fields);
        dispatch(addStuff1("CreateNewProduct", fields));
    }

    useEffect(() => {
        if (status === "added") {
            setLoader(false);
            setShowPopup(true);
            setMessage("Done Successfully");
        } else if (status === 'failed') {
            setMessage(response);
            setShowPopup(true);
            setLoader(false);
        } else if (status === 'error') {
            setLoader(false);
            setMessage("Network Error");
            setShowPopup(true);
        }
    }, [status, response, error]);
    return (
        <>
            <Box
                sx={{
                    flex: '1 1 auto',
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <Box
                    sx={{
                        maxWidth: 550,
                        px: 3,
                        py: '30px',
                        width: '100%'
                    }}
                >
                    <div>
                        <Stack spacing={1} sx={{ mb: 3 }}>
                            {
                                productImage
                                    ? <ProductImage src={productImage} alt="" />
                                    : (<h1>Alt Image</h1>)
                            }
                        </Stack>
                        <form onSubmit={submitHandler}>
                            <Stack spacing={3}>
                                <TextField
                                    fullWidth
                                    label="Product Image URL"
                                    required
                                    value={productImage}
                                    onChange={(event) => setProductImage(event.target.value)}
                                    InputLabelProps={{
                                        shrinkt: true,
                                    }}
                                />
                                <TextField
                                    fullWidth
                                    label="Product Name"
                                    required
                                    value={productName}
                                    onChange={(event) => setProductName(event.target.value)}
                                    InputLabelProps={{
                                        shrinkt: true,
                                    }}
                                />
                                <TextField
                                    fullWidth
                                    label="Description"
                                    required
                                    value={description}
                                    onChange={(event) => setDescription(event.target.value)}
                                    InputLabelProps={{
                                        shrinkt: true,
                                    }}
                                />
                                <TextField
                                    fullWidth
                                    label="MRP"
                                    required
                                    value={mrp}
                                    onChange={(event) => setMrp(event.target.value)}
                                    InputLabelProps={{
                                        shrinkt: true,
                                    }}
                                />
                                <TextField
                                    fullWidth
                                    label="Cost"
                                    required
                                    value={cost}
                                    onChange={(event) => setCost(event.target.value)}
                                    InputLabelProps={{
                                        shrinkt: true,
                                    }}
                                />
                                <TextField
                                    fullWidth
                                    label="Discount Percent"
                                    required
                                    value={discountPercent}
                                    onChange={(event) => setDiscountPercent(event.target.value)}
                                    InputLabelProps={{
                                        shrinkt: true,
                                    }}
                                />
                                <TextField
                                    fullWidth
                                    label="Category"
                                    required
                                    value={category}
                                    onChange={(event) => setCategory(event.target.value)}
                                    InputLabelProps={{
                                        shrinkt: true,
                                    }}
                                />
                                <TextField
                                    fullWidth
                                    label="Subcategory"
                                    required
                                    value={subcategory}
                                    onChange={(event) => setSubcategory(event.target.value)}
                                    InputLabelProps={{
                                        shrinkt: true,
                                    }}
                                />
                                <TextField
                                    fullWidth
                                    label="Tagline"
                                    required
                                    value={tagline}
                                    onChange={(event) => setTagline(event.target.value)}
                                    InputLabelProps={{
                                        shrinkt: true,
                                    }}
                                />
                            </Stack>
                            <BlueButton
                                fullWidth
                                size='large'
                                sx={{ mt: 3 }}
                                variant='contained'
                                type='submit'
                                disabled={loader}
                            >
                                {loader ? <CircularProgress size={24} color='inherit' /> : "Add"}
                            </BlueButton>
                        </form>
                    </div>

                </Box>
            </Box>
            <Popup message={message} setShowPopup={setShowPopup} showPopup={showPopup} />
        </>
    )
}

export default AddProduct


const ProductImage = styled.img`
  width: 200px;
  height: auto;
  margin-bottom: 8px;
`;