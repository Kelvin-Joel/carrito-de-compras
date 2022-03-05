import React, { useEffect } from "react";
import useStore from "../store/index";
import "../App.css";
import "../Styles/Products.List.css";
import ProductNabvar from "./ProductNabvar";
function ProductsList() {
  const { ProductAdd, DataFecth } = useStore();
  return (
    <div>
      <ProductNabvar />
      <div className="products">
        {DataFecth.map((product) => (
          <div className="product__card flex__between" key={product.id}>
            <img className="product__img" src={product.image} alt="" />
            <p className="product__name">{product.title}</p>
            <p>Price : {product.price}</p>
            <button className="product__btn" onClick={() => ProductAdd(product)}>
              Add Card
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsList;
