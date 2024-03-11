/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchQuery: '',
    filteringByRepositories: false,
    ascendingFilter: false,
};

const searchParamsSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchQuery(state, action) {
            state.searchQuery = action.payload;
        },
        setFilteringByRepositories(state, action) {
            state.filteringByRepositories = action.payload;
        },
        setAscendingFilter(state, action) {
            state.ascendingFilter = action.payload;
        },
    },
});

export const {
    setSearchQuery,
    setFilteringByRepositories,
    setAscendingFilter,
} = searchParamsSlice.actions;

export const getSearchParams = (state) => state.search;

export default searchParamsSlice.reducer;
