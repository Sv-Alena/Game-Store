import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { BsCart } from "react-icons/bs";
import { CartMenu } from "../../cart-menu/cart-Menu";
import "./cart-block.css";
import { calcTotalPrice } from "../../calc-total-price/calc-total-price";
import { QuantityInCart } from "../../quantity-in-cart/quantity-in-cart";
import { useNavigate } from "react-router-dom";

export const CartBlock = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const items = useSelector((state) => state.cart.itemInCart);
  const totalPrice = calcTotalPrice(items);
  const navigate = useNavigate();

  const btnBuy = useCallback(() => {
    setIsCartMenuVisible(false);
    navigate("/order"); 
  }, [navigate]);

  return (
    <div className="cart-block">
      <QuantityInCart quantity={items.length} />
      <BsCart
        size={25}
        className="cart-block_icons"
        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
      />
      {totalPrice > 0 ? (
        <span className="cart-block_total-price"> {totalPrice} ₽</span>
      ) : null}
      {isCartMenuVisible && <CartMenu items={items} onClick={btnBuy}/>}
    </div>
  );
};
