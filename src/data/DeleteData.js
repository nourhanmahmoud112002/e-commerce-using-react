import axios from "axios";

const DeleteData = async (id) => {
  try {
    const response = await axios.delete(
      `https://67b5979c07ba6e59083d85e7.mockapi.io/Products_Table/${id}`
    );
    console.log("Deleted:", response.data);
  } catch (error) {
    console.error("Error deleting data:", error);
  }
};

export default DeleteData;
