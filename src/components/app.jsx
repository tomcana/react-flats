import React, { Component } from 'react';

import FlatList from './flat_list';
import flats from '../../data/flats';
import SimpleMap from './map';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: 48.884211,
        lng: 2.34689
      }
    };
  }

  selectSet = (mapinfo) => {
    this.setState({
      center: {
        lat: mapinfo.lat,
        lng: mapinfo.lng
      }
    });
    console.log("app selectSet clicked");
  }

  render() {
    const { center } = this.state;
    return (
      <div>
        <div className="left-scene">
          <FlatList flats={flats} selectFunc={this.selectSet} />
        </div>
        <div className="right-scene">
          <div><SimpleMap center={center} /></div>
        </div>
      </div>
    );
  }
}

export default App;
