import { REQUEST_STATUSES } from "src/shared/lib";

export const selectUserSlice = (state: RootState) => state.user;
export const selectIsAuthorized = (state: RootState) =>
  selectUserSlice(state).isAuthorized === true;

export const selectAuthStatus = (state: RootState) =>
  selectUserSlice(state).authStatus;

export const selectAuthIsPending = (state: RootState) =>
  selectAuthStatus(state) === REQUEST_STATUSES.pending;

export const selectAuthIsFailed = (state: RootState) =>
  selectAuthStatus(state) === REQUEST_STATUSES.failed;
