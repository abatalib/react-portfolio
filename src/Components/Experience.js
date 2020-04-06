import React, { Component } from 'react';


export default class Experience extends Component
{
    constructor(props) {
      super(props);
  
      this.experience = props.experience;
    }

    render() {
      return (
        <h2>{this.experience.page}</h2>
      )
    }

}