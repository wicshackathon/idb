import React, { Component } from 'react';
import chunk from 'lodash.chunk';
import {Redirect} from 'react-router-dom';

class Locations extends Component {

constructor () {
    super();
    this.state = {
      locations: [],
      navigate: false,
      navigateTo: '',
      selectedLocation: [],
    };
};

componentDidMount() {
    fetch('/api/v1.0/sceniclocations').then(results => {
      return results.json();
    }).then(data => {
      this.setState({locations: data.sceniclocations});
    })
}

render() {

  if (this.state.navigate) {
    console.log(this.state.selectedLocation);
    return <Redirect to={{pathname: this.state.navigateTo, state: {selectedLocation: this.state.selectedLocation}}} push={true} />;
  }

  let locationComponents = []
  if (this.state.locations !== undefined) {
      locationComponents = this.state.locations.map((location) => {
          return (
              <li className="col" onClick={() => this.setState({navigate: true, navigateTo: '/location', selectedLocation: location})}>
                  <img src={location.photo} style={{width: 300, height: 300}} alt={location.name} />
                  <span className="picText"><span>{location.name}<br />Rating: {location.rating}</span></span>
              </li>
          );
      })
  }
  
  return (
      <div>
        <section className="page-section">
          <div className="container">
            <div className="row">
              <ul className="img-list">
                { chunk(locationComponents, 3).map((row) => {
                   return (
                     <div className="row">
                         {row}
                     </div>
                   )
                })}
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Locations;