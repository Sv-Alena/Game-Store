import "./product-genre.css";

export const ProductGenre = ({ genre = '' }) => {
    return <span className="product-genre">{ genre }</span>
}