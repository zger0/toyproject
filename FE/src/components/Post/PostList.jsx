import React, { useEffect, useState } from 'react';
import {
  getProducts,
  postProducts,
  getProductsByName,
  deleteProducts,
  updateProducts,
} from '../../api/index.js';

export function PostList() {
  const [products, setProducts] = useState([]);
  const [isPostForm, setIsPostForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  const postProduct = async (e) => {
    e.preventDefault();
    const productName = e.target.productName.value;
    const price = e.target.price.value;
    const productContent = e.target.productContent.value;
    const stock = e.target.stock.value;
    const category = e.target.category.value;
    await postProducts(productName, price, productContent, stock, category);
    setIsPostForm(false);
    const data = await getProducts();
    setProducts(data);
  };

  const handleFindProduct = async (e) => {
    e.preventDefault();
    const productName = e.target.productName.value;
    const data = await getProductsByName(productName);
    setProducts(data);
  };

  const handleDeleteProduct = async (productNo) => {
    await deleteProducts(productNo);
    setProducts(products.filter((product) => product.no !== productNo));
  };

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    const updatedProductName = e.target.productName.value;
    const updatedPrice = e.target.price.value;
    const updatedProductContent = e.target.productContent.value;
    const updatedStock = e.target.stock.value;
    const updatedCategory = e.target.category.value;

    await updateProducts(
      editingProduct.no,
      updatedProductName,
      updatedPrice,
      updatedProductContent,
      updatedStock,
      updatedCategory
    );

    setEditingProduct(null);

    const updatedProducts = await getProducts();
    setProducts(updatedProducts);
  };

  return (
    <>
      <div>상품페이지</div>

      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src="https://source.unsplash.com/random​" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>

      <form onSubmit={handleFindProduct}>
        <input
          type="text"
          placeholder="상품검색"
          className="input input-bordered w-full max-w-xs"
          name="productName"
        />
        <button className="btn" type="submit">
          검색
        </button>
      </form>

      <table>
        <thead>
          <tr>
            <th>No</th>
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
                  <td>{product.no}</td>
                  <td>{product.productName}</td>
                  <td>{product.price}</td>
                  <td>{product.productContent}</td>
                  <td>{product.stock}</td>
                  <td>{product.category}</td>
                  <td>
                    <button onClick={() => handleDeleteProduct(product.no)} className="xxxx">
                      삭제
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        if (!editingProduct) setEditingProduct(product);
                        else setEditingProduct(null);
                      }}
                      className="xxxx"
                    >
                      수정하기
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>

      <button onClick={() => setIsPostForm(!isPostForm)} className="xxxx">
        글쓰기
      </button>

      {isPostForm && (
        <form onSubmit={postProduct}>
          <input className="xxxx" placeholder="productName" name="productName" />
          <input className="xxxx" placeholder="price" name="price" />
          <input className="xxxx" placeholder="productContent" name="productContent" />
          <input className="xxxx" placeholder="stock" name="stock" />
          <input className="xxxx" placeholder="category" name="category" />
          <button className="xxxx" type="submit">
            등록
          </button>
        </form>
      )}

      {editingProduct && (
        <form onSubmit={handleUpdateProduct}>
          <input className="xxxx" name="productName" defaultValue={editingProduct.productName} />
          <input className="xxxx" name="price" defaultValue={editingProduct.price} />
          <input
            className="xxxx"
            name="productContent"
            defaultValue={editingProduct.productContent}
          />
          <input className="xxxx" name="stock" defaultValue={editingProduct.stock} />
          <input className="xxxx" name="category" defaultValue={editingProduct.category} />
          <button className="xxxx" type="submit">
            수정 완료
          </button>
        </form>
      )}
    </>
  );
}
