var React = require('react');

var style = {
    width: "95%",
    height: 400,
    backgroundColor: "#14073B",
    marginBottom: 10,
    display: "block",
    margin: "auto"
};

var Screen = React.createClass({
    render: function(){
        return (
            <svg style={style} className="screen"></svg>
        );
    }
    
});

module.exports = Screen;