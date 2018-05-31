import React from 'react';
import {render} from 'react-dom';

import Navbar from './Navbar.jsx';
import Intro from './Intro.jsx';
// import MyFace from './PictureOfMe.jsx';
// import LikeButton from './LikeButton.jsx';
// import Explaining from './Explaining.jsx';
import Links from './Links.jsx';
import JustFollowingUp from './JustFollowingUp.jsx';
import Bragging from './Bragging.jsx';
import PlatformerHolder from './PlatformerHolder.jsx';
import WhatNext from './WhatNext.jsx';
import YetiFlashlight from './YetiFlashlight.jsx';
import SoundClone from './SoundClone.jsx';

var style = {
    width: '100%',
    maxWidth: 1200,
    background: 'linear-gradient(#153162, #071F49)',
    margin: 'auto',
    padding: 4
};

class App extends React.Component {
    render() {
        return (
            <div style={style}>
                <Navbar />
                <Intro />
                <Links />
                <JustFollowingUp />
                <YetiFlashlight />
                <SoundClone />
                <Bragging />
                <PlatformerHolder />
                <WhatNext />
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));
