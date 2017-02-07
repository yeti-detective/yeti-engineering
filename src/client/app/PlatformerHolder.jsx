var React = require('react');
var Screen = require('./minigame/Screen.jsx');
var Controller = require('./minigame/Controller.jsx');

class PlatformerHolder extends React.Component {
    constructor(){
    super();
    this.state = {
      x: 100,
      y: 370,
      vel: 0,
      velJ: 0
    };
    this.motionLeft = this.motionLeft.bind(this);
    this.motionRight = this.motionRight.bind(this);
    this.jump = this.jump.bind(this);
    this.gameStart = this.gameStart.bind(this);
  }
    
    componentDidMount(){
        this.gameStart();
    }
    
    gameStart(){
        console.log("velocity = " + this.state.vel);
        console.log("jump = " + this.state.velJ);
        
        // movement
        this.setState({x: this.state.x + this.state.vel});
        this.setState({y: this.state.y + this.state.velJ});
        
        // gravity
        if(this.state.y < 371){
            this.setState({y: this.state.velJ + 3});
        }
        
        // entropy
        if(this.state.vel > 0){ this.setState({vel: this.state.vel - 1})} else
        if(this.state.vel < 0){ this.setState({vel: this.state.vel + 1})}
        
        if(this.state.velJ > 0){ this.setState({velJ: this.state.velJ - 1}) }
        
        // loop approx 60 fps
        setInterval(this.gameStart, 16);
    }
    
    motionLeft(){
        this.setState({vel: this.state.vel - 5});
    }
    
    motionRight(){
        this.setState({vel: this.state.vel + 5});
    }
    
    jump(){
        this.setState({velJ: this.state.velJ + 5});
    }
    
    render(){
        return (
            <div className="holder">
                <Screen xpos={this.state.x} ypos={this.state.y} />
                <Controller left={this.motionLeft} right={this.motionRight} jump={this.jump} />
            </div>
        );
        
    }
}

module.exports = PlatformerHolder;