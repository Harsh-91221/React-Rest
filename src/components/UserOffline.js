import React from 'react';
import offline from "../images/offline.png";

const UserOffline = () => {
    return (
        <div className="user-offline-container">
            <img className="user-offline-image" src={offline} alt="Offline" />
            <h1 className="user-offline-text">You are Offline!</h1>
            <p className="user-offline-subtext">
                Please check your internet connection and try again.
            </p>
        </div>
    );
};
export default UserOffline;
