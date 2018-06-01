import React from 'react';
import {render} from 'react-dom';
import Navbar from './Navbar.jsx';
import Intro from './Intro.jsx';
import Links from './Links.jsx';
import Bragging from './Bragging.jsx';
import PlatformerHolder from './PlatformerHolder.jsx';
import WhatNext from './WhatNext.jsx';
import Projects from './Projects.jsx';
import AdditionalFacts from './AdditionalFacts.jsx';
import Footer from './Footer.jsx';


var style = {
    width: '100%',
    maxWidth: 1200,
    background: 'linear-gradient(#153162, #071F49)',
    margin: 'auto',
};

class App extends React.Component {
    render() {
        return (
            <div style={style}>
                <Navbar />
                <Links />
                <Intro />
                <PlatformerHolder />
                <Projects />
                <AdditionalFacts />
                <Footer />
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));
