import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fecthDetails } from "../../utils/fetch";
import { postProduct } from "../../utils/fetch";
import { useNavigate } from "react-router-dom";
import DetailsCardsProduct from "./DetailsCardsProduct";

// eslint-disable-next-line react/prop-types
const ProductDetailsPageView = ({ setItemsCart }) => {
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
      setItemsCart(JSON.parse(localStorage.getItem("cart")));
      goTo("/");
    }, 200);
  };

  return (
    <DetailsCardsProduct
      colorChoice={colorChoice}
      storageChoice={storageChoice}
      buttonEnable={buttonEnable}
      productDetails={productDetails}
      handleChange={handleChange}
      handleClickPost={handleClickPost}
      handleChangeStorage={handleChangeStorage}
    />
  );
};

export default ProductDetailsPageView;
