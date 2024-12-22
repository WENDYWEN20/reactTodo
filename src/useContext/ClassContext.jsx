import React, { Component } from 'react'
import {ThemeContext} from './ThemeContext.jsx'
export default class ClassContext extends Component {
    themeStyles(dark){
        return { backgroundColor: dark? '#333': '#CCC', 
        color: dark? '#CCC': '#333',
        padding: '2rem',
        margin: '2rem'}

    }
  render() {
    return (
        <ThemeContext.Consumer>
      {darkTheme =>{ return <div style={this.themeStyles(darkTheme)}>      
      Class Component </div>}}
      </ThemeContext.Consumer>
    )
  }
}
