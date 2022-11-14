import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "../redux/actions/productActions";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const { productId } = useParams();
  const getSingleProduct = async () => {
    const singleProduct = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => console.log("Err", err));
    dispatch(selectedProduct(singleProduct.data));
  };
  useEffect(() => {
    getSingleProduct();
  }, [productId]);
  return (
    <div>
      <img
        className="ui image centered small fluid"
        src={product.image}
        alt={product.title}
      />
      <div className="meta">{product.title}</div>
      <div className="meta">{product.category}</div>
    </div>
  );
};

export default ProductDetail;
