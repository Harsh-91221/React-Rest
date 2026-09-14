import React, { useState, useContext, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faSun, faMoon, faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const onlineStatus = useOnlineStatus();
    const { loggedInUser } = useContext(userContext);
    const cartItems = useSelector((store) => store.cart.items);
    const navigate = useNavigate();

    // Initialize theme from localStorage on mount
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            setIsDarkMode(false);
            document.documentElement.classList.remove('dark-mode');
            document.documentElement.classList.add('light-mode');
        } else {
            setIsDarkMode(true);
            document.documentElement.classList.remove('light-mode');
            document.documentElement.classList.add('dark-mode');
        }
    }, []);

    const toggleTheme = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        
        if (newMode) {
            document.documentElement.classList.remove('light-mode');
            document.documentElement.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark-mode');
            document.documentElement.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };

    return (
        <header className="header">
            <div className="logoContainer">
                <Link to="/">
                    <img className="logo" src={LOGO_URL} alt="Noir Table" />
                </Link>
            </div>
            
            <div className="header-controls">
                {/* Theme Toggle */}
                <button 
                    className="theme-toggle" 
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                >
                    {isDarkMode ? (
                        <FontAwesomeIcon icon={faSun} className="theme-icon" />
                    ) : (
                        <FontAwesomeIcon icon={faMoon} className="theme-icon" />
                    )}
                </button>
                
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
                            {loggedInUser ? (
                                <div className="user-menu">
                                    <button className="user-btn" onClick={handleLogout}>
                                        <FontAwesomeIcon icon={faUser} />
                                        <span>{loggedInUser.name || 'User'}</span>
                                    </button>
                                </div>
                            ) : (
                                <button 
                                    className="login-btn" 
                                    onClick={() => navigate('/login')}
                                >
                                    <FontAwesomeIcon icon={faUser} />
                                    Login
                                </button>
                            )}
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
