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
import Radial from '../../components/graphs/radial/radial';

const Home = () => { 

    const userId = 18; 

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
                            <App userId={userId} />

                            <div className='blockGraphs'>
                                <LineGraph userId={userId} />
                                <RadarGraph userId={userId} />
                                <Radial userId={userId} />
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