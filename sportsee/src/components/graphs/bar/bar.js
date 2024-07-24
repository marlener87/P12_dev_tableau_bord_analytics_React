import React, { useEffect, useState } from 'react';
import './bar.scss';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const App = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch(`http://localhost:3000/user/12/activity`)
      .then(response => response.json())
      .then(responseData => {
        setData(responseData.data.sessions);
      })
      .catch(error => {
        console.log(error);
      });
    }, [])

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
                data={data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis orientation="right" />
                <Tooltip className="tooltip" />
                <Legend />
                <Bar dataKey="kilogram" fill="#282D30" barSize={7} />
                <Bar dataKey="calories" fill="#E60000" barSize={7} />
            </BarChart>
        </div>
    );
}

export default App;
