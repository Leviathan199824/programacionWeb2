import React, { Component } from 'react';

class Saludo extends Component {
  render() {
    return (
      <div>
        <h2>Hola {this.props.nombre}</h2>
      </div>
    );
  }
}

export default Saludo;
