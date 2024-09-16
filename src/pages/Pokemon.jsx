import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


const Pokemon = () => {
    const {id} = useParams();

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchSinglePokemon();
    }, []);

    const fetchSinglePokemon = async () => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const objeto = await response.json();
            console.log(objeto);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <article className="Post-article">
            <h2 className="Post-h2">{data.name}</h2>
            <p className="Post-p">{data.height}</p>
        </article>
    );
}

export default Pokemon;