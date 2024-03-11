import { configureStore } from '@reduxjs/toolkit';
import resultsSearchReducer from './slices/resultsSearchSlice';
import { GitHubAPI } from '../API/GitHubAPI';
import searchParamsSlice from './slices/searchParamsSlice';

const store = configureStore({
    reducer: {
        results: resultsSearchReducer,
        search: searchParamsSlice,
        [GitHubAPI.reducerPath]: GitHubAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(GitHubAPI.middleware),
});
export default store;
