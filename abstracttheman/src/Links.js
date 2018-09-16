import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './Links.css';

class Links extends Component {
  render(){

      var isActive = this.props.location.pathname;
      var links = [["Me", "/me"], ["Writing","/writing"]].map((obj, index) => {
          if (index === 0) {
              var className="left link";
          } else if (index === 1){
              var className="right link";
          }
          else {
              var className="link"
          }
          if (this.props.location.pathname == obj[1]){
              className += " active";
          }
          return (<NavLink exact={true} activeClassName="is-active" to={obj[1]}><div className={className}>{obj[0]}</div></NavLink>);
      });
    return (
	  <div className="links">
          {links}
          {/*<NavLink activeClassName="is-active" to="/code"><div id="/code" className=" link">Code</div></NavLink>*/}
	    {/*<NavLink activeClassName="is-active" to="/writing"><div id="/writing" className="right link">Writing</div></NavLink>*/}
          </div>
    );
  }
}

export default withRouter(Links);
