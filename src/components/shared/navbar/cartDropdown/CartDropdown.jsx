import React from "react";
import "./CartDropdown.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useSelector, useDispatch } from "react-redux";
import { remove, resetCart } from "../../../../redux/cartReducer";
import { makeRequest } from "../../../../makeRequest";
import { loadStripe } from "@stripe/stripe-js";

function CartDropdown() {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const stripePromise = loadStripe(
    "pk_test_51Mg7fJLiiaHDIskkzqYarUHDqwxLxCHvOYia4KNBM17PgCp4UFFhExbvPRZlhCGQSIFCmbTehqSoGCEffDFJe4fe00RkqZC81Z"
  );

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));
    return total.toFixed(2);
  };

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;

      const res = await makeRequest.post("/orders", {
        products: products,
      });
      console.log('response', res)
      await stripe.redirectToCheckout({
        sessionId: res?.data?.stripeSession.id,
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <div className="cart-dropdown">
      <h1 className="text-secondary">Products in you cart</h1>
      {products?.map((item) => (
        <div
          className="item-cart d-flex align-items-center justify-content-between mb-3"
          key={item.id}
        >
          <img
            src={process.env.REACT_APP_API_IMAGES_URL + item.img}
            alt={`cart-item-${item.id}`}
          />
          <div className="details-cart-items">
            <h1 className="text-secondary">{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">
              {item.quantity} x ${item.price}
            </div>
          </div>
          <DeleteOutlinedIcon
            style={{ cursor: "pointer" }}
            className="text-danger"
            onClick={() => dispatch(remove(item.id))}
          />
        </div>
      ))}
      <div className="total d-flex justify-content-between mb-3">
        <span>SUBTOTAL: </span>
        <span>${totalPrice()}</span>
      </div>
      <button onClick={handlePayment} className="btn">
        CHECKOUT
      </button>
      <span
        className="text-danger ms-2 reset"
        onClick={() => dispatch(resetCart())}
      >
        Reset cart
      </span>
    </div>
  );
}

export default CartDropdown;
