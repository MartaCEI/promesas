import { useState, useEffect } from "react";
import ProductoCard from "../components/ProductoCard";
import '../css/FakeStore.css';

const FakeStoreApi = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }
    , []);

    const fetchProducts = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProducts(data);
        }
        catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="Store-container">
            <h1 className="Store-h1">Fake Store API</h1>
            <p className="Store-p">Here is a list of products from the Fake Store API:</p>
            <ul className="Store-ul">
                {
                products.map(product => (
                    <li className="Store-li" key={product.id}>
                        <ProductoCard {...product} />
                    </li>
                ))
                }
            </ul>
        </div>
    );
}

export default FakeStoreApi;