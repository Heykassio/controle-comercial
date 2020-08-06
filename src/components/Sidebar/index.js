import React from 'react';

import Icon from '@mdi/react';
import { mdiHomeOutline, mdiBarcodeScan, mdiChartLine, mdiCardAccountDetailsOutline, mdiRotate3dVariant, mdiCurrencyUsdOff, mdiAccountArrowLeftOutline} from '@mdi/js';

import { Link } from 'react-router-dom';

import Logo from '../Logo';

import './styles.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <Logo/>
            <div className="bar-header">
                
            </div>
            <div className="sidebar-itens active">
                <Link to="/">
                    <div className="link-itens">
                        <Icon path={mdiHomeOutline}
                        />
                        <span>Home</span>
                    </div>
                </Link>
            </div>
            <div className="sidebar-itens">
                <Link to="/">
                    <div className="link-itens">
                        <Icon path={mdiBarcodeScan}
                        />
                        <span>Produtos</span>
                    </div>
                </Link>
            </div>
            <div className="sidebar-itens">
                <Link to="/">
                    <div className="link-itens">
                            <Icon path={mdiChartLine}


                            />
                            <span>Vendas</span>
                    </div>
                </Link>
            </div>
            <div className="sidebar-itens">
                <Link to="/">
                    <div className="link-itens">
                        <Icon path={mdiCardAccountDetailsOutline}
                        />
                        <span>Funcionários</span>
                    </div>
                </Link>
            </div>
            <div className="sidebar-itens">
                <Link to="/">
                    <div className="link-itens">
                        <Icon path={mdiCurrencyUsdOff}
                        />
                        <span>Despesas</span>
                    </div>
                </Link>
            </div>
            <div className="sidebar-itens">
                <Link to="/">
                    <div className="link-itens">
                        <Icon path={mdiRotate3dVariant}
                        />
                        <span>Historico</span>
                    </div>
                </Link>
            </div>
            <div className="sidebar-itens">
                <Link to="/">
                    <div className="link-itens">
                        <Icon path={mdiAccountArrowLeftOutline}
                        />
                        <span>Logout</span>
                    </div>
                </Link>
            </div>
            <div className="footer-sidebar">
                <div className="sidebar-itens">
                    <Link to="/">
                        <div className="link-itens">
                            <span>Sobre</span>
                        </div>
                    </Link>
                </div>
                <div className="sidebar-itens">
                    <Link to="/">
                        <div className="link-itens">
                            <span>Ajuda</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;