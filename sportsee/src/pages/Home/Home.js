import React from 'react';
import NavbarHorizontale from '../../components/NavbarHorizontale/NavbarHorizontale';
import NavbarVerticale from '../../components/NavbarVerticale/NavbarVerticale';
import TitleMain from '../../components/TitleMain/TitleMain';

const Home = () => {
    return (
        <main>
            <div>
                <NavbarHorizontale />
            </div>
            <div className='mainBody'>
                <NavbarVerticale />
                <section className='sectionRight'>
                    <TitleMain />
                </section>
            </div>
        </main>
    );
};

export default Home;