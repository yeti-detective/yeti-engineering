var React = require('react');
var Screen = require('./minigame/Screen.jsx');
var Controller = require('./minigame/Controller.jsx');

var PlatformerHolder = React.createClass({
    getInitialState: function(){
        return({
            xPos: "45%",
            yPos: "400px"
        });
    },
    render: function(){
        console.log(this.state.xPos);
        console.log(this.state.yPos);
        return (
            <div className="holder">
                <Screen />
                <Controller />
            </div>
        );
        
    }
});

module.exports = PlatformerHolder;