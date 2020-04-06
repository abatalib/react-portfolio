import React, { Component } from 'react';


export default class Interests extends Component
{
    constructor(props) {
      super(props);
  
      this.interests = props.interests;
    }

    render() {
      return (
        <h2>{this.interests.page}</h2>
      )
    }

}