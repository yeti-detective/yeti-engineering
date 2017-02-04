import React from 'react';

var style = {
    color: "#14073B",
    margin: "5%",
    fontSize: "2.5em"
};

// <a href="https://www.codewars.com/users/yeti-detective"><i className="fa fa-lg fa-codewars" style={style}></i></a>
// <a href="https://heroku.com/insert-link-to-cool-app-here"><i className="fa fa-lg fa-heroku" style={style}></i></a>
// my kingdom for a codewars or heroku fontawesome icon

class Links extends React.Component {
    render(){
        return(
            <div>
                <a href="https://codepen.io/Yeti_Detective"><i className="fa fa-lg fa-codepen" style={style} ></i></a>
                <a href="https://www.freecodecamp.com/yeti-detective/front-end-certification"><i className="fa fa-lg fa-free-code-camp" style={style}></i></a>
                <a href="https://github.com/yeti-detective"><i className="fa fa-lg fa-github" style={style}></i></a>
                <a href="https://www.linkedin.com/in/xchristopherxbrown"><i className="fa fa-lg fa-linkedin" style={style}></i></a>
                <a href="mailto:christopher.michael.brown@gmail.com"><i className="fa fa-lg fa-envelope" style={style}></i></a>
            </div>
        );
    }
}

module.exports = Links;