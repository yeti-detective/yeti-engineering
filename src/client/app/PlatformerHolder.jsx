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
    svgWidth: 0,
    canJump: true,
    win: false
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
    if (!this.state.win) {
      if(wdth != this.state.svgWidth){this.setState({svgWidth: wdth})}
    }
  }

  gameStart(){
    // loop approx 30 fps
    window.gameLoop = setInterval(this.gameRun, 35);
  }

  gameRun(){
    // movement
    this.setState({x: this.state.x + this.state.vel});
    this.setState({y: this.state.y - this.state.velJ});

    // gravity
    // ground level
    if(this.state.x < this.state.svgWidth * 0.4 - 20){
      if(this.state.y > 363){
        this.setState({velJ: 0, canJump: true});
      }else{
        this.setState({velJ: this.state.velJ - 1, canJump: false});
      }
      if(this.state.y > 375){
        this.setState({y: this.state.y + 1});
      }
    }
    // first boundary
    if(this.state.y > 318 && this.state.x > this.state.svgWidth * 0.4 - 23 && this.state.x < this.state.svgWidth * 0.4 - 5){
      this.setState({vel: 0, x: this.state.x - 5});
    }
    // first level
    if(this.state.x > this.state.svgWidth * 0.4 - 20 && this.state.x < this.state.svgWidth * 0.55 - 20){
      if(this.state.y > 337){
        this.setState({velJ: 0, canJump: true});
      }else{
        this.setState({velJ: this.state.velJ - 1, canJump: false});
      }
      if(this.state.y > 345){
        this.setState({y: this.state.y - 1});
      }
    }
    // second boundary
    if(this.state.y > 288 && this.state.x > this.state.svgWidth * 0.55 - 23 && this.state.x < this.state.svgWidth * 0.55 - 5){
      this.setState({vel: 0, x: this.state.x - 5});
    }
    // second level
    if(this.state.x > this.state.svgWidth * 0.55 - 20 && this.state.x < this.state.svgWidth * 0.7 - 20){
      if(this.state.y > 307){
        this.setState({velJ: 0, canJump: true});
      }else{
        this.setState({velJ: this.state.velJ - 1, canJump: false});
      }
      if(this.state.y > 315){
        this.setState({y: this.state.y - 1});
      }
    }
    // third boundary
    if(this.state.y > 258 && this.state.x > this.state.svgWidth * 0.7 - 23 && this.state.x < this.state.svgWidth * 0.7 - 5){
      this.setState({vel: 0, x: this.state.x - 5});
    }
    // third level
    if(this.state.x > this.state.svgWidth * 0.7 - 20 && this.state.x < this.state.svgWidth * 0.85 - 20){
      if(this.state.y > 277){
        this.setState({velJ: 0, canJump: true});
      }else{
        this.setState({velJ: this.state.velJ - 1, canJump: false});
      }
      if(this.state.y > 285){
        this.setState({y: this.state.y - 1});
      }
    }
    // fourth boundary
    if(this.state.y > 228 && this.state.x > this.state.svgWidth * 0.85 - 23 && this.state.x < this.state.svgWidth * 0.85 - 5){
      this.setState({vel: 0, x: this.state.x - 5});
    }
    // fourth level
    if(this.state.x > this.state.svgWidth * 0.85 - 20){
      if(this.state.y > 247){
        this.setState({velJ: 0, canJump: true});
      }else{
        this.setState({velJ: this.state.velJ - 1, canJump: false});
      }
      if(this.state.y > 255){
        this.setState({y: this.state.y - 1});
      }
    }
    // fourth boundary
    if(this.state.x > this.state.svgWidth - 23){
      this.setState({vel: 0, x: this.state.x - 5});
    }
    // win state
    if(this.state.x > this.state.svgWidth * 0.9 - 20 && this.state.x < this.state.svgWidth * 0.9 + 30 && this.state.y > 242 - 25 && this.state.y < 242 + 15 + 25){
      this.setState({win: true});
      clearInterval(window.gameLoop)
    }

    // entropy & obstacles
    if(this.state.x < 0){ this.setState({x: this.state.x + 5, vel: 0 })}
    if(this.state.x > (this.state.svgWidth * 0.4) - 20 && this.state.y > 345){
      this.setState({vel: 0, x: this.state.x - 5});
    }


    if(this.state.vel > 0){ this.setState({vel: this.state.vel - 1})}
    else if(this.state.vel < 0){
      this.setState({vel: this.state.vel + 1});
    }

    this.gameStart;
  }

  motionLeft(){
    this.setState({vel: this.state.vel - 10});
  }

  motionRight(){
    this.setState({vel: this.state.vel + 10});
  }

  jump(){
    if(this.state.canJump){
      this.setState({velJ: this.state.velJ + 15});
    }
  }

  render(){
    return (
      <div className="holder">
        <Screen xpos={this.state.x} ypos={this.state.y} getWdth={this.getSvgWidth} win={this.state.win} />
        <Controller left={this.motionLeft} right={this.motionRight} jump={this.jump} />
        <section>
          <p>
            This platformer is a React component. The container holds the game logic & runs a loop with setInterval.
            The container passes methods to the controller component, allowing the user to affect the little
            jumping square buddy. The controls really just give bumps to the character's horizontal or vertical
            velocity values which are then decremented each loop by an entropy and gravity algorithm, respectively.
            The animation is accomplished by passing those physics values from the container to the screen component
            which then renders SVG elements in the positions given by the parent.
          </p>
          <p>
            Oh, and if you're viewing this on desktop, try resizing your window.
            MY SVG IS RESPONSIVE! HA HAHA HA HAHA HA!
          </p>
        </section>
      </div>
    );

  }
}

module.exports = PlatformerHolder;
