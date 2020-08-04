import React from 'react';

import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js'

import Sidebar from '../../components/Sidebar';

import './styles.css'

function Home () {
    return (
        <div className="container">
            <Sidebar/>
            <div className="content">
                <div className="search-bar">
                    <form action="">
                        <button type="submit"><Icon path={mdiMagnify}/></button>
                        <input type="search" name="" id=""/>
                    </form>
                </div>
                <div>
                    <img className="profile-pic" src="https://scontent-gig2-1.xx.fbcdn.net/v/t31.0-8/20819291_736969636486584_7238598600146543075_o.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=UTebtIEIMeoAX-bH78x&_nc_ht=scontent-gig2-1.xx&oh=1978136e42b9f4354839a88a5c5ea079&oe=5F4D1ED4" alt=""/>
                </div>
            </div>
        </div>   
    );
};

export default Home;