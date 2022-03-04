import React from "react";
import useStore from "../store";
import "../App.css";
import '../Styles/ListAggegatedProducts.css'
const ListAggregatedProducts = () => {
  const {
    ListAggregatedProducts,
    SubtractQuantity,
    IncreaseQuantity,
    ProductDeleteCart,
    OpenAddedProductsWindow,
    TotalCart,
  } = useStore();

  return (
    <div className="cart">
      <button className="cart__btnClose" onClick={() => OpenAddedProductsWindow()}>
        Close!
      </button>

      {ListAggregatedProducts.map((product) => (
        <div key={product.id} className="flex__between cart__products">
          <div className="flex">
            <img src={product.image} className="cart_productImg"/>
            <div className="cart__productDescription">
              <p>Name : {product.name}</p>
              <p>Price $/:{product.price}</p>
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

            <button
                className="button__delete"
                onClick={() => ProductDeleteCart(product)}
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
