import React from 'react';
import {render} from 'react-dom';

import Navbar from './Navbar.jsx';
import MyFace from './PictureOfMe.jsx';
import LikeButton from './LikeButton.jsx';
import Explaining from './Explaining.jsx';
import Links from './Links.jsx';
import Bragging from './Bragging.jsx';
import PlatformerHolder from './PlatformerHolder.jsx';
import WhatNext from './WhatNext.jsx';

var style = {
    width: '100%',
    maxWidth: 1200,
    backgroundColor: '#153162',
    margin: 'auto',
    padding: 4
};

class App extends React.Component {
    render() {
        return (
            <div style={style}>
                <Navbar />
                <MyFace />
                <LikeButton />
                <Explaining />
                <Links />
                <Bragging />
                <PlatformerHolder />
                <WhatNext />
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));