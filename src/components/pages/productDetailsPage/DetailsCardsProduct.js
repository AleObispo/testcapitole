/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import { Card } from "@mui/material";
import {
  CardContent,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Stack,
  IconButton,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

// eslint-disable-next-line react/prop-types
const DetailsCardsProduct = ({
  colorChoice,
  storageChoice,
  buttonEnable,
  productDetails,
  handleChange,
  handleClickPost,
  handleChangeStorage,
}) => {
  return (
    <MainContainer>
      <LeftContainer>
        <CardStyled elevation={10}>
          <CardContent>
            <img src={productDetails?.imgUrl} />
          </CardContent>
        </CardStyled>
      </LeftContainer>
      <RigthContainer>
        <CardStyledRight elevation={10}>
          <DescriptionContainer>
            <DescriptionLeft>
              <StyledDescription>
                Marca: <StyledSpan>{productDetails?.brand}</StyledSpan>
              </StyledDescription>
              <StyledDescription>
                Modelo: <StyledSpan>{productDetails?.model}</StyledSpan>
              </StyledDescription>
              <StyledDescription>
                Precio: <StyledSpan> € {productDetails?.price}</StyledSpan>
              </StyledDescription>
              <StyledDescription>
                CPU: <StyledSpan> {productDetails?.cpu}</StyledSpan>
              </StyledDescription>
              <StyledDescription>
                RAM: <StyledSpan> {productDetails?.ram}</StyledSpan>
              </StyledDescription>
              <StyledDescription>
                Sistema: <StyledSpan> {productDetails?.os}</StyledSpan>
              </StyledDescription>
            </DescriptionLeft>
            <DescriptionRigth>
              <StyledDescription>
                Resol. Pantalla:{" "}
                <StyledSpan> {productDetails?.displayResolution}</StyledSpan>
              </StyledDescription>
              <StyledDescription>
                Bateria: <StyledSpan> {productDetails?.battery}</StyledSpan>
              </StyledDescription>
              <StyledDescription>
                Camaras:{" "}
                <StyledSpan>
                  {" "}
                  Front: {productDetails?.primaryCamara}Back:
                  {productDetails?.secondaryCmera}
                </StyledSpan>
              </StyledDescription>
              <StyledDescription>
                Dimensiones:{" "}
                <StyledSpan> {productDetails?.dimentions}</StyledSpan>
              </StyledDescription>
              <StyledDescription>
                Peso: <StyledSpan> {productDetails?.weigth}</StyledSpan>
              </StyledDescription>
            </DescriptionRigth>
          </DescriptionContainer>
        </CardStyledRight>

        <CardStyledRightBottom elevation={10}>
          <ContainerActions>
            <ContainerCheckButtons>
              <FormControl>
                <FormLabel
                  sx={{ fontFamily: "Montserrat" }}
                  id="demo-radio-buttons-group-label"
                >
                  Color
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                  value={
                    productDetails?.options.colors.length <= 1
                      ? productDetails?.options.colors[0].name
                      : colorChoice
                  }
                  onChange={handleChange}
                >
                  {productDetails?.options.colors.map((item, index) => {
                    return (
                      <FormControlLabel
                        key={index}
                        value={item?.name}
                        control={<Radio />}
                        label={item?.name}
                      />
                    );
                  })}
                </RadioGroup>
              </FormControl>

              <FormControl>
                <FormLabel
                  sx={{ fontFamily: "Montserrat" }}
                  id="demo-radio-buttons-group-label"
                >
                  Almacenaje
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                  value={
                    productDetails?.options.storages.length <= 1
                      ? productDetails?.options.storages[0].name
                      : storageChoice
                  }
                  onChange={handleChangeStorage}
                >
                  {productDetails?.options.storages.map((item, index) => {
                    return (
                      <FormControlLabel
                        key={index}
                        value={item?.name}
                        control={<Radio />}
                        label={item?.name}
                      />
                    );
                  })}
                </RadioGroup>
              </FormControl>
            </ContainerCheckButtons>
            <ContainerButtonAdd>
              <Stack direction="row" spacing={1}>
                <IconButton
                  size="large"
                  color="primary"
                  aria-label="add to shopping cart"
                  disabled={buttonEnable}
                  onClick={handleClickPost}
                >
                  <AddShoppingCartIcon sx={{ width: 40, height: 40 }} />
                </IconButton>
              </Stack>
            </ContainerButtonAdd>
          </ContainerActions>
        </CardStyledRightBottom>
      </RigthContainer>
    </MainContainer>
  );
};

export default DetailsCardsProduct;

const ContainerCheckButtons = styled.div`
  grid-area: 1 / 1 / 2 / 2;
`;

const ContainerActions = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 6px;
  grid-row-gap: 0px;
`;
const MainContainer = styled.div`
  font-family: "Montserrat", sans-serif;
  padding-top: 50px;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 50px;
  grid-row-gap: 0px;

  @media only screen and (max-width: 1190px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 50px;
    grid-row-gap: 0px;
  }
  @media only screen and (max-width: 920px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 50px;
    grid-row-gap: 0px;
  }
  @media only screen and (max-width: 720px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 50px;
    grid-row-gap: 0px;
  }
`;

const ContainerButtonAdd = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  margin: -25px 0 0 -25px;
  grid-area: 1 / 2 / 2 / 3;
`;

const StyledSpan = styled.span`
  color: #808b96;
`;

const StyledDescription = styled.p`
  color: #212f3d;
  margin-top: 2px;
  margin-bottom: 2px;
`;

const DescriptionLeft = styled.div`
  grid-area: 1 / 1 / 2 / 2;
`;
const DescriptionRigth = styled.div`
  grid-area: 1 / 2 / 2 / 3;
`;

const DescriptionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 0px;
`;
const CardStyled = styled(Card)`
  && img {
    width: 100%;
    height: 100%;
  }
  min-width: 300px;
  max-height: 500px;
`;

const CardStyledRight = styled(Card)`
  max-width: 400px;
  padding: 10px;
  margin-bottom: 16px;
`;
const CardStyledRightBottom = styled(Card)`
  max-width: 400px;
  padding: 10px;
  margin-bottom: 16px;
`;

const LeftContainer = styled.div`
  margin: 0 auto;
  margin-bottom: 16px;
  grid-area: 1 / 1 / 2 / 2;
`;
const RigthContainer = styled.div`
  margin: 0 auto;
  grid-area: 1 / 2 / 2 / 3;
  @media only screen and (max-width: 720px) {
    grid-area: 2 / 1 / 2 / 2;
  }
`;
