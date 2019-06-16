import React, { Component } from 'react';

// import FlatList from './flat_list.jsx';
import flats from '../../data/flats.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: [flats]
    }
  }
  render() {
    console.log(this.state.flats[0][0].name);
    return (
      <div>
        <div className="left-scene">
          <div>
            {/* <FlatList flats={this.state.gifs} /> */}
          </div>
        </div>
        <div>
          <div>map</div>
        </div>
      </div>
    );
  }
}

export default App;
