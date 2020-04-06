import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";

export default class Landing extends Component {
  constructor(props) {
    super(props);

    this.landing = props.landing;
  }
  render() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
        <div className="w-100">
          <h1 className="mb-0">{this.landing.firstName}
            <span className="text-primary">{this.landing.lastName}</span>
          </h1>
            <div class="subheading mb-5">{this.landing.address} · 
            <a href="mailto:name@email.com"> {this.landing.email}</a>
            </div>
          <p className="lead mb-5">{this.landing.bio}</p>
          <div className="social-icons">
            <a href={this.landing.linkedin}>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href={this.landing.github}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href={this.landing.github}>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
        </div>
      </section>
    );
  }
}
