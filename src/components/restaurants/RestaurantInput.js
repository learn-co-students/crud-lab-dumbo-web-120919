import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    name: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addRestaurant(this.state.name)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Restaurant name:</label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
