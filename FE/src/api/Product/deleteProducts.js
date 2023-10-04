import axios from 'axios';

function deleteProduct(id) {
  return axios.delete(`http://localhost:8080/api/v1/products/${id}`);
}

export default deleteProduct;
