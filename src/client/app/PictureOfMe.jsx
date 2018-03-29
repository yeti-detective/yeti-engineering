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
        return <img style={style} title="photo of a handsome man" src="https://dl.dropbox.com/s/me1oc1td70g5kzy/TrainSquint.jpg?dl=0" />;
    }
});

module.exports = MyFace;