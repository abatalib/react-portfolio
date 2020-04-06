import React, { Component } from 'react';


export default class Experience extends Component
{
    constructor(props) {
      super(props);
  
      this.skills = props.skills;
      console.log(this.skills)
    }

    render() {
      return (
        <h2>{this.skills.page}</h2>
      )
    }

}