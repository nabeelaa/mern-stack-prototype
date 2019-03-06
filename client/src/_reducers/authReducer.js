import isEmpty from "../_validation/is-empty";
import { SET_CURRENT_USER } from "../_actions/types";
import { SET_CURRENT_BRANDUSER } from "../_actions/types";

const initialState = {
  isAuthenticatedUser: false,
  isAuthenticatedBrand: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticatedUser: !isEmpty(action.payload),
        user: action.payload
      };
    case SET_CURRENT_BRANDUSER:
      return {
        ...state,
        isAuthenticatedBrand: !isEmpty(action.payload),
        user: action.payload
      };
    default:
      return state;
  }
}
