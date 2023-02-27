import React, { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

function Product({product}) {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="product col d-flex flex-column">
      <h1>{product?.title}</h1>
      <span className="price">${product?.price}</span>
      <p>
        {product?.desc}
      </p>
      <div className="quantity d-flex">
        <button
          className="btn"
          onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
        >
          -
        </button>
        {quantity}
        <button
          className="btn"
          onClick={() => setQuantity((prev) => prev + 1)}
        >
          +
        </button>
      </div>
      <button className="add btn">
        <AddShoppingCartIcon />
        ADD TO CART
      </button>
      <div className="links d-flex">
        <div className="item">
          <FavoriteBorderIcon />
          ADD TO WISH LIST
        </div>
        <div className="item">
          <BalanceIcon />
          ADD TO COMPARE
        </div>
      </div>
      <div className="info d-flex flex-column text-color-secondary">
        <span>Vendor: Polo</span>
        <span>Product Type: T-Shirt</span>
        <span>Tag: T-Shirt, Women, Top</span>
      </div>
      <div className="details d-flex flex-column text-color-secondary">
        <span>DESCRIPTION</span>
        <hr />
        <span>ADDITIONAL INFO</span>
        <hr />
        <span>FAQ</span>
      </div>
    </div>
  );
}

export default Product;
