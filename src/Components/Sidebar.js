import React, { Component } from 'react';
import image from '../Assets/profile.jpg';


class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.sidebarData = props.sidebar;
    this.links = props.links;
    this.clc = props.clc;
  };

  render() {  
    let menu = this.links.map((t) =>
      {
       return ( 
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#" onClick={() => this.clc(t.link)}>{t.label}</a>
        </li>
              )
      })
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <span className="d-block d-lg-none">{this.sidebarData.firstName} {this.sidebarData.lastName}</span>
          <span className="d-none d-lg-block">
            <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={image} alt=""></img>
          </span>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            {menu}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Sidebar;