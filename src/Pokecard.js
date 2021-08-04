import React from 'react';

function Pokecard(props) {
    return (
        <div className="Pokecard">
            <h4>{props.name}</h4>
            <img src={props.img} alt="pokemon"></img>
            <p>Type: {props.type}</p>
            <p>EXP: {props.exp}</p>
        </div>
    );
}

export default Pokecard;