import React, { Component } from 'react';
// import Reviews from './Reviews';

class ReviewInput extends Component {

  state ={
    review: ""
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let reviewObj = {
      restaurantId: this.props.restaurantId,
      text: this.state.review
    }
    this.props.addReview(reviewObj)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Enter Review:</label>
          <input type="text" name="review" value={this.state.review} onChange={this.handleChange} />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
