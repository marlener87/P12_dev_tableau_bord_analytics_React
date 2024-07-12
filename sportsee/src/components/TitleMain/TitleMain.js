import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TitleMain = () => {
    const [name, setName] = useState('');
    let { id } = useParams();
    console.log(id);

    useEffect(() => {
        fetch(`http://localhost:3000/user/${id}`)
        .then(response => response.json())
        .then(data => {
            /*const user = data.find(user => user.id === parseInt(id));
            if (user) {
                setName(user.userInfos.firstName);
            }
           console.log(data.data)*/
           // setName(data.data.userInfos.firstName)
           setName(data.data.userInfos.firstName)
        })
        .catch(error => console.error('Error fetching user data:', error));
}, [id]);



    return (
        <div className="titleSection">
            <h1>Bonjour {name}</h1>
        </div>
    );
};

export default TitleMain;