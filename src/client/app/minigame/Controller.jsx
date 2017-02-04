var React = require('react');

var triangle = "4em solid transparent";
var hyp = "8em solid #413075";

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
    backgroundColor: "#413075",
    display: "inline-block",
    margin: "0px 20% 0px 20%",
    borderRadius: "50%"
};

var Controller = React.createClass({
    render: function(){
        return(
            <div style={style}>
                <div style={left} className="leftBtn"></div>
                <div style={jump} classname="jump"></div>
                <div style={right} className="rightBtn"></div>
            </div>
                
        );
    }
});

module.exports = Controller;