import React, { Component } from 'react';

import FlatList from './flat_list.jsx';
import flats from '../../data/flats.js';
import SimpleMap from './map.jsx';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats
    }
  }
  render() {
    return (
      <div>
        <div className="left-scene">
          <FlatList flats={this.state.flats} />
        </div>
        <div className="right-scene">
          <div><SimpleMap /></div>
        </div>
      </div>
    );
  }
}

export default App;
