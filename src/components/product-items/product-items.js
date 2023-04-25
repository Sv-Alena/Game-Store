import { BuyPrice } from "../buttonBuyAndPrice/buy-price";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentProduct } from "../../redux/pageSlice";
import { ProductGenre } from "../product-genre/product-genre";
import "./product-items.css";

export const ProductItems = ({ product }) => {
  const navigate = useNavigate();
  const dispath = useDispatch();

  const openProduct = () => {
    dispath(setCurrentProduct(product));
    navigate("/app/${product.title}");
  };
  return (
    <div className="product-item" onClick={openProduct}>
      <img
        src={product.image}
        alt="game"
        className="product-item_photo"
      />
      
      <div className="product-item_details">
        <span className="product-item_title">{product.title}</span>
      </div>
      <div className="product-item__genre">
          {product.genres.map((genre) => (
            <ProductGenre genre={genre} key={genre} />
          ))}
        </div>
      <div className="product-item_buy">
        <BuyPrice product={product} />
      </div>
    </div>
  );
};
