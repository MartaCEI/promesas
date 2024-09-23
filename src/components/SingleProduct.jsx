const SingleProduct = ({title, price, description, category, image}) => {

    return (
        <div className="Product-container">
            <div className="Product-containerLeft">
                <img className="Product-img" src={image} alt={title} />
            </div>
            <div className="Product-containerRight">
                <h2 className="Product-title"><b>{title}</b></h2>
                <p className="Product-description">{description}</p>
                <p className="Product-price">Price: ${price}</p>
                <p className="Product-description">Category: {category}</p>
                <button className="Product-button">Add to cart</button>
            </div>
        </div>
    );
}

export default SingleProduct;