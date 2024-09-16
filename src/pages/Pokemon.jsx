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
            setData(objeto);
        } catch (error) {
            console.error(error);
        }
    }

    const {abilities, forms, moves, species, name, sprites, height, weight, type} = data;
    const {back_default, front_default, back_shiny, front_shiny} = sprites || {};

    return (
        <article className="Post-article">
            <h2 className="Post-h2">{name}</h2>
            <div>
                <img src={back_default} alt={name} />
                <img src={front_default} alt={name} />
                <img src={back_shiny} alt={name} />
                <img src={front_shiny} alt={name} />
            </div>
            <p className="Post-p"><b>Height: </b>{height}</p>
            <p className="Post-p"><b>Weight</b>{weight}</p>

            <p><b>Habilidades: </b></p>
            <ul>
                <li>
                    {
                        abilities && abilities.map((ability, index) => (
                            <p key={index} className="Post-p">{ability.ability.name}</p>
                        ))
                    }
                </li>
            </ul>
            <p><b>Fromas: </b></p>
            <ul>
                <li>
                    {
                        forms && forms.map((form, index) => (
                            <p key={index} className="Post-p">{form.name}</p>
                        ))
                    }
                </li>
            </ul>
            <p><b>Movimientos: </b></p>
            <ul>
                <li>
                    {
                        moves && moves.map((move, index) => (
                            <p key={index} className="Post-p">{move.move.name}</p>
                        ))
                    }
                </li>
            </ul>
            <p><b>Especies: </b></p>
            <ul>
                <li>
                    {
                        species && <p className="Post-p">{species.name}</p>
                    }
                </li>
            </ul>
        </article>
    );
}

export default Pokemon;