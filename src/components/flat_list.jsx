import React, { Component } from 'react';
import Flat from './flat';

{/* <FlatList
  flats={this.state.flats}
  selectedFlat={this.state.selectedFlat}
/> */}

const FlatList = (props) => {
  const renderList = () => {
    return props.flats.map((flat, index) => {
      return (
        <Flat
          flat={flat}
          key={flat.lat}
          selected={flat.name === props.selectedFlat.name}
          index={index}
          selectFlat={props.selectFlat}
        />
      );
    });
  };
  return (
    <div className="flat-list">
      {renderList()}
    </div>
  );
};

export default FlatList;
