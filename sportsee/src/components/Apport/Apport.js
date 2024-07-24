import React, { useEffect, useState } from 'react';
import ApportAside from './aside';

import caloriesIcon from '../../assets/img/calories-icon.png';
import proteinIcon from '../../assets/img/protein-icon.png';
import carbsIcon from '../../assets/img/carbs-icon.png';
import lipidIcon from '../../assets/img/fat-icon.png';


import './apport.scss';

const Apport = ({userId}) => {

    const [data, setData] = useState([]);
    //console.log(data);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:3000/user/${userId}`)
        .then(response => response.json())
        .then(response => {
    
            // OK j'ai une réponse
            setTimeout(() => {
                setData([
                    {title: 'Calories', unit: 'kCal', value: response.data.keyData.calorieCount, image: caloriesIcon},
                    {title: 'Proteines', unit: 'g', value: response.data.keyData.proteinCount, image: proteinIcon},
                    {title: 'Glucides', unit: 'g', value: response.data.keyData.carbohydrateCount, image: carbsIcon},
                    {title: 'Lipides', unit: 'g', value: response.data.keyData.lipidCount, image: lipidIcon},            
                ])
                setIsLoading(false)
            }, 1000) 
  
        })
        .catch(error =>{
            // KO j'ai une erreur
            console.error('Error fetching user data:', error)
            setIsError(true);
        });
    }, [userId]);
    
    if(isError) {
        return <p>Une erreur est survenue.</p>
    }

    if(isLoading) {
        return <p>Chargement en cours</p>
    }

    return (
        <div className='apportBlock'>
            

            {data.map((item, index) => (
                <ApportAside key={index} unit={item.unit} title={item.title} value={item.value} image={item.image} />
            ))}

        </div>
    );
};

export default Apport;