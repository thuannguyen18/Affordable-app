import { configureStore } from '@reduxjs/toolkit';
import authenSlice from './formSlice';
import searchReducer from './searchSlice';
import counterReducer from './counterSlice';
import { postApi } from "../services/post.service";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        authentication: authenSlice,
        search: searchReducer,
        [postApi.reducerPath]: postApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postApi.middleware)
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;