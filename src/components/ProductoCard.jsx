

const ProductoCard = ({title, price, description, category, image, rating}) => {
    const {rate, count} = rating;

    return (
        <div>
            <h2>{title}</h2>
            <img src={image} alt={title} />
            <p>{description}</p>
            <p>Price: ${price}</p>
            <p>Category: {category}</p>
            <p>Rating: {rate} ({count} reviews)</p>
        </div>
    );
}

export default ProductoCard;