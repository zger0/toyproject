import React, { useState, useEffect } from "react";
import getProducts from "../api/getProducts";
import axios from "axios";

function ProductPage() {

  const [products, setProducts] = useState();

  useEffect( () => {
      getProducts().then((data) => setProducts(data));
    }, [] 
  );

  return (
    <>
      <div>상품페이지</div>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Product Content</th>
            <th>Stock</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {products && 
            products.map((product, index) => {
              return (
                <tr key={index}>
                  <td>{product.productName}</td>
                  <td>{product.price}</td>
                  <td>{product.productContent}</td>
                  <td>{product.stock}</td>
                  <td>{product.category}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}

export default ProductPage;
