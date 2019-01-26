import React from "react";
import ReactDOM from "react-dom";

class Game extends React.Component {
  // base class, contains functionality of app
  constructor() {
    super();
    this.state = {
      pause: false,
      bossDead: false,
      charDead: false,
      shadow: true,
      stats: {
        health: 100,
        level: 1,
        exp: 0,
        weapon: {
          equipped: {
            name: "baby fists",
            pow: 1,
            pickedUp: false
          },
          unequipped: {
            name: "ball bat",
            pow: 5,
            x: [15, 175, 265, 425, 515, 675][Math.round(Math.random() * 5)],
            y: [15, 175, 265, 425, 515, 675][Math.round(Math.random() * 5)],
            pickedUp: true
          }
        },
        charName: "click to change name"
      },
      bump: {
        left: "arrowright",
        right: "arrowleft",
        up: "arrowdown",
        down: "arrowup"
      },
      leftEye: 6,
      rightEye: 0,
      googly: true,
      charPos: {
        x: 15,
        y: 15
      },
      baddiePos: {
        0: {
          x: 95,
          y: 95,
          alive: true,
          hp: 100,
          womped: false,
          boss: false
        },
        1: {
          x: 95,
          y: 345,
          alive: true,
          hp: 100,
          womped: false,
          boss: false
        },
        2: {
          x: 95,
          y: 595,
          alive: true,
          hp: 100,
          womped: false,
          boss: false
        },
        3: {
          x: 345,
          y: 95,
          alive: true,
          hp: 100,
          womped: false,
          boss: false
        },
        4: {
          x: 345,
          y: 345,
          alive: true,
          hp: 100,
          womped: false,
          boss: false
        },
        5: {
          x: 345,
          y: 595,
          alive: true,
          hp: 100,
          womped: false,
          boss: false
        },
        6: {
          x: 595,
          y: 95,
          alive: true,
          hp: 100,
          womped: false,
          boss: false
        },
        7: {
          x: 595,
          y: 345,
          alive: true,
          hp: 100,
          womped: false,
          boss: false
        },
        8: {
          x: 595,
          y: 595,
          alive: true,
          hp: 100,
          womped: false,
          boss: false
        }
      },
      heartPos: {
        0: {
          x: 95,
          y: 95,
          show: true
        },
        1: {
          x: 95,
          y: 345,
          show: true
        },
        2: {
          x: 95,
          y: 595,
          show: true
        },
        3: {
          x: 345,
          y: 95,
          show: true
        },
        4: {
          x: 345,
          y: 345,
          show: true
        },
        5: {
          x: 345,
          y: 595,
          show: true
        },
        6: {
          x: 595,
          y: 95,
          show: true
        },
        7: {
          x: 595,
          y: 345,
          show: true
        },
        8: {
          x: 595,
          y: 595,
          show: true
        }
      },
      tick: 0
    };
    this.nameChanger = this.nameChanger.bind(this);
    this.newGame = this.newGame.bind(this);
    this.newGameSameStats = this.newGameSameStats.bind(this);
    this.toggleShadow = this.toggleShadow.bind(this);
  }

  componentWillMount() {
    if (JSON.parse(localStorage.getItem("stats")) !== null) {
      this.setState({
        stats: JSON.parse(localStorage.getItem("stats"))
      });
    }
    // set level
    let stats = this.state.stats;
    stats.level = Math.round(stats.exp / 100) + 1;

    // randomly generate baddies from my list of 9 & select one to be the boss
    this.randomPlacement();

    // the animation loop
    setInterval(() => {
      if (this.state.googly) {
        if (this.state.rightEye < 6) {
          this.setState({
            rightEye: ++this.state.rightEye,
            leftEye: --this.state.leftEye
          });
        } else {
          this.setState({
            googly: false
          });
        }
      } else {
        if (this.state.leftEye < 6) {
          this.setState({
            rightEye: --this.state.rightEye,
            leftEye: ++this.state.leftEye
          });
        } else {
          this.setState({
            googly: true
          });
        }
      }
      if (this.state.tick < 400) {
        this.setState({
          tick: ++this.state.tick
        });
      } else {
        localStorage.setItem("stats", JSON.stringify(this.state.stats));
        this.setState({
          tick: 0
        });
      }
      if (!this.state.pause) {
        this.charDead();
        this.baddieLoop();
        this.heartLoop();
      }
    }, 75);
  }

  randomPlacement() {
    let baddies = this.state.baddiePos;
    let livingBaddies = [];
    Object.keys(baddies).map(rand => {
      if (Math.random() < 0.24) {
        baddies[rand]["hp"] = 0;
      } else {
        livingBaddies.push(rand);
      }
    });
    let boss =
      livingBaddies[Math.round(Math.random() * (livingBaddies.length - 1))];
    baddies[boss]["boss"] = true;
    baddies[boss]["hp"] = 1000;

    // randomly generate health pickups
    let hearts = this.state.heartPos;
    Object.keys(hearts).map(hart => {
      if (Math.random() > 0.35) {
        hearts[hart]["show"] = false;
      }
    });

    this.setState({
      baddiePos: baddies,
      heartPos: hearts
    });
  }

  charDead() {
    if (this.state.stats.health < 0) {
      localStorage.setItem("stats", this.state.stats);
      this.setState({
        pause: true,
        charDead: true
      });
    }
  }

  getTheBat() {
    let newStats = this.state.stats;
    let bbyFis = newStats.weapon.equipped;
    let bat = newStats.weapon.unequipped;
    newStats.weapon.equipped = bat;
    newStats.weapon.unequipped = bbyFis;
    this.setState({
      stats: newStats
    });
    localStorage.setItem("stats", JSON.stringify(newStats));
  }

  killBoss() {
    localStorage.setItem("stats", this.state.stats);
    this.setState({
      pause: true,
      bossAlive: true
    });
  }

  componentDidMount() {
    document.addEventListener("keydown", e => {
      this.movement(e.key.toLowerCase(), "char");
    });
  }

  randMove() {
    let rndMove = {
      0: "arrowleft",
      1: "arrowright",
      2: "arrowup",
      3: "arrowdown"
    };
    return rndMove[Math.round(Math.random() * 4)];
  }

  baddieLoop() {
    Array.from(Array(9).keys()).map(bd => {
      this.movement(this.randMove(), bd);
    });
  }

  heartLoop() {
    Array.from(Array(9).keys()).map(hart => {
      this.movement(this.randMove(), "heart" + hart);
    });
  }

  toggleShadow() {
    if (this.state.shadow) {
      this.setState({
        shadow: false
      });
    } else {
      this.setState({
        shadow: true
      });
    }
  }

  movement(dir, dude) {
    let newPos = {};
    dude === "char"
      ? (newPos = this.state.charPos)
      : typeof dude === "number"
        ? (newPos = this.state.baddiePos[dude])
        : (newPos = this.state.heartPos[parseInt(dude[dude.length - 1])]);
    switch (true) {
      case dir === "a" || dir === "arrowleft":
        newPos.x = newPos.x - 10;
        this.collisionDetection(newPos, "left", dude);
        break;
      case dir === "d" || dir === "arrowright":
        newPos.x = newPos.x + 10;
        this.collisionDetection(newPos, "right", dude);
        break;
      case dir === "w" || dir === "arrowup":
        newPos.y = newPos.y - 10;
        this.collisionDetection(newPos, "up", dude);
        break;
      case dir === "s" || dir === "arrowdown":
        newPos.y = newPos.y + 10;
        this.collisionDetection(newPos, "down", dude);
        break;
    }
    if (dude == "char") {
      this.setState({
        charPos: newPos
      });
    } else if (typeof dude === "number") {
      let mvBaddies = this.state.baddiePos;
      mvBaddies[dude] = newPos;
      this.womp(dude, dir);
      this.setState({
        baddiePos: mvBaddies
      });
    } else {
      let hearts = this.state.heartPos;
      hearts[dude[dude.length - 1]] = newPos;
      this.setState({
        heartPos: hearts
      });
    }
  }

  nameChanger() {
    let newName = prompt("Rename character:") || this.state.stats.charName;
    let newStats = this.state.stats;
    newStats.charName = newName;
    this.setState({
      stats: newStats
    });
    localStorage.setItem("stats", JSON.stringify(newStats));
  }

  newGame() {
    this.randomPlacement();
    this.setState({
      pause: false,
      bossDead: false,
      charDead: false,
      stats: {
        health: 100,
        level: 1,
        exp: 0,
        weapon: {
          equipped: {
            name: "baby fists",
            pow: 1,
            pickedUp: false
          },
          unequipped: {
            name: "ball bat",
            pow: 5,
            x: [15, 175, 265, 425, 515, 675][Math.round(Math.random() * 5)],
            y: [15, 175, 265, 425, 515, 675][Math.round(Math.random() * 5)],
            pickedUp: true
          }
        },
        charName: "click to change name"
      },
      charPos: {
        x: 15,
        y: 15
      }
    });
  }

  newGameSameStats() {
    this.randomPlacement();
    console.log("new game same stats");
    let stats = this.state.stats;
    stats.health = 100;
    this.setState({
      pause: false,
      bossDead: false,
      charDead: false,
      stats: stats,
      charPos: { x: 15, y: 15 }
    });
  }

  inRoom(bud) {
    if (
      (bud > 14 && bud < 176) ||
      (bud > 264 && bud < 426) ||
      (bud > 514 && bud < 676)
    ) {
      return true;
    } else {
      return false;
    }
  }

  inHall(bud) {
    if ([95, 345, 595].indexOf(bud) !== -1) {
      return true;
    } else {
      return false;
    }
  }

  outOfBounds(bud) {
    if (bud < 15 || bud > 675) {
      return true;
    } else {
      return false;
    }
  }

  getHeart(hart) {
    let hearts = this.state.heartPos;
    let newStats = this.state.stats;
    newStats.health = newStats.health + 50;
    hearts[hart]["show"] = false;
    this.setState({
      stats: newStats,
      heartPos: hearts
    });
    localStorage.setItem("stats", JSON.stringify(newStats));
  }

  collisionDetection(pos, dr, dude) {
    if (typeof dude === "string" && dude !== "char") {
      let char = this.state.charPos;
      if (
        char.y - pos.y > -40 &&
        char.y - pos.y < 40 &&
        char.x - pos.x > -40 &&
        char.x - pos.x < 40 &&
        this.state.heartPos[dude[dude.length - 1]]["show"]
      ) {
        this.getHeart(dude[dude.length - 1]);
      }
    }
    if (
      (!(this.inRoom(pos.x) && this.inRoom(pos.y)) &&
        !(this.inHall(pos.x) || this.inHall(pos.y))) ||
      (this.outOfBounds(pos.x) || this.outOfBounds(pos.y))
    ) {
      this.movement(this.state.bump[dr], dude);
    }
    if (
      this.state.stats.weapon.equipped.name === "baby fists" &&
      this.state.charPos.x - this.state.stats.weapon.unequipped.x > -40 &&
      this.state.charPos.x - this.state.stats.weapon.unequipped.x < 40 &&
      this.state.charPos.y - this.state.stats.weapon.unequipped.y > -40 &&
      this.state.charPos.y - this.state.stats.weapon.unequipped.y < 40
    ) {
      this.getTheBat();
    }
  }

  womp(baddie, dir) {
    let char = this.state.charPos;
    let bad = this.state.baddiePos[baddie];
    let stats = this.state.stats;
    if (
      char.x - bad.x > -40 &&
      char.x - bad.x < 40 &&
      char.y - bad.y > -40 &&
      char.y - bad.y < 40
    ) {
      bad.womped = true;
      bad.hp =
        bad.hp -
        (this.state.stats.weapon.equipped.pow + this.state.stats.level) *
          Math.round(Math.random() * 5);
      if (bad.hp > 0) {
        this.movement(
          this.state.bump[dir.substring(dir.indexOf("w") + 1)],
          "char"
        );
        stats.health = stats.health - Math.round(Math.random() * 5);
        let exp = this.state.stats;
        exp.exp++;
        exp.level = Math.round(exp.exp / 100) + 1;
        this.setState({
          stats: exp
        });
      }
      if (bad.hp <= 0 && bad.boss) {
        this.setState({
          bossDead: true
        });
      }

      let baddies = this.state.baddiePos;
      baddies[baddie] = bad;
      this.setState({
        stats: stats,
        baddiePos: baddies
      });
    } else if (this.state.baddiePos[baddie]["womped"]) {
      let baddies = this.state.baddiePos;
      baddies[baddie]["womped"] = false;
      this.setState({
        baddiePos: baddies
      });
    }
  }

  render() {
    return (
      <div id="game">
        <HUD
          newGame={this.newGame}
          stats={this.state.stats}
          rename={this.nameChanger}
          toggleShadow={this.toggleShadow}
        />
        {this.state.bossDead ? (
          <YouWon restart={this.newGame} restartStats={this.newGameSameStats} />
        ) : this.state.charDead ? (
          <YouLose
            restart={this.newGame}
            restartStats={this.newGameSameStats}
          />
        ) : (
          <Dungeon
            pos={this.state.charPos}
            mouf={this.state.googly}
            re={this.state.rightEye}
            le={this.state.leftEye}
            badPos={this.state.baddiePos}
            bat={this.state.stats.weapon}
            heartPos={this.state.heartPos}
            shadow={this.state.shadow}
          />
        )}
      </div>
    );
  }
}

function HUD(props) {
  return (
    <div id="hud">
      <h3>Fungeon Dungeon!</h3>
      <div id="stats">
        <p onClick={props.rename}>{"GO! " + props.stats.charName}</p>
        <p>{"health: " + (props.stats.health > 0 ? props.stats.health : 0)}</p>
        <p>{"level: " + props.stats.level}</p>
        <p>{"weapon: " + props.stats.weapon.equipped.name}</p>
      </div>
      <button
        title="Clear saved game data"
        id="newGame"
        className="gameButtons"
        onClick={props.newGame}
      >
        New Game
      </button>
      <button
        title="Toggle Darkness"
        id="toggleDarkness"
        className="gameButtons"
        onClick={props.toggleShadow}
      >
        Toggle Darkness
      </button>
    </div>
  );
}

function Dungeon(props) {
  return (
    <svg id="dungeon">
      <defs>
        <linearGradient y1="100%" y2="0%" x1="0%" x2="0%" id="heart">
          <stop offset="10%" stopColor="#761429" />
          <stop offset="90%" stopColor="#C46277" />
        </linearGradient>
      </defs>
      <Chamber x={15} y={15} />
      <Hallway x={215} y={90} />
      <Hallway x={90} y={215} />
      <Chamber x={15 + 200 + 50} y={15} />
      <Hallway x={215 + 200 + 50} y={90} />
      <Hallway x={90 + 250} y={215} />
      <Chamber x={15 + 400 + 100} y={15} />
      <Hallway x={90 + 500} y={215} />
      <Chamber x={15} y={15 + 250} />
      <Hallway x={215} y={90 + 250} />
      <Hallway x={90} y={215 + 250} />
      <Chamber x={15 + 200 + 50} y={15 + 250} />
      <Hallway x={215 + 200 + 50} y={90 + 250} />
      <Hallway x={90 + 250} y={215 + 250} />
      <Chamber x={15 + 400 + 100} y={15 + 250} />
      <Hallway x={90 + 500} y={215 + 250} />
      <Chamber x={15} y={15 + 500} />
      <Hallway x={215} y={90 + 500} />
      <Chamber x={15 + 200 + 50} y={15 + 500} />
      <Hallway x={215 + 200 + 50} y={90 + 500} />
      <Chamber x={15 + 400 + 100} y={15 + 500} />
      {Array.from(Array(9).keys()).map(bad => {
        return (
          <Baddie
            mouf={props.le}
            name={"baddie" + bad}
            pos={props.badPos[bad]}
          />
        );
      })}
      {Array.from(Array(9).keys()).map(heart => {
        return <Heart pos={props.heartPos[heart]} />;
      })}
      {props.bat.equipped.pickedUp ? null : <BaseballBat batPos={props.bat} />}
      {props.shadow ? (
        <Shadow x={props.pos.x + 20} y={props.pos.y - 45} />
      ) : null}
      <Character
        pos={props.pos}
        oooh={props.mouf}
        rightEye={props.re}
        leftEye={props.le}
      />
    </svg>
  );
}

function Chamber(props) {
  return (
    <g id={props.nameIt} className="chamber">
      <rect
        x={props.x}
        y={props.y}
        height="200"
        width="200"
        fill="rgba(50, 50, 50, 0.93)"
        rx="5"
        ry="5"
      />
    </g>
  );
}

function YouWon(props) {
  return (
    <div className="gameOver">
      <h1 id="youWon">You Won!</h1>
      <h3>The only good hitler is a dead hitler.</h3>
      <button onClick={props.restartStats} className="gameButtons">
        start over (carryover stats)
      </button>
      <button onClick={props.restart} className="gameButtons">
        start over (new game)
      </button>
    </div>
  );
}

function YouLose(props) {
  return (
    <div className="gameOver">
      <h1 id="youLose">Oh no! You dies!</h1>
      <h4>It's ok. You only really lose if you give up</h4>
      <button onClick={props.restartStats} className="gameButtons">
        start over (carryover stats)
      </button>
      <button onClick={props.restart} className="gameButtons">
        start over (new game)
      </button>
    </div>
  );
}

function Character(props) {
  return (
    <g
      id="moveit"
      transform={"translate(" + props.pos.x + ", " + props.pos.y + ")"}
    >
      <circle cx="20" cy="20" r="20" fill="#5E7610" />
      <circle id="leftEye" cx="12" cy="15" r={props.leftEye} />
      <circle id="rightEye" cx="27" cy="15" r={props.rightEye} />
      {props.oooh ? (
        <path
          stroke="black"
          stroke-weight="3"
          fill="transparent"
          d="M 10 25
             C 15 30, 20 30, 30 25"
        />
      ) : (
        <ellipse
          cx="20"
          cy="25"
          rx="15"
          ry="7"
          fill="transparent"
          stroke="black"
        />
      )}
    </g>
  );
}

function Baddie(props) {
  return (
    <g
      id={props.name}
      transform={"translate(" + props.pos.x + ", " + props.pos.y + ")"}
      style={props.pos.hp > 0 ? null : { display: "none" }}
    >
      <circle
        cx="20"
        cy="20"
        r={props.pos.boss ? "30" : "20"}
        fill={
          props.pos.womped ? "#751328" : props.pos.boss ? "#79286A" : "#5B0F4D"
        }
      />
      <rect x="14" y="26" width="12" height="3" fill="#24001D" />
      <rect x="8" y="10" height="3" width="10" fill="#24001D" />
      <rect x="23" y="10" height="3" width="10" fill="#24001D" />
      <path stroke="#24001D" d="M 20 16 L 17 23 L 20 25" fill="transparent" />
      <circle
        cx="13"
        cy="15"
        r={props.pos.boss ? "5" : "2"}
        fill={props.pos.boss ? "#510112" : "#24001D"}
      />
      <circle
        cx="27"
        cy="15"
        r={props.pos.boss ? "5" : "2"}
        fill={props.pos.boss ? "#510112" : "#24001D"}
      />
      <path stroke="transparent" fill="#24001D" d="M 5 5 C 10 -3 25 -3 35 5" />
      <path stroke="transparent" fill="#24001D" d="M 5 5 C 10 13 25 6 35 5" />
      {props.pos.boss ? (
        <rect
          transform="translate(8, 35)"
          width="25"
          height={props.mouf * 1.25}
          fill="#510112"
        />
      ) : (
        <path
          d="M 10 32 C 15 30, 25 30, 30 32"
          stroke="#24001D"
          strokeWidth="2"
          fill="transparent"
        />
      )}
      <text>{props.pos.hp}</text>
    </g>
  );
}

function Hallway(props) {
  return (
    <rect
      width="50"
      height="50"
      transform={"translate(" + props.x + ", " + props.y + ")"}
      fill="rgba(50, 50, 50, 0.93)"
    />
  );
}

function BaseballBat(props) {
  return (
    <g
      transform={
        "translate(" +
        props.batPos.unequipped.x +
        ", " +
        props.batPos.unequipped.y +
        ")"
      }
    >
      <defs>
        <linearGradient id="bat">
          <stop offset="10%" stopColor="#B7CD69" />
          <stop offset="90%" stopColor="#8AA236" />
        </linearGradient>
      </defs>
      <path
        transform="translate(0, 5)"
        d="M 10 0 C 5 5 5 10 10 15 L 40 12 C 43 15 45 17 48 15 L 48 5 C 46 2 44 0 40 5 z"
        fill="url(#bat)"
      />
    </g>
  );
}

function Heart(props) {
  return (
    <g
      style={props.pos.show ? null : { display: "none" }}
      transform={"translate(" + props.pos.x + ", " + props.pos.y + ")"}
    >
      <path
        fill="url(#heart)"
        d="M 10 20
               L 0 8
               C 2 2.5 2.5 2 10 6
               C 17.5 2 18 2.5 20 8
               z"
      />
    </g>
  );
}

function Shadow(props) {
  return (
    <g fillRule="evenodd">
      <path
        d={
          "M 0 0 L 3000 0 L 3000 3000 L 0 3000 L 0 0 M " +
          props.x +
          " " +
          props.y +
          " A 25 25 0 0 0 " +
          props.x +
          " " +
          (props.y + 150) +
          " A 25 25 0 0 0 " +
          props.x +
          " " +
          props.y +
          " z"
        }
        fill="#25001D"
      />
    </g>
  );
}

ReactDOM.render(<Game />, document.getElementById("application"));
