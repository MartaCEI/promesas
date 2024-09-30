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
    const [userError, setUserError] = useState(null);
    let disable = false;
    const {VITE_POKEMON} = import.meta.env;

    useEffect(() => {
        fetchPokemon();
    }, []);

    const fetchPokemon = async (url = `${VITE_POKEMON}`) => {
        const controller = new AbortController();
        try {
            const response = await fetch(url);
            const objeto = await response.json();

            if (objeto.status == "error") {
                setUserError(`Tuvimos un error: ${objeto.msg}`)
                return;
            } 
            setPokemon({
                count: objeto.count,
                next: objeto.next,
                previous: objeto.previous,
                results: objeto.results
            });

        } catch (error) {
            console.error(error);
        } finally {
            controller.abort();
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
        <section className="Pokemon">
            <img className="Pokemon-img" src={logo_pokemon} alt="pokemon" />
            <h2 className="Pokemon-h2" >Aquí encontrarás toda la información sobre tus pokémon favoritos</h2>
            <p className="Pokemon-cantidad" >Cantidad de pokémon: {pokemon.count}</p>
            <div className="Pokemon-div">
                <button className="Pokemon-btn" onClick={handlePrevPage} disabled={disable}>Prev</button>
                <button className="Pokemon-btn" onClick={handleNextPage} disabled={disable}>Next</button>
            </div>
                <ul className="Pokemon-ul">
                    {pokemon.results.map((poke, index) => (
                        <li key={index}>
                            <Link key={index} to={`/pokeApi/${poke.name}`}>
                                <p className="Pokemon-p">{poke.name}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
        </section>
    );
}

export default PokeApi;