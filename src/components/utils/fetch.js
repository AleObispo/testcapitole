import axios from "axios";
const baseURL = "https://front-test-api.herokuapp.com/";
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

const fecthDetails = async () => {
  try {
    const response = await axios({
      url: baseURL + "api/product/" + "ZmGrkLRPXOTpxsU4jjAcv",
    });

    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

export { fetchData, fecthDetails };
