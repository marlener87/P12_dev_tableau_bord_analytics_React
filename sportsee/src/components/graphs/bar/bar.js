import React, { useEffect, useState } from 'react';
import './bar.scss';
import UserService from '../../../services/userService';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="customTooltip">
                <p className='textTooltip'>{`${payload[0].value}kg`}</p>
                <p>{`${payload[1].value}kCal`}</p>
            </div>
        );
    }
    return null;
};

const App = ({ userId }) => {
    const [userActivityFactory, setUserActivityFactory] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const objectFromFactory = await UserService.getActivity(userId);
            console.log(objectFromFactory);
            
            setUserActivityFactory(objectFromFactory);
            setIsLoading(false);
        }
      
        fetchData()

    }, [userId])

    if(isLoading) {
        return <p>Chargement en cours..</p>
    }

    if(isError){
        return <p>Une erreur est survenue..</p>
    }

    return (
        <div className="app">
            <div className="titleApp">
                <h2>Activité quotidienne</h2>
                <ul>
                    <li>Poids (kg)</li>
                    <li>Calories brûlées (kCal)</li>
                </ul>
            </div>
            
            <BarChart
                width={800}
                height={250}
                data={userActivityFactory.sessions}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis orientation="right" />
                <Tooltip className="tooltip" content={<CustomTooltip />} />
                <Legend />
                <Bar dataKey="kilogram" fill="#282D30" barSize={7} radius={[20, 20, 0, 0]} />
                <Bar dataKey="calories" fill="#E60000" barSize={7} radius={[20, 20, 0, 0]} />
            </BarChart>
        </div>
    );
}

export default App;
