import React, { useEffect, useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import './radar.scss';

// const data = [
//   {
//     subject: 'Math',
//     A: 120,
//     B: 110,
//     fullMark: 150,
//   },
//   {
//     subject: 'Chinese',
//     A: 98,
//     B: 130,
//     fullMark: 150,
//   },
//   {
//     subject: 'English',
//     A: 86,
//     B: 130,
//     fullMark: 150,
//   },
//   {
//     subject: 'Geography',
//     A: 99,
//     B: 100,
//     fullMark: 150,
//   },
//   {
//     subject: 'Physics',
//     A: 85,
//     B: 90,
//     fullMark: 150,
//   },
//   {
//     subject: 'History',
//     A: 65,
//     B: 85,
//     fullMark: 150,
//   },
// ];

const RadarGraph = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch(`http://localhost:3000/user/12/performance`)
      .then(response => response.json())
      .then(responseData => {
        setData(responseData.data.data);
      })
      .catch(error => {
        console.log(error);
      });
    }, [])

    return (
        <div className="graphiqueRadar">
            <ResponsiveContainer width="100%" height="100%" >
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="kind" />
                    <PolarRadiusAxis />
                    <Radar name="Mike" dataKey="value" fill="#E60000" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
      
    );
}

export default RadarGraph;

// export default class RadarGraph extends PureComponent {
//   static demoUrl = 'https://codesandbox.io/p/sandbox/simple-radar-chart-2p5sxm';

//   render() {
//     return (
//         <div className="graphiqueRadar">
//             <ResponsiveContainer width="100%" height="100%" >
//                 <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
//                     <PolarGrid />
//                     <PolarAngleAxis dataKey="subject" />
//                     <PolarRadiusAxis />
//                     <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
//                 </RadarChart>
//             </ResponsiveContainer>
//         </div>
      
//     );
//   }
// }
