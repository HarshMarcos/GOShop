import React, { useState } from 'react';
import { Container, Grid, Pagination } from '@mui/material';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/userSlice';
import { BasicButton } from '../utils/buttonStyles';
import { Navigate, useNavigate } from 'react-router-dom';
import Popup from './Popup';
import { addStuff } from '../redux/userHandler';

const Products = ({ productData }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const itemsPerPage = 9;

  const { currentRole, responseSearch } = useSelector(state => state.user);
  const [currentPage, setCurrentPage] = useState(1);
  const [showPopup, setShowPopup] = useState(1);
  const [message, setMessage] = useState("");

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = productData?.slice(indexOfFirstItem, indexOfLastItem);


  return (
    <>
      <ProductGrid>
        {currentItems?.map((data, index) => (
          <Grid item xs={12} sm={6} md={4}
            key={index}
            onClick={() => Navigate("/product/view" + data._id)}
            sx={{ cursor: "pointer" }}
          >
            <ProductContainer>
              <ProductImage src={data.productImage} />
              <ProductName>{data.productName}</ProductName>
              <PriceMrp>{data.price.mrp}</PriceMrp>
              <PriceCost>₹{data.price.cost}</PriceCost>
              <PriceDiscount>{data.price.discountPercent}% off</PriceDiscount>
              <AddToCart>
                {currentRole === null &&
                  <>
                    <BasicButton>
                      Add To Cart
                    </BasicButton>
                  </>
                }
              </AddToCart>
            </ProductContainer>
          </Grid>
        ))}
      </ProductGrid>

    </>
  )
}

export default Products

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`;

const ProductGrid = styled(Grid)`
  display: flex;
  align-items: center;
`;

const ProductImage = styled.img`
  width: 200px;
  height: auto;
  margin-bottom: 8px;
`;

const ProductName = styled.p`
  font-weight: bold;
  text-align: center;
`;

const PriceMrp = styled.p`
  margin-top: 8px;
  text-align: center;
  text-decoration: line-through;
  color: #525050;
`;

const PriceCost = styled.h3`
  margin-top: 8px;
  text-align: center;
`;

const PriceDiscount = styled.p`
  margin-top: 8px;
  text-align: center;
  color: darkgreen;
`;

const AddToCart = styled.div`
  margin-top: 16px;
`;