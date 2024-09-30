import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"

const Pokemon = () => {
    const {id} = useParams();
    const [data, setData] = useState([]);
    const {VITE_POKEMON} = import.meta.env;
    const [userError, setUserError] = useState(null);

    useEffect(() => {
        fetchSinglePokemon();
    }, []);

    const fetchSinglePokemon = async () => {
        const controller = new AbortController();
        try {
            const response = await fetch(`${VITE_POKEMON}/${id}`);
            const objeto = await response.json();
            if (objeto.status == "error") {
                setUserError(`Tuvimos un error: ${objeto.msg}`)
                return;
            } 
            setData(objeto);
        } catch (error) {
            console.error(error);
        } finally {
            controller.abort();
        }
    }

    const {abilities, base_experience,order, forms, moves, species, stats, name, sprites, height, weight, type} = data;
    const {back_default, front_default, back_shiny, front_shiny} = sprites || {};

    return (
        <article className="Article-container">
            <div className="Article-div">
                <h2 className="Article-h2">{name}</h2>
            </div>

            <div className="Article-div">
                <img src={back_default} alt={name} />
                <img src={front_default} alt={name} />
                <img src={back_shiny} alt={name} />
                <img src={front_shiny} alt={name} />
            </div>

            <div className="Article-div">
                <p className="Article-p"><b>Height: </b>{height}</p>
                <p className="Article-p"><b>Weight: </b>{weight}</p>
                <p className="Article-p"><b>Base Experience: </b>{base_experience}</p>
            </div>

            <div className="Article-div">
                <p className="Article-p"><b>Número de orden en la pokedex: </b>{order}</p>
            </div>

            <div className="Article-map">
                <p className="Article-p"><b>Habilidades: </b></p>
                <ul>
                    <li>
                        {
                            abilities && abilities.map((ability, index) => (
                                <p key={index} className="Article-p">{ability.ability.name}</p>
                            ))
                        }
                    </li>
                </ul>
            </div>

            <div className="Article-map">
                <p className="Article-p"><b>Formas: </b></p>
                <ul>
                    <li>
                        {
                            forms && forms.map((form, index) => (
                                <p key={index} className="Article-p">{form.name}</p>
                            ))
                        }
                    </li>
                </ul>
            </div>

            <div className="Article-map">
            <p className="Article-p"><b>Estadísticas: </b></p>
                <ul>
                    <li>
                        {
                            stats && stats.map((stat, index) => (
                                <p key={index} className="Article-p">{stat.stat.name}: {stat.base_stat}</p>
                            ))
                        }
                    </li>
                </ul>
            </div>

            <div className="Article-map">
                <p className="Article-p"><b>Especies: </b></p>
                <ul>
                    <li>
                        {
                            species && <p className="Article-p">{species.name}</p>
                        }
                    </li>
                </ul>
            </div>
        </article>
    );
}

export default Pokemon;