var React = require('react');

var left = {
    width: 25,
    height: 25,
    backgroundColor: "#413075"
};

var right = {
    width: 25,
    height: 25,
    backgroundColor: "#413075"
};

var jump = {
    width: 25,
    height: 25,
    backgroundColor: "#413075"
};

var Controller = React.createClass({
    render: function(){
        return(
            <div>
                <div style={left} className="leftBtn"></div>
                <div style={jump} classname="jump"></div>
                <div style={right} className="rightBtn"></div>
            </div>
                
        )
    }
})