import React from 'react';
import Flat from './flat';

const FlatList = (props) => {
  return (
    <div className="flat-list">
      {props.flats.map(flat => <Flat id={flat.name} key={flat.name} priceCurrency={flat.priceCurrency} price={flat.price} name={flat.name} imageUrl={flat.imageUrl} />)}
    </div>
  );
}

export default FlatList;
