import React, { useState } from "react";
import styled from "styled-components";
import { TextField } from "@mui/material";
/* import { fetchData, fecthDetails } from "../../utils/fetch"; */
import CardListResults from "./CardsListResults";

/* import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia"; */

const ProductListPageView = () => {
  /*   const [productList, setProductList] = useState(); */
  const [search, setSearch] = useState("");
  /* const [filterResult, setFilterResult] = useState(); */

  /*   console.log(search);
  console.log(productList);
  console.log(filterResult);

  useEffect(() => {
    fetchData({ setProductList });
    fecthDetails();
  }, []);

  useEffect(() => {
    fetchData({ setProductList });
    const filtered = productList?.filter((searchProduct) => {
      return (
        searchProduct.brand.toLowerCase().includes(search.toLowerCase()) ||
        searchProduct.model.toLowerCase().includes(search.toLowerCase())
      );
    });
    setFilterResult(filtered);
  }, [search]); */

  const handleInput = (value) => {
    setSearch(value.target.value);
  };

  return (
    <>
      <TopBodyContainer>
        <TitleStyled>
          <StyledTitle>Listado de Productos</StyledTitle>
        </TitleStyled>
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
      {/* <MainContainer>
        {search === ""
          ? productList?.map((item, index) => {
              return (
                <CardStyled key={index} sx={{ minWidth: 200, height: 280 }}>
                  <ContainerMedia>
                    <CardMedia
                      component="img"
                      image={item.imgUrl}
                      alt={item.model}
                    />
                  </ContainerMedia>
                  <CardContent>
                    <StyledDescription>Marca: {item.brand}</StyledDescription>
                    <StyledDescription>Modelo: {item.model}</StyledDescription>
                    <StyledDescription>Precio: €{item.price}</StyledDescription>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Ver Detalles</Button>
                  </CardActions>
                </CardStyled>
              );
            })
          : filterResult?.map((item, index) => {
              return (
                <CardStyled key={index} sx={{ minWidth: 200, height: 280 }}>
                  <ContainerMedia>
                    <CardMedia
                      component="img"
                      image={item.imgUrl}
                      alt={item.model}
                    />
                  </ContainerMedia>
                  <CardContent>
                    <StyledDescription>Marca: {item.brand}</StyledDescription>
                    <StyledDescription>Modelo: {item.model}</StyledDescription>
                    <StyledDescription>Precio: €{item.price}</StyledDescription>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Ver Detalles</Button>
                  </CardActions>
                </CardStyled>
              );
            })}
      </MainContainer> */}
    </>
  );
};

export default ProductListPageView;

/* const ContainerMedia = styled.div`
  margin-left: 100px;

  @media only screen and (max-width: 920px) {
    margin-left: 140px;
  }
  @media only screen and (max-width: 720px) {
    margin-left: 130px;
  }
`; */

/* const StyledDescription = styled.p`
  margin-top: 2px;
  margin-bottom: 2px;
`; */

/* const CardStyled = styled(Card)`
  && img {
    width: 100px;
    height: 130px;
  }
`; */

/* const MainContainer = styled.div`
  padding: 8px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  @media only screen and (max-width: 1190px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 16px;
    grid-row-gap: 16px;
  }
  @media only screen and (max-width: 920px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 16px;
    grid-row-gap: 16px;
  }
  @media only screen and (max-width: 720px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 16px;
    grid-row-gap: 16px;
  }
`; */

const TextFieldStyled = styled(TextField)`
  text-align: right;
  padding-right: 10px;
`;

const StyledTitle = styled.h3`
  color: #212f3d;
`;

const TitleStyled = styled.div`
  grid-area: 1 / 1 / 2 / 2;
`;

const SearchBarStyled = styled.div`
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
