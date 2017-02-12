import React from 'react';

var recFill = "#161924";

var style = {
    width: "95%",
    height: 400,
    backgroundColor: "#082156",
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
            this.props.getWdth(this.state.wdth);
            return true;
        }
    }
    
    render(){
        if(this.props.win){
            return <div style={style}><h1>CONGRATULATIONS! YOU WON!</h1><p>You've won my respect</p></div>;
        }
        return (
        <svg style={style} className="screen" ref="node">
            <rect x={this.props.xpos} y={this.props.ypos} fill={recFill} height="25" width="20" />
            <rect x="40%" y="370" fill="#161924" height="30" width="16%" />
            <rect x="55%" y="340" fill="#161924" height="60" width="16%" />
            <rect x="70%" y="310" fill="#161924" height="90" width="16%" />
            <rect x="85%" y="280" fill="#161924" height="120" width="16%" />
            <rect x="90%" y="240" fill="#161924" height="40" width="3" />
            <rect fill="#FF0000" x="90%" y="242" height="15" width="30" />
        </svg>
    )}
}

module.exports = Screen;