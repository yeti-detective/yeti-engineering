var React = require('react');

var recFill = "#625292";

var style = {
    width: "95%",
    height: 400,
    backgroundColor: "#14073B",
    marginBottom: 10,
    display: "block",
    margin: "auto"
};

var Screen = React.createClass({
    render: function(){
        return (
            <svg style={style} className="screen">
                <rect x={this.props.xpos} y={this.props.ypos} height="25" width="20" />
            </svg>
        );
    }
    
});

module.exports = Screen;