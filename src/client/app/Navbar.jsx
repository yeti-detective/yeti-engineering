import React from 'react';

var style = {
    backgroundColor: "#070A16",
    width: "100%",
    margin: 0,
    padding: 0,
    overflow: "hidden",
    position: "fixed",
    top: 0,
    left: 0,
    textAlign: "left",
    display: "flex"
};

var headers = {
    display: "inline-block",
    margin: "auto"
};

var link = {
    color: "#3F5A95"
}

class Navbar extends React.Component {
    render(){
        return <div style={style}><h2 style={headers}>Christopher Brown</h2><h3 style={headers}>JavaScript developer</h3><h3 style={headers}><a href="tel:8166592363" style={link}>call me</a></h3></div>;
    }
}

module.exports = Navbar;