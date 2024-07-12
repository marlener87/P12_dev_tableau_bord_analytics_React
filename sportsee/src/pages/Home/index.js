import React from 'react';
import NavbarHorizontale from '../../components/navbarHorizontale/NavbarHorizontale';
import NavbarVerticale from '../../components/navbarVerticale/NavbarVerticale';
import TitleMain from '../../components/titleMain/TitleMain';
import Apport from '../../components/Apport/Apport';

import './style.scss'
 
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
                    <Apport userId={userId} />
                </section>

            </div>
        </main>
    );
};

export default Home;