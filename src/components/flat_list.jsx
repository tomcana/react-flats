import React, { Component } from 'react';
import Flat from './flat';

class FlatList extends Component {
  handleUpdate = (center) => {
    console.log("clicked");
    console.log(center);
    console.log(this.props);
    this.props.selectFunc(center);
  }

  render() {
    const { flats, selectFunc } = this.props;
    return (
      <div className="flat-list" selectFunc={selectFunc}>
        {flats.map(flat => <Flat id={flat.name} key={flat.name} priceCurrency={flat.priceCurrency} price={flat.price} name={flat.name} imageUrl={flat.imageUrl} lat={flat.lat} lng={flat.lng} handleUpdate={this.handleUpdate} />)}
      </div>
    );
  }
}

export default FlatList;
