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

class App extends React.Component {
    render() {
        return (
            <div className="app">
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
