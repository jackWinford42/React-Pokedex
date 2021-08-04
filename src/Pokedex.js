import React from 'react';
import Pokecard from './Pokecard';

function Pokedex(props) {
    return (
        <div className="Pokedex">
            <h2 className="Pokedex-title">Pokedex</h2>
            <div className="Pokedex-cards">
                {props.pokemon.map(newProps => (
                    <Pokecard
                    id={newProps.id}
                    img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${newProps.id}.png`}
                    name={newProps.name}
                    type={newProps.type}
                    exp={newProps.base_experience}
                    />
                ))}
            </div>
        </div>
    );
}

export default Pokedex;