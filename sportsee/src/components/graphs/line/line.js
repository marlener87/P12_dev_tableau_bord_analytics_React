import React, { useEffect, useState } from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, Rectangle } from 'recharts';
import './line.scss';
import UserService from '../../../services/userService';

// La fenêtre blanche indiquant le temps
const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        // Assurez-vous que la valeur existe et qu'elle est la bonne
        return (
            <div className="customTooltip" style={{ backgroundColor: '#fff', padding: '5px', border: '1px solid #ccc' }}>
                <p className="label">{`${payload[0].value} min`}</p>
            </div>
        );
    }

    return null;
};

// La partie rouge sombre
const CustomCursor = (props) => {
    const { points, width, height } = props;
    const { x, y } = points[0];
    //const { x1, y1 } = points[1];
    
    return (
        <Rectangle className='customCursor'
            fill="transparent"
            x={x}
            y={y}
            width={width * 100}
            height={height * 200}
        />
    );
};

// Le point blanc
const CustomizedDot = (props) => {
    const { cx, cy } = props;

    return (
        <g>
            <circle cx={cx} cy={cy} r={5} stroke="#ffffff" strokeWidth={2} fill="#fff" />
            <circle cx={cx} cy={cy} r={8} fill="none" stroke="rgba(255, 255, 255, 0.3)" strokeWidth={10} />
        </g>
    );
};

const LineGraph = ({ userId }) => {
    const [userSessionFactory, setUserSessionFactory] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const dayNames = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

    const [perc, setPerc] = useState(0);
    
    const onMouseMove = hoveredData => {
        // console.log(hoveredData);
        if (hoveredData && hoveredData.activePayload) {
            const hoveredX = hoveredData.activePayload[0].payload.day;
            const index = userSessionFactory.sessions.findIndex(d => d.day === hoveredX);
            const percentage = ((userSessionFactory.sessions.length - index - 1) * 100) / (userSessionFactory.sessions.length - 1);
            //setPerc(100 - percentage);
        } 
    };
  
    const onMouseOut = () => {
        const div = document.querySelector('.graphiqueLigne .background')                    
        div.style.width = `0`;
        setPerc(0);
    };

    // const updateBackground = (event) => {
    //     console.log(event.offsetX)
    // }
    
    useEffect(() => {
        const fetchData = async () => {
            const objectFromFactory = await UserService.getSession(userId)
            console.log(objectFromFactory)
            
            setUserSessionFactory(objectFromFactory);
            setIsLoading(false)
        }
      
        fetchData()

    }, [userId])

    useEffect(() => {
        if(isLoading) return;

        // Note: Utilsier des reférences 
        const div = document.getElementById("graphiqueLigne")
        const background = document.querySelector('.graphiqueLigne .background') 
        div.addEventListener("mousemove", function(event) {
            const divWidth = this.offsetWidth;
            const mouseX = event.offsetX;
            const percentageX = (mouseX / divWidth) * 100;
            //console.log(100 - percentageX)

            background.style.width = `${100 - percentageX}%`;
        });

    }, [isLoading])

    if(isLoading) {
        return <p>Chargement en cours...</p>
    }

    if(isError){
        return <p>Une erreur est survenue...</p>
    }
  
    return (
        <div id="graphiqueLigne"  className="graphiqueLigne">
            <div className="background"></div>

            <div className="titleApp">
                <h2>Durée moyenne des sessions</h2>
            </div>

            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    data={userSessionFactory.sessions}
                    margin={{
                    top: 85,
                    right: 0,
                    left: -60,
                    bottom: 20,
                    }}
                    onMouseMove={onMouseMove}
                    onMouseOut={onMouseOut}
                >
                    <defs>
                        <linearGradient id="colorUv" x1="0%" y1="0" x2="100%" y2="0">
                            <stop offset="0%" stopColor="rgba(255,255,255,.3)" />
                            <stop offset={`${perc}%`} stopColor="rgba(255,255,255,.3)" />
                            <stop offset={`${perc}%`} stopColor="white" />
                            <stop offset={`${100}%`} stopColor="white" />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                        dataKey="day" 
                        interval="preserveStartEnd"
                        tick={{ fill: '#fff' }} 
                        axisLine={false}  // Hide the X-axis line
                        tickLine={false}  // Hide the tick lines 
                        tickFormatter={(day) => dayNames[day - 1]} // Map the numbers to day names
                    />
                    <YAxis hide />
                    <Tooltip 
                        content={<CustomTooltip />} 
                        cursor={<CustomCursor />} />
                    <Area 
                        type="natural" 
                        dataKey="sessionLength" 
                        stroke="url(#colorUv)"
                        fill="#FF0000" 
                        strokeWidth={2} 
                        activeDot={<CustomizedDot />} />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};



  
export default LineGraph;


/*
<ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    data={userSessionFactory.sessions}
                    margin={{
                        top: 0,
                        right: 0,
                        left: -60,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                        dataKey="day" 
                        tickFormatter={(day) => dayNames[day - 1]} 
                        tick={{ fill: '#fff' }} 
                    />
                    <YAxis />
                    <Tooltip 
                        content={<CustomTooltip />} 
                        cursor={<CustomCursor />} 
                    />
                    <Area 
                        type="natural" 
                        dataKey="sessionLength" 
                        stroke="#ffffff" 
                        fill="#FF0000" 
                        strokeWidth={2} 
                        activeDot={<CustomizedDot />} 
                    />
                </AreaChart>
            </ResponsiveContainer>
*/


//<AreaChart
// data={userSessionFactory.sessions}
// margin={{
// top: 0,
// right: 0,
// left: -60,
// bottom: 0,
// }}
// >
// <CartesianGrid strokeDasharray="3 3" />
// <XAxis dataKey="day"/>
// <YAxis />
// <Tooltip 
//     content={<CustomTooltip />} 
//     cursor={<CustomCursor />} />

// <Area 
//     type="natural" 
//     dataKey="sessionLength" 
//     stroke="#ffffff" 
//     fill="#FF0000" 
//     strokeWidth={2} 
//     activeDot={<CustomizedDot />} />
// </AreaChart>