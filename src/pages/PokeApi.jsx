import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PokeApi = () => {
    const [pokemon, setPokemon] = useState([
        count = null,
        next = "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20",
        previous = null,
        results = []
    ]);

    useEffect(() => {
        fetchPokemon();
    }   , []);

    const fetchPokemon = async () => {
        try {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon");
            const objeto = await response.json();
            setPokemon(objeto.results);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <h1>PokeApi</h1>
            <p>Aquí encontraras toda la informacion sobre tus pokemosn favoritos</p>
            <ul>
                {pokemon.map((poke, index) => (
                    <li key={index}>
                        <Link to={"/pokemon"}>
                            {poke.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PokeApi;