import axios from 'axios';

async function getProductsByName(productName) {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER}/api/v1/products/${productName}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export default getProductsByName;
