import React from 'react';

var style = {
    backgroundColor: "#271758",
    width: "100%",
    margin: 0,
    padding: 0,
    overflow: "hidden",
    position: "fixed",
    top: 0,
    left: 0,
    textAlign: "left"
};

var headers = {
    display: "inline-block",
    marginRight: "15%"
};

class Navbar extends React.Component {
    render(){
        return <div style={style}><h2 style={headers}>Christopher Brown</h2><h3 style={headers}>web developer</h3></div>;
    }
}

module.exports = Navbar;