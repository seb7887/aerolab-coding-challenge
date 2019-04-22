import { CURRENT_USER, CURRENT_USER_SUCCESS } from '../actionTypes';

import { currentUserService } from '../../services';

export const getCurrentUser = () => dispatch => {
  dispatch({ type: CURRENT_USER });
  currentUserService().then(data =>
    dispatch({ type: CURRENT_USER_SUCCESS, payload: data })
  );
};
