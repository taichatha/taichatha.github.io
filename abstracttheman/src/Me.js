import React, { Component } from 'react';
import './Me.css';
import Post from './Post';

class Me extends Component {
  render(){
      let posts = [
          {'title': 'about', 'body': 'Test Body', 'date':'July 6, 2018'}
      ].map((post, index) => {
          return <Post key={index} post={post}/>;
      });
    return(

      <div className={"post"}>
        <div className="point name">Taimoor Chatha</div>
        <div className="point info">
            <div className={"content"}>
                Altamira Corporation
            </div>
            <div className={"hover-content"}>
                Software Developer, 2016-2018
            </div>
        </div>
          <div className="point info">
              <div className={"content"}>
                  UVA '15 CS
              </div>
              <div className={"hover-content"}>
                  Graduated 2015
              </div>
          </div>
        <div className="point info">
          <div className={"content"}>
              MaddenStudents
          </div>
          <div className={"hover-content"}>
              Owner, 2012-2014
          </div>
        </div>
        <div className="point info">
            <div className={"content"}>
                BP
            </div>
            <div className={"hover-content"}>
                Cashier, 2008-2012
            </div>
        </div>
      </div>
    );
  }
}

export default Me;
