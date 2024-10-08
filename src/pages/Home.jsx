import { Link } from 'react-router-dom';
import Pokemon from '../assets/img/Pokemon.jpg';
import Store from '../assets/img/Store.jpg';
import Users from '../assets/img/Users.jpg';

const Home = () => {
    
    return (
        <main>
            <section className='Main-section'>
                <h2 className='Main-h2'>Promesas, Peticiones y Fetch en React.js</h2>
                <p className='Main-p'>En esta página podrás encontrar como funciona en un front-end the React con Vite las siguentes tres APIS:</p>
                <div className='Main-grid'>
                    <div className='Main-div'>
                        <Link to='/pokeApi' >
                            <p className='Main-p'>https://pokeapi.co/</p>
                            <img className='Main-img' src={Pokemon} alt="Pokemon" />
                        </Link>
                    </div>
                    <div className='Main-div'>
                        <Link to='/products'>
                            <p className='Main-p'>https://fakestoreapi.com/</p>
                            <img className='Main-img' src={Store} alt="Store" />
                        </Link>
                    </div>
                    <div className='Main-div'>
                        <Link to='/randomUser'>
                            <p className='Main-p'>https://randomuser.me/</p>
                            <img className='Main-img' src={Users} alt="Users" />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;