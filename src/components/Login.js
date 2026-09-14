import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import userContext from "../utils/userContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    
    const { setUser } = useContext(userContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 800));

        if (!email || !password) {
            setError("Please fill in all fields");
            setLoading(false);
            return;
        }

        if (!isLogin && !name) {
            setError("Please enter your name");
            setLoading(false);
            return;
        }

        // Mock authentication
        const userData = {
            id: Date.now(),
            name: isLogin ? email.split('@')[0] : name,
            email: email,
            avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(isLogin ? email.split('@')[0] : name)}&background=ff6b35&color=fff`
        };

        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        setLoading(false);
        navigate('/');
    };

    return (
        <div className="login-page">
            <div className="login-background">
                <div className="login-glow login-glow-1"></div>
                <div className="login-glow login-glow-2"></div>
                <div className="login-glow login-glow-3"></div>
            </div>

            <div className="login-container">
                {/* Logo Section */}
                <div className="login-logo">
                    <Link to="/" className="login-logo-link">
                        <div className="login-logo-icon">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <span className="login-logo-text">Noir Table</span>
                    </Link>
                    <p className="login-tagline">Refined Dining, Delivered</p>
                </div>

                {/* Login Card */}
                <div className="login-card">
                    {/* Toggle Tabs */}
                    <div className="login-tabs">
                        <button 
                            className={`login-tab ${isLogin ? 'active' : ''}`}
                            onClick={() => { setIsLogin(true); setError(""); }}
                        >
                            Sign In
                        </button>
                        <button 
                            className={`login-tab ${!isLogin ? 'active' : ''}`}
                            onClick={() => { setIsLogin(false); setError(""); }}
                        >
                            Sign Up
                        </button>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="login-form">
                        {!isLogin && (
                            <div className="form-group">
                                <label className="form-label pl-2">Full Name</label>
                                <div className="input-wrapper">
                                    <FontAwesomeIcon icon={faUser} className="input-icon" />
                                    <input
                                        type="text"
                                        className="form-input"
                                        placeholder="John Doe"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                            </div>
                        )}

                        <div className="form-group">
                            <label className="form-label pl-2">Email Address</label>
                            <div className="input-wrapper">
                                <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                                <input
                                    type="email"
                                    className="form-input pl-2"
                                    placeholder="you@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label pl-2">Password</label>
                            <div className="input-wrapper">
                                <FontAwesomeIcon icon={faLock} className="input-icon" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="form-input"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button 
                                    type="button"
                                    className="password-toggle"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                                </button>
                            </div>
                        </div>

                        {error && (
                            <div className="login-error">
                                <FontAwesomeIcon icon={faLock} />
                                <span>{error}</span>
                            </div>
                        )}

                        <button 
                            type="submit" 
                            className="login-submit"
                            disabled={loading}
                        >
                            {loading ? (
                                <span className="loading-spinner"></span>
                            ) : (
                                isLogin ? "Sign In" : "Create Account"
                            )}
                        </button>
                    </form>

                    {/* Footer Links */}
                    <div className="login-footer">
                        {isLogin && (
                            <a href="#" className="forgot-link">Forgot Password?</a>
                        )}
                        <p className="login-terms">
                            {isLogin ? "Don't have an account? " : "Already have an account? "}
                            <button 
                                type="button"
                                className="switch-mode"
                                onClick={() => { setIsLogin(!isLogin); setError(""); }}
                            >
                                {isLogin ? "Sign Up" : "Sign In"}
                            </button>
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="login-divider">
                        <span>or continue with</span>
                    </div>

                    {/* Social Login */}
                    <div className="social-login">
                        <button type="button" className="social-btn google">
                            <svg viewBox="0 0 24 24" width="20" height="20">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                            </svg>
                            Google
                        </button>
                        <button type="button" className="social-btn apple">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                            </svg>
                            Apple
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
