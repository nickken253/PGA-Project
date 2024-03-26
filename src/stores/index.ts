import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/userSlice";
import { tableListSlice } from "./slices/TableListSlice";

export const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
    [tableListSlice.name]: tableListSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export * from './slices';