import React, { useState } from "react";
import styled from "styled-components";
import { TextField } from "@mui/material";
import CardListResults from "./CardsListResults";

const ProductListPageView = () => {
  const [search, setSearch] = useState("");

  const handleInput = (value) => {
    setSearch(value.target.value);
  };

  return (
    <>
      <TopBodyContainer>
        <SearchBarStyled>
          <TextFieldStyled
            size="small"
            id="outlined-search"
            label="Filtrar"
            type="search"
            onChange={handleInput}
          />
        </SearchBarStyled>
      </TopBodyContainer>
      <CardListResults search={search} />
    </>
  );
};

export default ProductListPageView;

const TextFieldStyled = styled(TextField)`
  text-align: right;
  padding-right: 10px;
  width: 350px;
`;

const SearchBarStyled = styled.div`
  margin-top: 20px;
  margin-right: 16px;
  text-align: right;
  padding-top: 10px;
  padding-right: 5px;
  grid-area: 1 / 3 / 2 / 4;
`;

const TopBodyContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 0px;
`;
