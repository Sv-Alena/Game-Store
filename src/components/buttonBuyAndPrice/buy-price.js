import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeItemFromCart } from "../../redux/cartSlice";
import { Button } from "../button/button";
import "./buy-button.css";

export const BuyPrice = ({ product }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.itemInCart);
  const isItemInCart = items.some((item) => item.id === product.id);

  const btnBuy = (e) => {
    e.stopPropagation();
    if (isItemInCart) {
      dispatch(removeItemFromCart(product.id));
    } else {
      dispatch(addToCart(product));
    }
  };

  return (
    <div className="buy-price">
      <span className="buy-price_many"> {product.price} ₽</span>
      <Button type={isItemInCart ? "secondary" : "primary"} onClick={btnBuy}>
        {isItemInCart ? "Убрать из корзины" : " В Корзину"}
      </Button>
    </div>
  );
};
