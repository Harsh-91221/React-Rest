import React, { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link, NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    const [isLogged, setIsLogged] = useState(false);
    const handleLogin = () => setIsLogged(!isLogged);
    const onlineStatus = useOnlineStatus();
    const { loggedInUser } = useContext(userContext);
    const cartItems = useSelector((store) => store.cart.items);

    return (
        <header className="header">
            <div className="logoContainer">
                <Link to="/">
                    <img className="logo" src={LOGO_URL} alt="Namaste Food Logo"></img>
                </Link>
                <Link to="/" className="logo-text">
                    <h1>Namaste Food</h1>
                </Link>
            </div>
            <nav>
                <ul className="navItems">
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart" className="cartIcon" aria-label={`Cart with ${cartItems.length} items`}>
                            <FontAwesomeIcon icon={faCartShopping} />
                            {cartItems.length > 0 && <span className="cartCount">{cartItems.length}</span>}
                        </NavLink>
                    </li>
                    <li>
                        <span 
                            className={`onlineStatus ${onlineStatus ? 'online' : 'offline'}`}
                            title={onlineStatus ? "Online" : "Offline"}
                        ></span>
                        <button 
                            className="login-btn" 
                            onClick={handleLogin}
                        >
                            {isLogged ? "Logout" : "Login"}
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
