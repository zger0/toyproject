import axios from 'axios';

async function postProduct(productName, price, productContent, stock, category) {
  try {
    const response = await axios.post('http://localhost:8080/api/v1/products', {
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