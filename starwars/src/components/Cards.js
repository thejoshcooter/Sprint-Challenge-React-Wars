import React from 'react';
import Profile from './Profile';

const Cards = props => {
    return (
        <div class="cards">
            {props.starwarsChars.map((char, i) => {
                return <Profile
                        char={char}
                        index={i}
                        />
            })}
        </div>
    );
};

export default Cards;