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
    <div className="ListAggregatedProducts">
      <button className="BtnClose" onClick={() => OpenAddedProductsWindow()}>
        Close!
      </button>

      {ListAggregatedProducts.map((product) => (
        <div key={product.id} className="flex AddedProducts">
          <div className="flex">
            <img src={product.image} />
            <div className="ProductDescription">
              <p>Name : {product.name}</p>
              <p>Price :{product.price}</p>
              <p>Cantidad : {product.cantidad}</p>
              <button
                className="BtnDelete"
                onClick={() => ProductDeleteCart(product)}
              >
                Delete
              </button>
            </div>
          </div>

          <div className="buttons">
            <button className="sum" onClick={() => IncreaseQuantity(product)}>
              +
            </button>
            <button className="rest" onClick={() => SubtractQuantity(product)}>
              -
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
