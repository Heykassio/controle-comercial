import React from 'react';

import Icon from '@mdi/react';

import { mdiCalendarMonth } from '@mdi/js';

import './styles.css';

function CardExpire () {
    return (
        <div className="expire">
            <h3>Vencimentos</h3>
            <div className="expire-content">
                <div className="expire-item">
                    <span>Produto 1</span><Icon path={mdiCalendarMonth}/><span>02/03/2021</span>
                </div>
                <div className="expire-item">
                    <span>Produto 2</span><Icon path={mdiCalendarMonth}/><span>02/03/2021</span>
                </div>
                <div className="expire-item">
                    <span>Produto 3</span><Icon path={mdiCalendarMonth}/><span>02/03/2021</span>
                </div>
                <div className="expire-item">
                    <span>Produto 4</span><Icon path={mdiCalendarMonth}/><span>02/03/2021</span>
                </div>
                <div className="expire-item">
                    <span>Produto 5</span><Icon path={mdiCalendarMonth}/><span>02/03/2021</span>
                </div>
                <div className="expire-item">
                    <span>Produto 6</span><Icon path={mdiCalendarMonth}/><span>02/03/2021</span>
                </div>
            </div>
        </div>
    );
};

export default CardExpire;