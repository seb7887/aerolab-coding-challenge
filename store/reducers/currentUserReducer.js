import { CURRENT_USER, CURRENT_USER_SUCCESS } from '../actionTypes';

const initialState = {
  currentUser: {}
};

export const currentUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_USER:
      return {
        ...state
      };
    case CURRENT_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};
