import React from 'react';
import NavbarHorizontale from '../../components/navbarHorizontale/NavbarHorizontale';
import NavbarVerticale from '../../components/navbarVerticale/NavbarVerticale';
import TitleMain from '../../components/titleMain/TitleMain';
import Apport from '../../components/Apport/Apport';

import App from '../../components/graphs/bar/bar'
import './style.scss';
//import GraphicLine from '../../components/graphs/line/line';
import LineGraph from '../../components/graphs/line/line';
import RadarGraph from '../../components/graphs/radar/radar'

const Home = () => { 

    const userId = 12; 

    return (
        <main>
            <div>
                <NavbarHorizontale />
            </div>
            <div className='mainBody'>
                <NavbarVerticale />
                <section className='sectionRight'>
                    <TitleMain userId={userId}/>
                    <div className="statsBlock">
                        <div className="stats">
                            <App />

                            <div className='blockGraphs'>
                                <LineGraph />
                                <RadarGraph />
                            </div>
                        </div>
                        
                        <Apport userId={userId} />
                    </div>
                    
                    
                </section>

            </div>
        </main>
    );
};

export default Home;

//<GraphicLine />