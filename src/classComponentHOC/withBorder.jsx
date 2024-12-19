import React from 'react'

export default function withBorder(OldComponent, color) {
    return class NewComponent extends React.Component{
        render() {
          return (
            <div style={{border:`2px solid ${color}`, padding: '5px'}}>
            <OldComponent {...this.props}/>
            </div>
          )
        }
    }
}

