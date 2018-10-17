import React from "react";
import "./Header.css"

const Header = props => (
    <div className="container">
        <nav className="navbar">
            <ul>
                <li>Clicky Game</li>
                <li>Click An Image to begin!</li>
                <li>Score:{props.score}|Top Score:{props.topscore}</li>
            </ul>
        </nav>
    </div>
);

export default Header;