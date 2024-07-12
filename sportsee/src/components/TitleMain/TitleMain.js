import React, { useEffect, useState } from 'react';
import './titleMain.scss';

const TitleMain = ({userId}) => {
    const [name, setName] = useState('');

    useEffect(() => {
        fetch(`http://localhost:3000/user/${userId}`)
        .then(response => response.json())
        .then(data => {
           setName(data.data.userInfos.firstName)
           //console.log(name);
        })
        .catch(error => console.error('Error fetching user data:', error));
    }, [userId]);



    return (
        <div className="titleSection">
            <h1>Bonjour <span className='prenomValeur'>{name}</span></h1>
            <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    );
};

export default TitleMain;