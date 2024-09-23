import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="Header">
        <div className="Header-div">
            <h1 className="Header-h1">Promesas</h1>
            <nav className="Header-nav">
                <ul className="Header-ul">
                    <li><NavLink to={"/"} className="Header-a">Home</NavLink></li>
                    <li><NavLink to={"/products"} className="Header-a">StoreApi</NavLink></li>
                    <li><NavLink to={"/randomUser"} className="Header-a">RandomUser</NavLink></li>
                    <li><NavLink to={"/pokeApi"} className="Header-a">PokeApi</NavLink></li>
                </ul>
            </nav>
        </div>
    </header>
    );
}

export default Header;