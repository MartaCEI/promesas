import { useState, useEffect } from "react";
import ProductoCard from "../components/ProductoCard";
import '../css/FakeStore.css';

const FakeStoreApi = () => {
    const [products, setProducts] = useState([]);
    const [userError, setUserError] = useState(null);
    const {VITE_FAKE_STORE} = import.meta.env;

    useEffect(() => {
        fetchProducts();
    }
    , []);

    const fetchProducts = async () => {
        const controller = new AbortController();
        try {
            const response = await fetch(`${VITE_FAKE_STORE}`);
            const data = await response.json();
            if (data.status == "error") {
                setUserError(`Tuvimos un error: ${data.msg}`)
                return;
            } 
            setProducts(data);
        }
        catch (error) {
            console.error('Hubo un problema con la solicitud:', error.message);
        }   finally {
            controller.abort();
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