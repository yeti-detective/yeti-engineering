import React from 'react';

var recFill = "#625292";

var style = {
    width: "95%",
    height: 400,
    backgroundColor: "#14073B",
    marginBottom: 10,
    display: "block",
    margin: "auto"
};

class Screen extends React.Component {
    constructor(){
        super();
        this.state = {
            wdth: 0
        };
    }
    
    shouldComponentUpdate(){
        if(this.refs.node.width.baseVal.value > 0){
            this.setState({ wdth: this.refs.node.width.baseVal.value });
            return true;
        }
    }
    
    render(){
        return (
        <svg style={style} className="screen" ref="node">
            <rect x={this.props.xpos} y={this.props.ypos} fill={recFill} height="25" width="20" />
            <rect x="40%" y="370" fill="#625292" height="30" width="16%" />
            <rect x="55%" y="340" fill="#625292" height="60" width="16%" />
            <rect x="70%" y="310" fill="#625292" height="90" width="16%" />
            <rect x="85%" y="280" fill="#625292" height="120" width="16%" />
            <rect x="90%" y="240" fill="#625292" height="40" width="3" />
            <rect x="88%" y="242" fill="#FF0000" height="15" width="30" />
        </svg>
    )}
}

module.exports = Screen;