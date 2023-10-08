import axios from 'axios';

function deleteProducts(id) {
  return axios.delete(`${process.env.REACT_APP_SERVER}/api/v1/products/${id}`);
}

export default deleteProducts;
