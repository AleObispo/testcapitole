import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchData } from "../../utils/fetch";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";

const CardListResults = (search) => {
  const [productList, setProductList] = useState();

  const [filterResult, setFilterResult] = useState();

  console.log(search.search);
  console.log(productList);
  console.log(filterResult);

  const resultSearch = search.search;

  useEffect(() => {
    fetchData({ setProductList });

    /* fecthDetails(); */
  }, []);

  useEffect(() => {
    fetchData({ setProductList });
    const filtered = productList?.filter((searchProduct) => {
      return (
        searchProduct.brand
          .toLowerCase()
          .includes(resultSearch.toLowerCase()) ||
        searchProduct.model.toLowerCase().includes(resultSearch.toLowerCase())
      );
    });
    setFilterResult(filtered);
  }, [resultSearch]);

  return (
    <MainContainer>
      {resultSearch === "" ? (
        productList?.map((item, index) => {
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
      ) : filterResult?.length !== 0 ? (
        filterResult?.map((item, index) => {
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
      ) : (
        <h1>NO HAY PRODUCTOS PARA MOSTAR</h1>
      )}
    </MainContainer>
  );
};

export default CardListResults;

const ContainerMedia = styled.div`
  margin-left: 100px;

  @media only screen and (max-width: 920px) {
    margin-left: 140px;
  }
  @media only screen and (max-width: 720px) {
    margin-left: 130px;
  }
`;

const StyledDescription = styled.p`
  margin-top: 2px;
  margin-bottom: 2px;
`;

const CardStyled = styled(Card)`
  && img {
    width: 100px;
    height: 130px;
  }
`;

const MainContainer = styled.div`
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
`;
