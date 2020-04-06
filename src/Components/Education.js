import React, { Component } from 'react';


export default class Awards extends Component
{
    constructor(props) {
      super(props);
  
      this.education = props.education;
    }

    render() {
      return (
        <h2>{this.education.page}</h2>
      )
    }

}