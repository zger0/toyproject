import axios from 'axios';

async function getProductByName(productName) {
  try {
    const response = await axios.get(`http://localhost:8080/api/v1/products/${productName}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export default getProductByName;
