import axios from 'axios';

async function postProducts(productName, price, productContent, stock, category) {
  try {
    const response = await axios.post(`${process.env.REACT_APP_SERVER}/api/v1/products`, {
      productName: productName,
      price: price,
      productContent: productContent,
      stock: stock,
      category: category,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export default postProducts;
