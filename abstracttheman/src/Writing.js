import React, { Component } from 'react';
import Post from './Post.js';
import './Writing.css';

class Writing extends Component {
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
        <div className={"post"}>...</div>
      </div>
    );
  }
}

export default Writing;
