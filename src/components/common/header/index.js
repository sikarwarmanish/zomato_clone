import React from 'react';
import "./header.css";

function Header() {
    return (
        <div className="max-width header">
        <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="Zomato-logo"
        className="header-logo" 
        />
        <div className="header-right">
                <div className="header-location-search-container">
                    <div className="location-wrapper">
                        <div className="location-icon-name">
                            <i className="fas fa-map-marker-alt absolute-center location-icon"></i>
                            <div>
                                <input type="text" placeholder="Pune" className="location-text"></input>
                            </div>
                        </div>
                        <i className="fas fa-caret-down absolute-center"></i>
                    </div>
                    <div className="location-search-separator"></div>
                    <div className="header-searchbar">
                        <i className="fas fa-search absolute-center search-icon"></i>
                        <input placeholder ="Search for a restaurant, cuisine or a dish" className="search-input" />
                    </div>
                </div>
                <div className="profile-wrapper">
                    <img src="https://b.zmtcdn.com/images/user_avatars/mug_2x.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A" alt="profile" className="header-profile-image" />
                    <span className="header-username">Manish</span>
                    <i className="fas fa-angle-down absolute-center profile-options-icon"></i>
                </div>

        </div>
        </div>
    );
}

export default Header;