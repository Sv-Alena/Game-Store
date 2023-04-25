import { useSelector } from "react-redux";
import { BuyPrice } from "../../components/buttonBuyAndPrice/buy-price";
import { ProductGenre } from "../../components/product-genre/product-genre";
import "./product-page.css";

export const ProductPage = () => {
  const product = useSelector((state) => state.product.currentProduct);

  if (!product) return null;

  return (
    <div className="product-page">
      <h1 className="product-page_title">{product.title}</h1>

      <div className="product-page_content">
        <div className="product-page_left">
        <iframe
            width="90%"
            height="400px"
            src={product.video}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>

        <div className="product-page_right">
        <img
            src={product.image}
            alt="game"
            className="product-page_image"
          />
          <p>Назначение: {product.description}</p>
          <p className="secondary-text">Популярные метки для этого продукта:</p>
          {product.genres.map((genre) => (
            <ProductGenre genre={genre} key={genre} />
          ))}
          <div className="product-page_buy-product" >
          <BuyPrice product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};
