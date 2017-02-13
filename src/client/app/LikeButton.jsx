import React from 'react';
var likes = require('../public/likes.js');

var style = {
                border: 'solid #082156',
                backgroundColor: '#070A16',
                borderRadius: 10,
                color: '#3F5A95'
            };

var LikeButton = React.createClass({
    getInitialState: function(){
        var cliLikes = parseInt(likes.howMany);
        return {likesCount: cliLikes};
    },
    onLike: function(){
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", "click", true);
        xhttp.send();
        xhttp.onreadystatechange = function(){
            console.log(this.responseText);
        }

        let newLikesCount = this.state.likesCount + 1;
        this.setState({likesCount: newLikesCount});
    },
    render: function(){
        return(
        <div>
            Likes : <span id="likes">{this.state.likesCount}</span>
            <div><button style={style} onClick={this.onLike}>Like Me</button></div>
        </div>
        );
    }
});

module.exports = LikeButton;