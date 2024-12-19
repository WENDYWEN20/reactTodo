import React, { Component } from 'react'
export default class Opener extends Component {
    render() {
    const {title, handlers}=this.props
    return (
      <div className='title-n-buttons'>
        <h2>{title}: </h2>
        <button
          onClick={() => {
            handlers.open();
          }}
        >
          Open
        </button>
        <button
          onClick={() => {
            handlers.close();
          }}
        >
          Close
        </button>
        <button
          onClick={() => {
            handlers.toggle();
          }}
        >
          Toggle
        </button>
      </div>
    );
  }
}
