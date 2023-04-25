import { calcTotalPrice } from "../calc-total-price/calc-total-price";
import { CartItem } from "../cart-item/cart-item";
import { Button } from "../button/button";
import "./cart-menu.css";

export const CartMenu = ({ items, onClick }) => {
  return (
    <div className="cart-menu">
      <div className="cart-menu_product-list">
        {items.length > 0
          ? items.map((product) => (
              <CartItem
                key={product.title}
                price={product.price}
                title={product.title}
                id={product.id}
              />
            ))
          : "Корзина пуста"}
      </div>
      {items.length > 0 ? (
        <div className="cart-menu_arrange">
          <div className="cart-menu_total-price">
            <span>Итого</span>
            <span>{calcTotalPrice(items)} </span>
          </div>
          <Button type="primary" size="m" onClick={onClick}>
            Оформить заказ
          </Button>
        </div>
      ) : null}
    </div>
  );
};
