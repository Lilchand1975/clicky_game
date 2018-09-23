

import React from "react";
import "./Card.css";

const Card = props => (
    <div 
        onClick = {() => props.handleClick (props.clicked)}
        key={props.letter} 
        className="card"
        style={{backgroundImage: `url(${"/assets/images/"+props.image})`}}>
        
        {props.letter}
    </div>
);


     export default Card;