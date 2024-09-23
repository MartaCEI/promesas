import { Link } from "react-router-dom";

const ProductoCard = ({id, title, price, description, category, image, rating}) => {
    const {rate, count} = rating;

    return (
        <div className="Store-innerContainer">
            <img className="Store-img" src={image} alt={title} />
                <h2 className="Store-title"><b>{title}</b></h2>
                {/* <p className="Store-description">{description}</p> */}
                <p className="Store-price">Price: ${price}</p>
            <p>Rating: {rate} ({count} reviews)</p>
            <Link to={`/products/${id}`} className="Store-button">Ver más...</Link>
        </div>
    );
}

export default ProductoCard;

