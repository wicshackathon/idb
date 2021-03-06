import React, { Component } from 'react';

/* The instance page for scenic locations */

class Location extends Component {

  constructor (props) {
      super(props);
      console.log(this.props.location.state.selectedLocation.scenic_address);
      this.state = {
        address: this.props.location.state.selectedLocation.scenic_address,
        name: this.props.location.state.selectedLocation.scenic_name,
        photo: this.props.location.state.selectedLocation.scenic_picture,
        rating: this.props.location.state.selectedLocation.scenic_rating,
        review1: this.props.location.state.selectedLocation.scenic_review1,
        review2: this.props.location.state.selectedLocation.scenic_review2,
      };
      console.log(this.state);
  };

  // componentDidMount() {
  //
  // }

  render() {

    return (
      <div>
      <div className="content">
        <div className="col-sm-5 instance-details">
          <div className="product-item">
            <div className="product-item-title">
              <div className="bg-faded p-5 d-flex ml-auto rounded">
                <h2 className="section-heading mb-0">
                  <span className="section-heading-upper">Scenic Location:</span>
                  <span className="section-heading-lower">{this.state.name}</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="product-item-description mr-auto">
            <div className="bg-faded p-5 rounded">
              <p className="mb-0"><b>Address: </b>{this.state.address}</p>
              <p className="mb-0"><b>Rating: </b>{this.state.rating}/5</p>
              <p className="mb-0"><b>Reviews:</b></p>
              <p className="mb-0">{this.state.review1}</p>
              <p className="mb-0"></p>
              <p className="mb-0">{this.state.review2}</p>
            </div>
          </div>
        </div>
        <div className="col-sm-5 instance-pic">
          <img className="product-item-img mx-auto rounded img-fluid mb-3 mb-lg-0" src={this.state.photo} alt={this.state.name} style={{width: 500, height: 500, marginTop: 50}} />
        </div>
        </div>
        <div className="model-links">
          <p><a href="/shops">COFFEE SHOPS NEARBY </a></p>
          <p><a href="/snapshots">MORE SNAPS</a></p>
        </div>
      </div>
    );
  }
}

export default Location;
