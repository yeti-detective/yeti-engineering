import React from 'react';
import {render} from 'react-dom';

import MyFace from './PictureOfMe.jsx';
import LikeButton from './LikeButton.jsx';
import Explaining from './Explaining.jsx';
import Links from './Links.jsx';
import Bragging from './Bragging.jsx';
import PlatformerHolder from './PlatformerHolder.jsx'

var style = {
    width: '80%',
    backgroundColor: '#625292',
    margin: 'auto',
    padding: 4
};

class App extends React.Component {
    render() {
        return (
            <div style={style}>
                <h1>Christopher Brown</h1>
                <MyFace />
                <LikeButton />
                <Explaining />
                <Links />
                <Bragging />
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));