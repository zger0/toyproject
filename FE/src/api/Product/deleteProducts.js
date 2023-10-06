import axios from 'axios';

function deleteProducts(id) {
  return axios.delete(`http://localhost:8080/api/v1/products/${id}`);
}

export default deleteProducts;
