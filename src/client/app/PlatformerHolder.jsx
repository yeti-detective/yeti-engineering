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
      velJ: 0,
      svgWidth: 0
    };
    this.motionLeft = this.motionLeft.bind(this);
    this.motionRight = this.motionRight.bind(this);
    this.jump = this.jump.bind(this);
    this.gameStart = this.gameStart.bind(this);
    this.gameRun = this.gameRun.bind(this);
    this.getSvgWidth = this.getSvgWidth.bind(this);
  }
    
    componentDidMount(){
        this.gameStart();
    }
    
    getSvgWidth(wdth) {
        if(wdth != this.state.svgWidth){this.setState({svgWidth: wdth})}
        console.log(this.state.svgWidth);
    }
    
    gameStart(){
        // loop approx 30 fps
        setInterval(this.gameRun, 35);
    }
    
    gameRun(){
        // console.log("velocity = " + this.state.vel);
        // console.log("high = " + this.state.y);
        
        
        // movement
        this.setState({x: this.state.x + this.state.vel});
        this.setState({y: this.state.y - this.state.velJ});
        
        // gravity
        if(this.state.y < 371 && this.state.x < this.state.svgWidth * 0.4 - 20){
            this.setState({y: this.state.y - this.state.velJ});
        }
        
        // entropy & obstacles
        if(this.state.x < 0){ this.setState({x: this.state.x + 5, vel: 0 })}
        if(this.state.x > (this.state.svgWidth * 0.4) - 20 && this.state.y > 345){this.setState({vel: 0, x: this.state.x - 5})}
        
        
        if(this.state.vel > 0){ this.setState({vel: this.state.vel - 1})} else
        if(this.state.vel < 0){ this.setState({vel: this.state.vel + 1})}
        
        if(this.state.y < 371){ this.setState({velJ: this.state.velJ - 1}) } else
        {this.setState({velJ: 0})}
        
        // if(this.state.y > 344 && this.state.x > )
        
        this.gameStart;
    }
    
    motionLeft(){
        this.setState({vel: this.state.vel - 10});
    }
    
    motionRight(){
        this.setState({vel: this.state.vel + 10});
    }
    
    jump(){
        if(this.state.y > 370){
            this.setState({velJ: this.state.velJ + 15});
        }
    }
    
    render(){
        return (
            <div className="holder">
                <Screen xpos={this.state.x} ypos={this.state.y} getWdth={this.getSvgWidth} />
                <Controller left={this.motionLeft} right={this.motionRight} jump={this.jump} />
            </div>
        );
        
    }
}

module.exports = PlatformerHolder;