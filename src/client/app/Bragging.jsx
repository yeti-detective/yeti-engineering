var React = require('react');

var style = {
    textDecoration: "none",
    color: '#887BAF'
};

var Bragging = React.createClass({
    render: function(){
        return (
            <div>
                <p>So if your team needs someone who is good with JavaScript, React, and Node, by all means <strong><a style={style} href="tel:8166592363">give me a call.</a></strong></p>
                <p>What's that? This resume is alright, but you want to see something functional?</p>
                <p>Ok, how about a little platformer?</p>
            </div>
        );
    }
});

module.exports = Bragging;