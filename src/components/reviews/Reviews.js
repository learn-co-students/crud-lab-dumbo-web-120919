import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {

    const { reviews, restaurantId, deleteReview } = this.props
    const reviewsForSpecificRestaurant = reviews.filter(review => review.restaurantId === restaurantId)

    return (
      <ul>
        {reviewsForSpecificRestaurant.map((review, idx) => {
          return <Review key={idx} review={review} deleteReview={deleteReview} />
        })}
      </ul>
    );
  }
};

export default Reviews;