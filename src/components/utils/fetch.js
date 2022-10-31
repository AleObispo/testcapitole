import axios from "axios";
const baseURL = "https://front-test-api.herokuapp.com/";

const postProduct = async ({ objectPost, setCountItems, countItems }) => {
  try {
    const response = await axios.post(
      "https://front-test-api.herokuapp.com/api/cart",
      objectPost
    );
    setCountItems(countItems + response.data.count);
  } catch (error) {
    console.log(error);
  }
};

const fetchData = async ({ setProductList }) => {
  try {
    const response = await axios({
      url: baseURL + "api/product",
    });

    setProductList(response.data);
  } catch (error) {
    console.log(error);
  }
};

const fecthDetails = async ({
  id,
  setProductDetails,
  setCodeStorageDefault,
  setCodeColorDefault,
}) => {
  try {
    const response = await axios({
      url: baseURL + "api/product/" + id,
    });

    if (response.data.options.storages.length <= 1) {
      setCodeStorageDefault(response.data.options.storages[0].code);
    }
    if (response.data.options.colors.length <= 1) {
      setCodeColorDefault(response.data.options.colors[0].code);
    }

    setProductDetails(response.data);
  } catch (error) {
    console.log(error);
  }
};

export { fetchData, fecthDetails, postProduct };
