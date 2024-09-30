import { useParams } from 'react-router-dom';
import SingleProduct from '../components/SingleProduct';
import { useEffect, useState } from 'react';

const Producto = () => {
    const [product, setProduct] = useState({});
    const [userError, setUserError] = useState(null);
    const { id } = useParams();
    const {VITE_FAKE_STORE} = import.meta.env;

    useEffect(() => {
        fetchProduct();
    }, []);

    const fetchProduct = async () => {
        const controller = new AbortController();
        try {
            const response = await fetch(`${VITE_FAKE_STORE}/${id}`);
            const data = await response.json();

            if (data.status == "error") {
                setUserError(`Tuvimos un error: ${data.msg}`)
                return;
            } setProduct(data);
        }
        catch (error) {
            console.error('Hubo un problema con la solicitud:', error.message);
        } finally {
            controller.abort();
        }
    }

    return (
        <div>
            <SingleProduct {...product} />
        </div>
    );
}

export default Producto;