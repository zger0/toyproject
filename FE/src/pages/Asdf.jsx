import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function asdf () {
const handleSubmit = async (e) => {
    e.preventDefault();
    const productName = e.target.productName.value;
    const price = e.target.price.value;
    const productContent = e.target.productContent.value;
    const stock = e.target.stock.value;
    const category = e.target.category.value;
    await axios.post('http://localhost:8080/api/v1/products', {
      productName: productName,
      price: price,
      productContent: productContent,
      stock: stock,
      category: category,
    });
  };

  return (
    <>
    <div className="black-nav">
        <h4>테스트</h4>
        <Link to="/">홈</Link>
        <Link to="/product">상품페이지</Link>
      </div>
      <form onSubmit={handleSubmit}>
        <input name="productName" />
        <input name="price" />
        <input name="productContent" />
        <input name="stock" />
        <input name="category" />
        <button type="submit">Submit</button>
      </form>
      </>
    );
  }

    export default asdf;