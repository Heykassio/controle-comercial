import React from 'react';

// import Icon from '@mdi/react';
// import { mdiMagnify } from '@mdi/js'

import Sidebar from '../../components/Sidebar';
import SearchBar from '../../components/SearchBar';
import CardCambio from '../../components/CardCambio';

import './styles.css'
import CardExpire from '../../components/CardExpire';

function Home () {
    return (
        <div className="container">
            <Sidebar/>
            <div className="content">
                <SearchBar/>
                <div className="cards-section">
                    <div className="cards-section-cambios">
                        <CardCambio/>
                        <CardCambio/>
                    </div>
                        <CardExpire/>
                        <CardExpire/>
                        <CardExpire/>
                </div>

                <div className="charts">
                    <div className="day-chart">

                    </div>
                    <div className="month-chart">

                    </div>
                </div>
                
                <div className="reunion">
                    <div className="today-reunion">
                        
                    </div>
                </div>
            </div>
        </div>   
    );
};

export default Home;