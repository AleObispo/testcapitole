import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchData } from "../../utils/fetch";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import { useNavigate } from "react-router-dom";

const CardListResults = (search) => {
  const history = useNavigate();
  const [productList, setProductList] = useState();
  const [filterResult, setFilterResult] = useState();
  const resultSearch = search.search;

  useEffect(() => {
    fetchData({ setProductList });
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

  const handleClick = (value) => {
    history(`/product-details/${value}`);
    window.location.reload();
  };

  return (
    <MainContainer>
      {resultSearch === "" ? (
        productList?.map((item, index) => {
          return (
            <CardStyled
              elevation={10}
              key={index}
              sx={{ minWidth: 200, height: 280 }}
            >
              <ContainerMedia>
                <CardMedia
                  component="img"
                  image={item.imgUrl}
                  alt={item.model}
                />
              </ContainerMedia>
              <CardContent>
                <StyledDescription>
                  Marca: <StyledSpan> {item.brand}</StyledSpan>
                </StyledDescription>
                <StyledDescription>
                  Modelo: <StyledSpan> {item.model}</StyledSpan>
                </StyledDescription>
                <StyledDescription>
                  Precio: <StyledSpan> €{item.price}</StyledSpan>
                </StyledDescription>
              </CardContent>
              <CardActions>
                <Button
                  sx={{ fontFamily: "Montserrat", fontWeight: 600 }}
                  onClick={() => handleClick(item.id)}
                  size="small"
                >
                  Ver Detalles
                </Button>
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
                <StyledDescription>
                  Marca: <StyledSpan> {item.brand}</StyledSpan>
                </StyledDescription>
                <StyledDescription>
                  Modelo: <StyledSpan> {item.model}</StyledSpan>
                </StyledDescription>
                <StyledDescription>
                  Precio: <StyledSpan> €{item.price}</StyledSpan>
                </StyledDescription>
              </CardContent>
              <CardActions>
                <Button
                  sx={{ fontFamily: "Montserrat", fontWeight: 600 }}
                  onClick={() => handleClick(item.id)}
                  size="small"
                >
                  Ver Detalles
                </Button>
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
  margin-top: 5px;
  margin-left: 130px;

  @media only screen and (max-width: 920px) {
    margin-left: 140px;
  }
  @media only screen and (max-width: 720px) {
    margin-left: 130px;
  }
`;
const StyledSpan = styled.span`
  color: #808b96;
`;
const StyledDescription = styled.p`
  font-family: "Montserrat", sans-serif;
  color: #212f3d;
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
  padding: 22px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 22px;
  grid-row-gap: 22px;
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
