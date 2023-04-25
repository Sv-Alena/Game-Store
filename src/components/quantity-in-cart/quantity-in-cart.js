import  './quantity-in-cart.css'

export const QuantityInCart = ({ quantity = 0 }) => {
  return quantity > 0 ? (
    <div className="quantity">
      <spen>{quantity}</spen>
    </div>
  ) : null;
};
