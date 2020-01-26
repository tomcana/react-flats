import React, { Component } from 'react';

import FlatList from './flat_list';
import flats from '../../data/flats';
import SimpleMap from './map';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <FlatList flats={flats} />
        </div>
        <div className="right-scene">
          <div><SimpleMap /></div>
        </div>
      </div>
    );
  }
}

export default App;
