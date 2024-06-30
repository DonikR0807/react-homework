declare type RootState = ReturnType<typeof import("../store").store.getState>;
declare type AppDispatch = typeof import("../store").store.dispatch;
declare type AsyncThunkConfig = {
  state?: RootState;
  dispatch?: Dispatch;
  extra?: unknown;
  rejectValue?: unknown;
  serializedErrorType?: unknown;
  pendingMeta?: unknown;
  fulfilledMeta?: unknown;
  rejectedMeta?: unknown;
};
