import { useState } from "react";
import contact from "../images/contact.jpg";
import { Link } from "react-router-dom";

const Contact = () => {
    const [message, setMessage] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    };

    return (
        <div className="contact-container">
            <div className="contact-wrapper">
                <div className="contact-image-section">
                    <img src={contact} alt="Contact Us" className="contact-image" />
                </div>
                <div className="contact-form-container">
                    <h1 className="contact-title">Get in Touch</h1>
                    <p className="contact-subtitle">We'd love to hear from you! Send us a message.</p>
                    
                    <div className="contact-info-box">
                        <div className="contact-info-item">
                            <span className="info-label">Email:</span>
                            <span className="info-value">harshch91221@gmail.com</span>
                        </div>
                        <div className="contact-info-item">
                            <span className="info-label">Phone:</span>
                            <span className="info-value">7906652880</span>
                        </div>
                    </div>
                    
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Your Message..." required></textarea>
                        </div>
                        <button type="submit" className="submit-btn">Send Message</button>
                        {message && <div className="success-message">Thanks for contacting us! We will reply ASAP.</div>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
