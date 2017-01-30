import React from 'react';
import {render} from 'react-dom';

import AwesomeComponent from './AwesomeComponent.jsx';
import MyFace from './PictureOfMe.jsx';

class App extends React.Component {
    render() {
        return (
            <div>
                <p> Hello React!</p>
                <MyFace />
                <AwesomeComponent />
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));