import React, { Component } from 'react';

export default class Cell extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.value
    }
  }

  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}}
        onClick={this.clickEvent}>
      </div>
    )
  }

  clickEvent = () => {
    this.setState({
      color: '#333'
    })
  }
}
