var React = require('react');
require('font-awesome-webpack');

var Explaining = React.createClass({
    render: function(){
        return(
            <div>
                <h3>Like My Face</h3>
                <p>I built this page with React and host it from a Node server which I also wrote.</p>
                <p>You could say I'm pretty good at JavaScript.</p>
                <p>But you don't have to take MY word for it.</p>
            </div>
        )
    }
});

module.exports = Explaining;