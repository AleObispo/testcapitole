import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fecthDetails } from "../../utils/fetch";
import {
  ContainerCheckButtons,
  ContainerActions,
  MainContainer,
  ContainerButtonAdd,
  StyledSpan,
  StyledDescription,
  DescriptionLeft,
  DescriptionRigth,
  DescriptionContainer,
  CardStyled,
  CardStyledRight,
  CardStyledRightBottom,
  LeftContainer,
  RigthContainer,
} from "./DetailsCardsProduct";
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
import { postProduct } from "../../utils/fetch";
import { useNavigate } from "react-router-dom";

const ProductDetailsPageView = () => {
  const recupero = localStorage.getItem("cart");
  const { id } = useParams();
  const goTo = useNavigate();
  const [codeStorageDefault, setCodeStorageDefault] = useState();
  const [codeColorDefault, setCodeColorDefault] = useState();
  const [productDetails, setProductDetails] = useState();
  const [colorChoice, setColorChoice] = useState("");
  const [storageChoice, setStorageChoice] = useState("");
  const [buttonEnable, setButtonEnable] = useState(true);
  const [objectPost, setObjectPost] = useState({
    id: id,
  });
  const [countItems, setCountItems] = useState(JSON.parse(recupero));

  useEffect(() => {
    localStorage.setItem("cart", countItems);
  }, [recupero, countItems]);

  useEffect(() => {
    if (objectPost.colorCode && objectPost.storageCode) {
      setButtonEnable(false);
    } else {
      setButtonEnable(true);
    }
  }, [objectPost]);

  const handleChange = (event) => {
    setColorChoice(event.target.value);
  };

  const handleChangeStorage = (event) => {
    setStorageChoice(event.target.value);
  };

  useEffect(() => {
    fecthDetails({
      setProductDetails,
      id,
      setCodeStorageDefault,
      setCodeColorDefault,
    });
  }, []);

  useEffect(() => {
    setObjectPost({
      ...objectPost,
      storageCode: codeStorageDefault,
      colorCode: codeColorDefault,
    });
  }, [productDetails]);

  useEffect(() => {
    const storageCodeFound = productDetails?.options.storages.find(
      (storage) => storage.name === storageChoice
    );

    setObjectPost({
      ...objectPost,
      storageCode: storageCodeFound?.code,
    });
  }, [storageChoice]);

  useEffect(() => {
    const colorCodeFound = productDetails?.options.colors.find(
      (color) => color.name === colorChoice
    );

    setObjectPost({
      ...objectPost,
      colorCode: colorCodeFound?.code,
    });
  }, [colorChoice]);

  const handleClickPost = () => {
    postProduct({ objectPost, setCountItems, countItems });

    setTimeout(() => {
      goTo("/");
      window.location.reload();
    }, 150);
  };

  return (
    <>
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
    </>
  );
};

export default ProductDetailsPageView;
