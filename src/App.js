import "./styles.css";
import Header from "./container/Header";
import "semantic-ui-css/semantic.min.css";
import { Route, Routes } from "react-router-dom";
import ProductListing from "./container/ProductListing";
// import ProductComponent from "./container/ProductComponent";
import ProductDetail from "./container/ProductDetail";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}
