import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import ProductPage from "./pages/Product";

function App() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const productName = e.target.productName.value;
    const price = e.target.price.value;
    const productContent = e.target.productContent.value;
    const stock = e.target.stock.value;
    const category = e.target.category.value;
    await axios.post("http://localhost:8080/api/v1/products", {
      productName: productName,
      price: price,
      productContent: productContent,
      stock: stock,
      category: category,
    });
  };

  return (
    <div className="App">
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

      <Routes>
        <Route path="/" element={<div>메인페이지</div>} />
        <Route path="/product" element={<div><ProductPage /></div>}/>
        <Route path="/member" element={<div>회원페이지</div>} />
      </Routes>
    </div>
  );
}

export default App;
