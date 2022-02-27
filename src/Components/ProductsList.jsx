import React, { useEffect } from "react";
import useStore from "../store/index";
import "../App.css";
import "../Styles/Products.List.css";
import ProductNabvar from "./ProductNabvar";
function ProductsList() {
  const { ProductAdd, ListApiProduct } = useStore();
  return (
    <div>
      <ProductNabvar />
      <div className="ListApiProduct">
        {ListApiProduct.map((product) => (
          <div className="ProductCard flex-between" key={product.id}>
            <img src={product.image} alt="" />
            <p className="description">{product.title}</p>
            <p>Price : {product.price}</p>
            <button className="BtnAdd" onClick={() => ProductAdd(product)}>
              Add Card
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsList;
