import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = { restaurants: [], reviews: [] }, action) {

  switch (action.type) {

    case "ADD_RESTAURANT":

      const restaurant = { name: action.payload, id: cuidFn() }
      return {
        ...state,
        restaurants: [...state.restaurants, restaurant]
      }

    case "DELETE_RESTAURANT":

      return {
        ...state,
        restaurants: state.restaurants.filter( restaurant => restaurant.id !== action.payload )
      }

    case "ADD_REVIEW":

      const review = {
        ...action.payload,
        id: cuidFn()
      }
      return {
        ...state,
        reviews: [...state.reviews, review]
      }

    case "DELETE_REVIEW":

      return {
        ...state,
        reviews: state.reviews.filter( review => review.id !== action.payload )
      }

    default:
      return state;

  }

}
