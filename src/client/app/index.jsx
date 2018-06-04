import React from 'react';
import {render} from 'react-dom';
import Navbar from './Navbar';
import Intro from './Intro';
import Links from './Links';
import Bragging from './Bragging';
import PlatformerHolder from './PlatformerHolder';
import WhatNext from './WhatNext';
import Projects from './Projects';
import AdditionalFacts from './AdditionalFacts';
import Footer from './Footer';


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
