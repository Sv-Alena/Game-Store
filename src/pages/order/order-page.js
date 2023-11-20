import { useSelector } from "react-redux";
import { Button } from "../../components/button/button";
import { calcTotalPrice } from "../../components/calc-total-price/calc-total-price";
import { OrderItem } from "../../components/order-item/order-item";
import "./order-page.css";

export const OrderPage = () => {
  const items = useSelector((state) => state.cart.itemInCart);

  if (items.length < 1) {
    return <h3>Ваша корзина пуста</h3>;
  }

  return (
    <div className="order-page">
      <div className="order-page_left">
        {items.map((product) => (
          <OrderItem product={product} key={product}/>
        ))}
      </div>
      <div className="order-page_right">
        <div className="order-page_total-price">
          <div>
          <p>Общая сумма: {calcTotalPrice(items)} ₽</p>
          </div>
          <div>
          <Button type="primary" size="m" onClick={() => alert("Даный проект сделан в рамках учебного курса!")}>
            Оплатить заказ
          </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
