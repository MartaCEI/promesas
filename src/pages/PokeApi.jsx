import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo_pokemon from "../assets/Pokemon.png";
import '../css/PokeApi.css'

const PokeApi = () => {
    const [pokemon, setPokemon] = useState({
        count: 0,
        next: "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20",
        previous: null,
        results: []
    });
    const [filter, setFilter] = useState("");
    let disable = false;

    useEffect(() => {
        fetchPokemon();
    }, []);

    const fetchPokemon = async (url = "https://pokeapi.co/api/v2/pokemon") => {
        try {
            const response = await fetch(url);
            const objeto = await response.json();
            setPokemon({
                count: objeto.count,
                next: objeto.next,
                previous: objeto.previous,
                results: objeto.results
            });
            console.log(objeto);
        } catch (error) {
            console.error(error);
        }
    }



    const handlePrevPage = () => {
        if (pokemon.previous) {
            fetchPokemon(pokemon.previous);
        } else {
            disable = true;
        }
    }

    const handleNextPage = () => {
        if (pokemon.next) {
            fetchPokemon(pokemon.next);
        } else {
            disable = true;
        }
    }

    return (
        <section className="Section">
            <img className="Section-img" src={logo_pokemon} alt="pokemon" />
            <h2 className="Section-h2" >Aquí encontrarás toda la información sobre tus pokémon favoritos</h2>
            <p className="Section-cantidad" >Cantidad de pokémon: {pokemon.count}</p>
            <div className="Section-div">
                <button className="Section-btn" onClick={handlePrevPage} disabled={disable}>Prev</button>
                <button className="Section-btn" onClick={handleNextPage} disabled={disable}>Next</button>
            </div>
                <ul className="Section-ul">
                    {pokemon.results.map((poke, index) => (
                        <li key={index}>
                            <Link key={index} to={`/pokeApi/${index}`} {...poke}>
                                <p className="Section-p">{poke.name}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
        </section>
    );
}

export default PokeApi;