import "./cart-item.css";

export const CartItem = ({ title, price, id }) => {
  return (
    <div className="cart-item">
      <spen>{title}</spen>
      <div className="cart-item_price">
        <spen>{price} ₽</spen>
      </div>
    </div>
  );
};
