import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux';

class ReviewsContainer extends Component {

  returnTheseReviews = () => this.props.reviews.filter( review => review.restaurantId === this.props.restaurant.id )

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant.id} />
        <Reviews reviews={this.returnTheseReviews()} deleteReview={this.props.deleteReview} />
      </div>
    )
  }
}

/* REDUX ACTIONS */

const mapStateToProps = (state) => {
  return {
    reviews: state.reviews
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addReview: (reviewObj) => dispatch({
      type: "ADD_REVIEW",
      payload: reviewObj
    }),
    deleteReview: (reviewId) => dispatch({
      type: "DELETE_REVIEW",
      payload: reviewId
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
