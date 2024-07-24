import React, { useEffect, useState } from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import './line.scss';

// const data = [
//     {
//         day: 1,
//         sessionLength: 30
//     },
//     {
//         day: 2,te
//         sessionLength: 23
//     },
//     {
//         day: 3,
//         sessionLength: 45
//     },
//     {
//         day: 4,
//         sessionLength: 50
//     },
//     {
//         day: 5,
//         sessionLength: 10
//     },
//     {
//         day: 6,
//         sessionLength: 0
//     },
//     {
//         day: 7,
//         sessionLength: 60
//     }
// ];

// export default class LineGraph extends PureComponent {
//     static demoUrl = 'https://codesandbox.io/p/sandbox/line-chart-width-xaxis-padding-8v7952';

    

//     render() {
//         const [data, setData] = useState([]);

//         useEffect(() => {
//             fetch(`http://localhost:3000/user/12/activity`)
//             .then(response => response.json())
//             .then(responseData => {
//             setData(responseData.data.sessions);
//             })
//             .catch(error => {
//             console.log(error);
//             });
//         }, []);



   

//         return (
//             <div className="graphiqueLigne">
//                 <ResponsiveContainer width="100%" height="100%">
//                     <AreaChart
//                     width={500}
//                     height={400}
//                     data={data}
//                     margin={{
//                         top: 10,
//                         right: 30,
//                         left: 0,
//                         bottom: 0,
//                     }}
//                     >
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="name" />
//                     <YAxis />
//                     <Tooltip />
//                     <Area type="monotone" dataKey="sessionLength" stroke="#ffffff" fill="#FF0000" />
//                     </AreaChart>
//                 </ResponsiveContainer>
//             </div>
        
//         );
//     }
// }















const LineGraph = () => {
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
    }, []);
  
    return (
      <div className="graphiqueLigne">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={data}
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
            <Tooltip />
            <Area type="monotone" dataKey="sessionLength" stroke="#ffffff" fill="#FF0000" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  };
  
  export default LineGraph;










/* 
<ResponsiveContainer width="100%" height="100%">
    <LineChart width={300} height={100} data={data}>
        <Line type="monotone" dataKey="sessionLength" stroke="#ffffff" strokeWidth={2} />
    </LineChart>
</ResponsiveContainer>



<ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 0,
                    left: 0,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis display='none' />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="sessionLength" stroke="#ffffff" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
*/