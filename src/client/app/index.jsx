import React from 'react';
import {render} from 'react-dom';
require("font-awesome-webpack");

import MyFace from './PictureOfMe.jsx';
import LikeButton from './LikeButton.jsx';
import Explaining from './Explaining.jsx';

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
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));