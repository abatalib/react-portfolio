import React, { Component } from 'react';


export default class Awards extends Component
{
    constructor(props) {
      super(props);
  
      this.awards = props.awards;
    }

    render() {
      return (
        <h2>{this.awards.page}</h2>
      )
    }

}