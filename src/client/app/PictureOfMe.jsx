var React = require('react');

var style = {
        borderRadius: '50%'
    };

var MyFace = React.createClass({
    
    render: function(){
        return <img style={style} src="https://scontent-mia1-1.xx.fbcdn.net/v/t1.0-9/14641954_10209046591619738_2791904295687670610_n.jpg?oh=ece116ca77cef99644b8953e6b4bb7b9&oe=58F0439C" />;
    }
})

module.exports = MyFace;