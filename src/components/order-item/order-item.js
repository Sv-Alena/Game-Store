import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/cartSlice";
import { IoIosCloseCircleOutline }  from "react-icons/io";
import "./order-item.css"

export const OrderItem = ({ product }) => {
  const dispatch = useDispatch();
  const clickBatton = () => {
    dispatch(removeItemFromCart(product.id));
  };

  return (
    <div className="order-item">
      <div>
        <img
          src={product.image}
          className="order-item_photo"
        />
      </div>
      <div className="order-item_title">
        <span>{product.title}</span>
      </div>
      <div className="order-item_price">
        <span>{product.price} ₽</span>
        <IoIosCloseCircleOutline
          size={25}
          className="order-item_delet-icon"
          onClick={clickBatton}
        />
      </div>
    </div>
  );
};
