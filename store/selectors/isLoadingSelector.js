import { createSelector } from 'reselect';

export const isLoadingSelector = createSelector(
  state => state.isLoading,
  isLoading => isLoading
);
