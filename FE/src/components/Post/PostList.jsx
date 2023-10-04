import React, { useEffect, useState } from 'react';
import {
  getProducts,
  postProducts,
  getProductsByName,
  deleteProduts,
  updateProduct,
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

  useEffect(() => {}, [setEditingProduct]);

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

  const findProduct = async (e) => {
    e.preventDefault();
    const productName = e.target.productName.value;
    const data = await getProductsByName(productName);
    setProducts(data);
  };

  const handleDeleteProduct = async (productNo) => {
    await deleteProduts(productNo);
    setProducts(products.filter((product) => product.no !== productNo));
  };

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    const updatedProductName = e.target.productName.value;
    const updatedPrice = e.target.price.value;
    const updatedProductContent = e.target.productContent.value;
    const updatedStock = e.target.stock.value;
    const updatedCategory = e.target.category.value;

    await updateProduct(
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
      <form onSubmit={findProduct}>
        <input
          className="block  rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="상품검색"
          name="productName"
        />
        <button
          className="block  rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="0.00"
          type="submit"
        >
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
                    <button
                      onClick={() => handleDeleteProduct(product.no)}
                      className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      삭제
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        if (!editingProduct) setEditingProduct(product);
                        else setEditingProduct(null);
                      }}
                      className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      수정하기
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>

      <button
        onClick={() => setIsPostForm(!isPostForm)}
        className="block  rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="0.00"
      >
        글쓰기
      </button>

      {isPostForm && (
        <form onSubmit={postProduct}>
          <input
            className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="productName"
            name="productName"
          />
          <input
            className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="price"
            name="price"
          />
          <input
            className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="productContent"
            name="productContent"
          />
          <input
            className="block  rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="stock"
            name="stock"
          />
          <input
            className="block  rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="category"
            name="category"
          />
          <button
            className="block  rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="0.00"
            type="submit"
          >
            Submit
          </button>
        </form>
      )}

      {editingProduct && (
        <form onSubmit={handleUpdateProduct}>
          <input
            className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="productName"
            name="productName"
            defaultValue={editingProduct.productName}
          />
          <input
            className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="price"
            name="price"
            defaultValue={editingProduct.price}
          />
          <input
            className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="productContent"
            name="productContent"
            defaultValue={editingProduct.productContent}
          />
          <input
            className="block  rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="stock"
            name="stock"
            defaultValue={editingProduct.stock}
          />
          <input
            className="block  rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="category"
            name="category"
            defaultValue={editingProduct.category}
          />
          <button
            className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="0.00"
            type="submit"
          >
            수정 완료
          </button>
        </form>
      )}
    </>
  );
}
