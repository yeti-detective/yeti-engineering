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

function Screen(props){
    return (
        <svg style={style} className="screen">
            <rect x={props.xpos} y={props.ypos} fill={recFill} height="25" width="20" />
            <rect x="40%" y="370" fill="#625292" height="30" width="50" />
        </svg>
    );
}

module.exports = Screen;