import axios from "axios";

async function getProducts() {
  try {
    const response = await axios.get("http://localhost:8080/api/v1/products");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // You can choose to rethrow the error or handle it differently
  }
}

export default getProducts;
