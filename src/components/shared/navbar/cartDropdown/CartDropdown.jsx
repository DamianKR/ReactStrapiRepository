import React from "react";
import "./CartDropdown.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

function CartDropdown() {
  const dataProducts = [
    {
      id: 1,
      imgSrc:
        "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=800",
      imgSrc2:
        "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Long Leggins Graphic T-shirt",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, delectus expedita deserunt quaerat, officiis in quis itaque excepturi a neque illo, quibusdam exercitationem doloremque cum voluptates modi praesentium repellat sapiente.",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      imgSrc:
        "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Hat yellow",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, delectus expedita deserunt quaerat, officiis in quis itaque excepturi a neque illo, quibusdam exercitationem doloremque.",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <div className="cart-dropdown">
      <h1 className="text-secondary">Products in you cart</h1>
      {dataProducts?.map((item) => (
        <div className="item-cart d-flex align-items-center mb-3" key={item.id}>
          <img src={item.imgSrc} alt={`cart-item-${item.id}`} />
          <div className="details-cart-items">
            <h1 className="text-secondary">{item.title}</h1>
            <p >{item.desc?.substring(0, 100)}</p>
            <div className="price">1 x ${item.price}</div>
          </div>
          <DeleteOutlinedIcon className="text-danger" />
        </div>
      ))}
      <div className="total d-flex justify-content-between mb-3">
        <span>SUBTOTAL: </span>
        <span>$123</span>
      </div>
      <button className="btn">Checkout</button>
      <span className="text-danger ms-2 reset">Reset cart</span>
    </div>
  );
}

export default CartDropdown;
