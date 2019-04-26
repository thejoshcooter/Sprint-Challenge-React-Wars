import React from 'react';
import styles from './components.css';

const Profile = props => {
    return (
        <div className="card">
            <img src="https://www.bing.com/th?id=OIP.UzYRJV4QciTJFWFshMgKkAHaHa&pid=Api&rs=1&p=0" alt="darth maul" />
                <div className="profile">
                    <div className="">
                        <h1>Profile</h1>
                        <h2>Name: {props.char.name}</h2>
                        <h2>Gender: {props.char.gender}</h2>
                        <h2>Birth Date: {props.char.birth_year}</h2>
                    </div>

                    <div className="">
                        <h1>Attributes</h1>
                        <h2>Mass: {props.char.mass}kg</h2>
                        <h2>Eye Color: {props.char.eye_color}</h2>
                        <h2>Hair Color: {props.char.hair_color}</h2>
                        <h2>Skin Color: {props.char.skin_color}</h2>
                    </div>
                </div>
        </div>
    );
};

export default Profile;