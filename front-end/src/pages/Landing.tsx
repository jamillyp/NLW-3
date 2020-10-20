import React from 'react';

import {FiArrowRight} from 'react-icons/fi';
import logoHappy from '../images/logo.svg';
import { Link } from 'react-router-dom';

import '../styles/pages/landing.css';

function Landing() {
    return (
        <div id="page-landing">
            <div className="content-wrapper">
                <img src={logoHappy} alt="Happy" />
            
            <main>
                <h1>Leve felicidade para o mundo</h1>
                <p>Visite orfanatos e mude o dia de muitas crianças.</p>
            </main>

            <div className="location">
                <strong>Maranguape </strong>
                <span> Ceará</span>
            </div>

            <Link to="/mapa" className="enter-app" >
                <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)"></FiArrowRight>
            </Link>
            </div>
        </div>
    );
}

export default Landing;