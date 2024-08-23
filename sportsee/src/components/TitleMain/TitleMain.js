import React, { useEffect, useState } from 'react';
import './titleMain.scss';

/**
 * Composant `TitleMain` qui affiche un message de bienvenue personnalisé pour l'utilisateur.
 * 
 * @component
 * @param {Object} props - Les propriétés passées au composant.
 * @param {number} props.userId - L'ID de l'utilisateur dont les données doivent être récupérées.
 * @returns {JSX.Element} Le rendu du composant TitleMain.
 */
const TitleMain = ({userId}) => {
    /**
     * État pour stocker le prénom de l'utilisateur récupéré.
     */
    const [name, setName] = useState('');

    /**
     * Effet secondaire pour récupérer les données de l'utilisateur lorsque `userId` change.
     * Utilise `fetch` pour obtenir les données utilisateur depuis une API et met à jour l'état `name` avec le prénom de l'utilisateur.
     */
    useEffect(() => {
        fetch(`http://localhost:3000/user/${userId}`)
        .then(response => response.json())
        .then(data => {
           setName(data.data.userInfos.firstName)
           //console.log(name);
        })
        .catch(error => console.error('Error fetching user data:', error));
    }, [userId]);

    /**
     * Affiche un message de bienvenue personnalisé avec le prénom de l'utilisateur.
     */
    return (
        <div className="titleSection">
            <h1>Bonjour <span className='prenomValeur'>{name}</span></h1>
            <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    );
};

export default TitleMain;