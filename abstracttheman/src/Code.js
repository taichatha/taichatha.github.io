import React, { Component } from 'react';
import './Writing.css';

class Code extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
    componentDidMount() {

        this.readTextFile("../posts");
    }
    readTextFile = file => {

        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", "posts/1.txt", false);
        rawFile.onreadystatechange = () => {
            if (rawFile.readyState === 4) {
                if (rawFile.status === 2000 || rawFile.status == 0) {
                    var allText = rawFile.responseText;
                    this.setState({ posts: [...this.state.posts, allText]});
                }
            }
        }
        rawFile.send(null);
    }
    render(){
        return(
            <div className={"posts"}>
                <div className={"post"}>www.github.com/taichatha</div>
            </div>
        );
    }
}

export default Code;
