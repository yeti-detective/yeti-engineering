var React = require('react');

var Explaining = React.createClass({
    render: function(){
        return(
            <div>
                <h3>Like Me!</h3>
                <p>Clicking a button and seeing a response gives you a dopamine hit.</p>
                <p>I am not a drug dealer.</p>
                <p>I built this page with React and host it from a Node server which I also wrote.</p>
                <p>You could say I'm pretty good at JavaScript.</p>
                <p>But you don't have to take MY word for it.</p>
                <p>Click on these links to adore my work</p>
            </div>
        );
    }
});

module.exports = Explaining;