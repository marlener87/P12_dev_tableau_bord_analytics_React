import React, { useEffect, useState } from 'react';
import ApportAside from './aside';
import UserService from '../../services/userService';
import './apport.scss';

const Apport = ({userId}) => {
    const [userFactory, setUserFactory] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const objectFromFactory = await UserService.getUser(userId)
            console.log(objectFromFactory.keyData)
            
            setUserFactory(objectFromFactory);
            setIsLoading(false)
        }
      
        fetchData()

    }, [userId])


    if(isLoading) {
        return <p>Chargement en cours...</p>
    }

    if(isError){
        return <p>Une erreur est survenue...</p>
    }

    // Je veux parcourir des données, et demander un affichage
    return (
        <div className='apportBlock'>
            {userFactory.getApports().map((item, index) => (
                <ApportAside key={index} unit={item.unit} title={item.title} value={item.value} image={item.image} />
            ))}
        </div>
    );
};

export default Apport;