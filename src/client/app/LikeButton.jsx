import React from 'react';
// import axios from 'axios';


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
        this.upLike = this.upLike.bind(this)
    }
    
    componentWillMount () {
        let xhr = new XMLHttpRequest()
        xhr.open('GET', './click')
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                this.setState({
                    likesCount: xhr.responseText
                })
            }
        }
        xhr.send()
    }
    
    upLike (like) {
        this.setState({
            likeCount: like
        })
    }
    
    onLike () {
        let xhr = new XMLHttpRequest()
        xhr.open('POST', './click')
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                this.setState({
                    likesCount: xhr.responseText
                })
            }
        }
        xhr.send()
    }
    
    render(){
        return(
        <div>
            Likes : <span id="likes">{this.state.likesCount}</span>
            <div><button style={style} onClick={() => {this.onLike()}} title="likes stored on mongodb instance">Click to Like!</button></div>
        </div>
        );
    }
};

export default LikeButton;