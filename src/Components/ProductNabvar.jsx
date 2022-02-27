import React, { useEffect } from "react";
import useStore from "../store/index";
import "../App.css";
import "../Styles/Nabvar.css";
const ProductNabvar = () => {
  const {
    OpenAddedProductsWindow,
    ListAggregatedProducts,
    CategoryList,
    FilterCategory,
  } = useStore();
  return (
    <header className="header flex-between">
      <span className="title">Cart Buy</span>
      <nav className="nabvar">
        <ul className="nabvarList">
           {CategoryList.map((category) => (
            <li className="ItemNabvar" key={category}>
              <a
                className="linkNabvar"
                href="#"
                onClick={() => FilterCategory(category)}
              >
                {category}
              </a>
            </li>
          ))} 
        </ul>
      </nav>
      <div className="boxIcon flex-center">
        <img
          className="iconCart"
          src="/Icon/iconCart.png"
          onClick={() => OpenAddedProductsWindow()}
        />
        <span className="CantidaProducts flex-center">
          {ListAggregatedProducts.length}
        </span>
      </div>
    </header>
  );
};

export default ProductNabvar;
