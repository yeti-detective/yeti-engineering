import React from 'react';
var likes = require('../public/likes.js');

var style = {
                border: 'solid #14073B',
                backgroundColor: '#271758',
                borderRadius: 10,
                color: '#887BAF'
            }

var LikeButton = React.createClass({
    getInitialState: function(){
        var cliLikes = likes.howMany;
        return {likesCount: cliLikes};
    },
    onLike: function(){
        this.setState({likesCount: this.state.cliLikes +1});
    },
    render: function(){
        return(
        <form method="POST">
            Likes : <span>{this.state.likesCount}</span>
            <div><button type="submit" onClick={this.onLike}>Like Me</button></div>
        </form>
        );
    }
});

module.exports = LikeButton;