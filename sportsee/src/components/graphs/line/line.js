import React, { useEffect, useState } from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import './line.scss';
//import { fetchUserSession } from '../../../service/api';
import UserService from '../../../services/userService';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="customTooltip" style={{ backgroundColor: '#fff', padding: '5px', border: '1px solid #ccc' }}>
        <p className="label">{`${payload[0].value} min`}</p>
      </div>
    );
  }

  return null;
};

const LineGraph = ({ userId }) => {
    const [userSessionFactory, setUserSessionFactory] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const objectFromFactory = await UserService.getSession(userId)
            console.log(objectFromFactory)
            
            setUserSessionFactory(objectFromFactory);
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
  
    return (
        <div className="graphiqueLigne">
            <div className="titleApp">
                <h2>Durée moyenne des sessions</h2>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    data={userSessionFactory.sessions}
                    margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />} />
                    <Area type="monotone" dataKey="sessionLength" stroke="#ffffff" fill="#FF0000" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};
  
export default LineGraph;