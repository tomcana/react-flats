import React, { Component } from 'react';

class Flat extends Component {
  render() {
    const bgStyle = {
      backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)),url('${this.props.imageUrl}')`
    }
    return (
      <div className="flat" style={bgStyle}>
      <p>{this.props.priceCurrency}{this.props.price}</p>
      <h4>{this.props.name}</h4>
    </div>
    );
  }
}

export default Flat;
