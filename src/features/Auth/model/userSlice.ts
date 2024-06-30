import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUSES, RequestStatusesType } from "src/shared/lib";
import { authThunk } from "./authThunk";

type IState = {
  isAuthorized: boolean;
  authStatus: RequestStatusesType;
};

const initialState: IState = {
  isAuthorized: false,
  authStatus: REQUEST_STATUSES.idle,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userAuthorized(state) {
      state.isAuthorized = true;
    },
    userLoggedOut(state) {
      state.isAuthorized = false;
    },
    authStatusChanged(state, action: PayloadAction<RequestStatusesType>) {
      state.authStatus = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(authThunk.pending, (state) => {
      state.authStatus = REQUEST_STATUSES.pending;
      state.isAuthorized = false;
    }),
      builder.addCase(authThunk.fulfilled, (state) => {
        state.isAuthorized = true;
        state.authStatus = REQUEST_STATUSES.success;
      });
    builder.addCase(authThunk.rejected, (state) => {
      state.authStatus = REQUEST_STATUSES.failed;
      state.isAuthorized = false;
    });
  },
});

export const { userAuthorized, userLoggedOut, authStatusChanged } =
  userSlice.actions;
export const { reducer: userReducer } = userSlice;
