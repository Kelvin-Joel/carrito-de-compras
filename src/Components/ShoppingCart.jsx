import React from "react";
import useStore from "../store";
import "../App.css";
import "../Styles/ShoppingCart.css";
const ListAggregatedProducts = () => {
  const {
    ProductsAddedCart,
    DecreaseQuantity,
    IncreaseQuantity,
    DeleteCartProduct,
    OpenShoppingCart,
    TotalCart,
  } = useStore();
  
  return (
    <div className="shopping-cart">
      <button className="cart__btn-close" onClick={() => OpenShoppingCart()}>
        Close!
      </button>

      {ProductsAddedCart.map((product) => (
        <div key={product.id} className="flex__between shopping-cart__products">
          <img src={product.image} className="shopping-cart__product-img" />
          <p>{product.title}</p>

          <div className="buttons flex__between">
          <button
            className="button__sum btn "
            onClick={() => IncreaseQuantity(product)}
          >
            +
          </button>
          <p>{product.quantity}</p>
          <button
            className="button__rest btn "
            onClick={() => DecreaseQuantity(product)}
          >
            -
          </button>
          
          <p>$/{product.price}</p>  
          </div>

          <button
            className="button__delete"
            onClick={() => DeleteCartProduct(product)}
          >
            Delete
          </button>
        </div>
      ))}
      <div className="total-payable">
        <span>Total Products : {TotalCart.TotalProducts}</span>
        <span>Total Price : ${Math.ceil(TotalCart.TotalPrice)}</span>
        <span>Total Units : {TotalCart.TotalUnits}</span>
      </div>
    </div>
  );
};

export default ListAggregatedProducts;
