import React from 'react';
var likes = require('../public/likes.js');

var style = {
                border: 'solid #14073B',
                backgroundColor: '#271758',
                borderRadius: 10,
                color: '#887BAF'
            };

var LikeButton = React.createClass({
    getInitialState: function(){
        var cliLikes = parseInt(likes.howMany);
        return {likesCount: cliLikes};
    },
    onLike: function(){
        var xhttp = new XMLHttpRequest();
        /* xhttp.onreadystatechange = ()=>{
            if(this.readyState == 4 && this.status == 200) {
                
            }
        }; */
        xhttp.open("POST", "click", true);
        xhttp.send();
        let newLikesCount = this.state.likesCount + 1;
        this.setState({likesCount: newLikesCount});
    },
    render: function(){
        return(
        <div>
            Likes : <span>{this.state.likesCount}</span>
            <div><button style={style} onClick={this.onLike}>Like Me</button></div>
        </div>
        );
    }
});

module.exports = LikeButton;