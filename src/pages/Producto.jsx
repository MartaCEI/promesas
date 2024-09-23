import { useParams } from 'react-router-dom';
import SingleProduct from '../components/SingleProduct';
import { useEffect, useState } from 'react';

const Producto = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const {VITE_FAKE_STORE} = import.meta.env;

    useEffect(() => {
        fetchProduct();
    }
    , []);

    const fetchProduct = async () => {
        try {
            const response = await fetch(`${VITE_FAKE_STORE}/${id}`);
            const data = await response.json();
            setProduct(data);
        }
        catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <SingleProduct {...product} />
        </div>
    );
}

export default Producto;