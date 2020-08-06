import React from 'react';

import Icon from '@mdi/react';

import { mdiArrowTopRight, mdiArrowBottomRight } from '@mdi/js';

import './styles.css';

function CardCambio () {
    return (
        <div className="card-cambio">
            <h3>Guarani x Real</h3>
            <div className="cambio-itens">
                <div className="cambio-item">
                    <span>Compra</span><span></span><Icon path={mdiArrowTopRight}/><span>1500</span>
                </div>
                <div className="cambio-item">
                    <span>Venda</span><span></span><Icon path={mdiArrowBottomRight}/><span>1600</span>
                </div>
            </div>
        </div>
    );
};

export default CardCambio;