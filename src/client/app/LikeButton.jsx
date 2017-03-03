import React from 'react';
import axios from 'axios';

var style = {
                border: 'solid #082156',
                backgroundColor: '#070A16',
                borderRadius: 10,
                color: '#318784'
            };

class LikeButton extends React.Component{
    constructor(){
        super();
        this.state = {
            likesCount: 0
        };
        axios
            .get('/likes')
            .then((l)=>{
                this.setState({likesCount: l.data.howMany});
            });
        this.setLikes = this.setLikes.bind(this);
        this.onLike = this.onLike.bind(this);
    }
    
    componentDidMount(){
        this.setState({likesCount: this.state.preLikes});
    }
    
    setLikes(l){
        this.setState({likesCount: l});
    }
    
    onLike(){
        axios.post("/click");
        axios
            .get("/likes")
            .then((l)=>{
                this.setState({likesCount: l.data.howMany});
            });
        this.setLikes(this.state.likesCount + 1);
    }
    
    render(){
        return(
        <div>
            Likes : <span id="likes">{this.state.likesCount}</span>
            <div><button style={style} onClick={this.onLike}>Like Me</button></div>
        </div>
        );
    }
};

export default LikeButton;