import React from 'react';
import assis from "../../assets/img/assis.png"
import nage from "../../assets/img/nage.png"
import velo from "../../assets/img/velo.png"
import haltere from "../../assets/img/haltere.png"

const NavbarVerticale = () => {
    return (
        <nav className='navVerticale'>
            <img src={assis} alt="assis" className='iconNavbar' />
            <img src={nage} alt="nage" className='iconNavbar' />
            <img src={velo} alt="velo" className='iconNavbar' />
            <img src={haltere} alt="haltere" className='iconNavbar' />
        </nav>
    );
};

export default NavbarVerticale;