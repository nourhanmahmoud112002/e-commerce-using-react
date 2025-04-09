import axios from "axios";
const DataFetching = async () => {
  let response;
  try {
    response = await axios.get(
      "https://67b5979c07ba6e59083d85e7.mockapi.io/Products_Table"
    );
    return response.data;
  } catch (err) {
    console.log(err.message);
    return [];
  }
};

export default DataFetching;
