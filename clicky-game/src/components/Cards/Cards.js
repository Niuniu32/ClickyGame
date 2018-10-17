import React from "react";
import "./Cards.css";

const cards = props => (
    <div className="card container">
        <div className="img-div">
            <img alt={props.name} src={props.image} />
        </div>
        <div>
            Hello Game
        </div>

    </div>
);
export default cards;