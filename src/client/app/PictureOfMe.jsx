var React = require('react');

// new scarf picture is #191328

var style = {
        borderRadius: '50%',
        marginTop: 60,
        height: 200,
        width: 'auto'
    };

var MyFace = React.createClass({
    
    render: function(){
        return <img style={style} alt="photo of a handsome man" src="https://dl.dropbox.com/s/wb4nyxqu7olzgc4/ScarfHandsome.jpg?dl=0" />;
    }
});

module.exports = MyFace;