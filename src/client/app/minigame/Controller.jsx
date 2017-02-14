import React from 'react';

var triangle = "4em solid transparent";
var hyp = "8em solid #082156";

var style = {
    width: "100%",
    marginTop: 10
};

var left = {
    width: 0,
    height: 0,
    borderTop: triangle,
    borderBottom: triangle,
    borderRight: hyp,
    display: "inline-block"
};

var right = {
    width: 0,
    height: 0,
    borderTop: triangle,
    borderBottom: triangle,
    borderLeft: hyp,
    display: "inline-block"
};

var jump = {
    width: "8em",
    height: "8em",
    backgroundColor: "#082156",
    display: "inline-block",
    margin: "0px 20% 0px 20%",
    borderRadius: "50%"
};

function Controller(props){

    return(
        <div style={style}>
            <div style={left} onClick={props.left}></div>
            <div style={jump} onClick={props.jump} ></div>
            <div style={right} onClick={props.right}></div>
        </div>
            
    );
}

module.exports = Controller;