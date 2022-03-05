import React from "react";
import useStore from "../store";
import "../App.css";
import '../Styles/ListAggegatedProducts.css'
const ListAggregatedProducts = () => {
  const {
    ProductsAddedCart,
    SubtractQuantity,
    IncreaseQuantity,
    DeleteCartProduct,
    OpenShoppingCart,
    TotalCart,
  } = useStore();
  console.log(ProductsAddedCart)
  return (
    <div className="cart">
      <button className="cart__btnClose" onClick={() => OpenShoppingCart()}>
        Close!
      </button>

      {ProductsAddedCart.map((product) => (
        <div key={product.id} className="flex__between cart__products">
          <div className="flex">
            <img src={product.image} className="cart_productImg"/>
            <div className="cart__productDescription">
              <p>{product.title}</p>
            </div>
          </div>

          <div className="buttons">
            <button className="button__sum btn" onClick={() => IncreaseQuantity(product)}>
              +
            </button>
            <p>{product.cantidad}</p>
            <button className="button__rest btn" onClick={() => SubtractQuantity(product)}>
              -
            </button>
            <p>$/{product.price}</p>
            <button
                className="button__delete"
                onClick={() => DeleteCartProduct(product)}
              >
                Delete
              </button>
          </div>
        </div>
      ))}
      <div className="TotalAmount">
        <span>Total Products : {TotalCart.TotalProducts}</span>
        <span>Total Price : {Math.ceil(TotalCart.TotalPrice)}</span>
        <span>Total Units : {TotalCart.TotalUnits}</span>
      </div>
    </div>
  );
};

export default ListAggregatedProducts;
