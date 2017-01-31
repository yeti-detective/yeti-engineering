import React from 'react';

var style = {
                border: 'solid #14073B',
                backgroundColor: '#271758',
                borderRadius: 10,
                color: '#887BAF'
            }

class AwesomeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {likesCount: 0};
        this.onLike = this.onLike.bind(this);
    }
    
    onLike () {
        let newLikesCount = this.state.likesCount + 1;
        this.setState({likesCount: newLikesCount});
        
    }
    
    render() {
        return (
            <form method="POST">
                Likes : <span>{this.state.likesCount}</span>
                <div><button type="submit" onClick={this.onLike}>Like Me</button></div>
            </form>
        );
    }
}

export default AwesomeComponent;