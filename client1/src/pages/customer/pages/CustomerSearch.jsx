import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';
import Products from '../../../components/Products';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchedProducts } from '../../../redux/userHandler';

const CustomerSearch = ({ mode }) => {
    const dispatch = useDispatch();
    const [searchTerm, setSerachTerm] = useState("laptop");
    const { filteredProducts } = useSelector(state => state.user)

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(getSearchedProducts("searchProduct", searchTerm))
    }
    return (
        <div>
            {
                mode === "Mobile" ?

                    <>
                        <SearchContainer onSubmit={handleSearch}>
                            <TextField
                                label="Search for prodicts, brands and more"
                                variant='outlined'
                                fullWidth
                                size='small'
                                inputProps={{
                                    style: {
                                        borderRadius: 0,
                                    }
                                }}
                                value={searchTerm}
                                onChange={(e) => setSerachTerm(e.target.value)}
                            />
                        </SearchContainer>
                        {
                            searchTerm && <Products productData={filteredProducts} />
                        }
                    </>
                    :
                    <>
                        {
                            filteredProducts && <Products productData={filteredProducts} />
                        }
                    </>
            }
        </div>
    )
}
const SearchContainer = styled('form')({
    display: 'flex',
    justifyContent: 'center',
    padding: '16px',
});
export default CustomerSearch