import { useParams } from 'react-router-dom';

const Producto = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetchProduct();
    }
    , [id]);

    const fetchProduct = async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/storeApi/${id}`);
            const data = await response.json();
            setProduct(data);
        }
        catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <h1>Producto</h1>
            <p>Product ID: {id}</p>
        </div>
    );
}

export default Producto;