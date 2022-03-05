import React, { useEffect } from "react";
import useStore from "../store/index";
import "../App.css";
import "../Styles/Header.css";
const ProductNabvar = () => {
  const {
    OpenShoppingCart,
    ProductsAddedCart,
  } = useStore();
  return (
    <header className="header flex__between">
      <span className="header__title">Cart Buy</span>
      <div className="header__icon flex__center">
        <img
          className="header__iconImg"
          src="/Icon/iconCart.png"
          onClick={() => OpenShoppingCart()}
        />
        <span className="header__quantity flex__center">
          {ProductsAddedCart.length}
        </span>
      </div>
    </header>
  );
};

export default ProductNabvar;
