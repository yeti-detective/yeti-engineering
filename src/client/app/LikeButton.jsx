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
        let newLikesCount = this.state.likesCount + 1;
        this.setState({likesCount: newLikesCount});
    },
    render: function(){
        return(
        <form method="POST">
            Likes : <span>{this.state.likesCount}</span>
            <div><button style={style} type="submit" onClick={this.onLike}>Like Me</button></div>
        </form>
        );
    }
});

module.exports = LikeButton;