import React from 'react';

var style = {
    border: 'solid #082156',
    backgroundColor: '#070A16',
    borderRadius: 10,
    color: '#3F5A95'
};

class LikeButton extends React.Component {
    constructor(){
        super();
        this.state = {
            likesCount: null
        }
        this.onLike = this.onLike.bind(this);
    }

    componentDidMount(){
        var likes = new XMLHttpRequest();
        likes.open("GET", "click", true);
        likes.send();
        var lks;
        likes.onreadystatechange = function(){
            lks = JSON.parse(likes.responseText);
        }
        console.log(lks);
        this.setState({likesCount: lks});
    }

    onLike(){
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "click", true);
        xhttp.send();
        /* xhttp.onreadystatechange = ()=>{
            console.log(xhttp.responseText);
            //this.setState({likesCount: xhttp.responseText.howMany});
        } */
    }

    render() {
        return(
            <div>
                Likes: <span>{this.state.likesCount}</span>
                <div><button style={style} onClick={this.onLike}>Like Me</button></div>
            </div>
        )
    }
}

export default LikeButton;