import React, { useEffect, useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import './radar.scss';
import UserService from '../../../services/userService';

const RadarGraph = ({ userId }) => {
    const [userPerformanceFactory, setUserPerformanceFactory] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    // useEffect(() => {
    //   fetch(`http://localhost:3000/user/12/performance`)
    //   .then(response => response.json())
    //   .then(responseData => {
    //      // Transforme les datas pour inclure les noms des kind
    //      const transformedData = responseData.data.data.map(item => ({
    //         ...item,
    //         kindName: responseData.data.kind[item.kind]
    //     })).reverse();
    //     //setData(responseData.data.data);
    //     setData(transformedData);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    // }, [])

    useEffect(() => {
        const fetchData = async () => {
            const objectFromFactory = await UserService.getPerformance(userId)
            //console.log(objectFromFactory)
            //console.log(objectFromFactory.kind);
            
            setUserPerformanceFactory(objectFromFactory.data);
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
        <div className="graphiqueRadar">
            <ResponsiveContainer width="100%" height="100%" >
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={userPerformanceFactory}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="kindName" />
                    <PolarRadiusAxis />
                    <Radar dataKey="value" fill="#E60000" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default RadarGraph;