import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="Header">
        <div className="Header-div">
            <h1 className="Header-h1">Mi Sitio Web</h1>
            <nav className="Header-nav">
                <ul className="Header-ul">
                    <li><NavLink to={"/"} className="Header-a">Home</NavLink></li>
                    <li><NavLink to={"/"} className="Header-a">1</NavLink></li>
                    <li><NavLink to={"/"} className="Header-a">2</NavLink></li>
                    <li><NavLink to={"/"} className="Header-a">3</NavLink></li>
                </ul>
            </nav>
        </div>
    </header>
    );
}

export default Header;