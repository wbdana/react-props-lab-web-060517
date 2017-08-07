// Code The Spaceship Component Here
import React from 'react'

export default class Spaceship extends React.Component {
  render() {
    return(
      <div>
        <ul>
          <li>{this.props.name}</li>
          <li>{this.props.speed}</li>
          <li>{this.props.hasRockets}</li>
          <li>{this.props.colors}</li>
        </ul>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}
