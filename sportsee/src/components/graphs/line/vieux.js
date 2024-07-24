import React, { useEffect, useState } from 'react';
import './line.scss';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const GraphicLine = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch(`http://localhost:3000/user/12/average-sessions`)
      .then(response => response.json())
      .then(responseData => {
        setData(responseData.data.sessions);
      })
      .catch(error => {
        console.log(error);
      });
    }, [])

    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
            width={258}
            height={263}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default GraphicLine;