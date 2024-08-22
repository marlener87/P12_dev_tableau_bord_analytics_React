import React, { useEffect, useState } from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import './radial.scss';
//import { fetchUserData } from '../../../service/api';
import UserService from '../../../services/userService';

const Radial = ({ userId }) => {
    //const [data, setData] = useState([]);
    const [userScoreFactory, setUserScoreFactory] = useState();
    const [percentage, setPercentage] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);


    // useEffect(() => {
    //     fetch(`http://localhost:3000/user/12`)
    //     .then(response => response.json())
    //     .then(responseData => {
    //       //setData(responseData.data.score);

    //         //console.log(responseData.data);
    //         const userScore = responseData.data.score;
    //         //console.log(userScore);
            
    //         const formattedData = [
    //             { name: 'Score', value: userScore * 100, fill: '#FF0000' }
    //         ];
    //         setData(formattedData);
    //         setPercentage(userScore);
    //         //console.log(formattedData);
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });
    // }, [])

    // useEffect(() => {
    //     fetchUserData(userId)
    //         .then(userData => {
    //             const userScore = userData.score;
    //             const formattedData = [
    //                 { name: 'Score', value: userScore * 100, fill: '#FF0000' }
    //             ];
    //             setData(formattedData);
    //             setPercentage(userScore);
    //         })
    //         .catch(error => {
    //             console.error('Erreur lors de la récupération des données:', error);
    //         });
    // }, [userId]);

    //   useEffect(() => {
    //     UserService.getScore(userId)
    //         .then(({ formattedData, percentage }) => {
    //             setData(formattedData);
    //             setPercentage(percentage);
    //             setIsLoading(false);
    //         })
    //         .catch(error => {
    //             console.error('Erreur lors de la récupération des données:', error);
    //             setIsError(true);
    //             setIsLoading(false);
    //         });
    // }, [userId]);

    useEffect(() => {
        const fetchData = async () => {
            const objectFromFactory = await UserService.getScore(userId);
            //console.log(objectFromFactory);
            const formattedData = [
                { name: 'Score', value: objectFromFactory.score * 100, fill: '#FF0000' }
            ];

            setPercentage(objectFromFactory.score)
            setUserScoreFactory(formattedData);
            setIsLoading(false);
        }
        fetchData()
    }, [userId]);

    if(isLoading) {
      return <p>Chargement en cours...</p>
    }

    if(isError){
        return <p>Une erreur est survenue...</p>
    }

    return (
      <div className="graphiqueRadial">
          <div className="titleRadial">
              <h2>Score</h2>
          </div>
          <ResponsiveContainer width="100%" height="100%" >
              <RadialBarChart 
                  cx="50%" 
                  cy="50%" 
                  innerRadius="80%" 
                  outerRadius="70%" 
                  barSize={10} 
                  data={userScoreFactory}
                  startAngle={90}
                  endAngle={90 + 360 * percentage}
              >
                  <RadialBar
                      minAngle={15}
                      //label={{ position: 'insideStart', fill: '#fff' }}
                      background
                      clockWise
                      dataKey="value"
                      cornerRadius={10}
                  />
              </RadialBarChart>
              <div className="pourcentage">
                  <div className="textContainer">
                      <span className="nombreScore">{percentage * 100}%</span>
                      <span> de votre objectif</span>
                  </div>
              </div>
          </ResponsiveContainer>
      </div>
    );
}

export default Radial;