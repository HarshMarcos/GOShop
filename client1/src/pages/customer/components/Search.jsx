import React, { useState } from 'react'
import { InputBase, Box, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getSearchedProducts } from '../../../redux/userHandler';
const Search = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    dispatch(getSearchedProducts("searchProducts", searchTerm));

    if (location.pathname !== "/ProductSearch") {
      navigate("/ProductSearch");
    }
  }

  return (
    <SearchContainer>
      <InputSearchBase
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
        placeholder='Search here...'
      />
      <SearchIconWrapper>
        <SearchIcon onClick={handleSearch} sx={{ color: '#4d1c9c', cursor: "pointer" }} />
      </SearchIconWrapper>
    </SearchContainer>
  )
}

const SearchContainer = styled(Box)`
  border-radius: 2px;
  margin-left: 10px;
  width: 38%;
  background-color: #fff;
  display: flex;
`;

const SearchIconWrapper = styled(Box)`
  margin-left: auto;
  padding: 5px;
  display: flex;
  color: blue;
`;

const InputSearchBase = styled(InputBase)`
  font-size: unset;
  width: 100%;
  padding-left: 20px;
`;

export default Search

