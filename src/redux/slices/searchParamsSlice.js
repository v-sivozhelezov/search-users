/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const searchParamDefault = {
    searchQuery: '',
    filteringByRepositories: false,
    ascendingFilter: false,
    idPage: 1,
};

const searchParamsSlice = createSlice({
    name: 'search',
    initialState: {
        searchQuery: localStorage.getItem('searchQuery')
            ? localStorage.getItem('searchQuery')
            : searchParamDefault.searchQuery,

        filteringByRepositories: localStorage.getItem('filteringByRepositories')
            ? JSON.parse(localStorage.getItem('filteringByRepositories'))
            : searchParamDefault.filteringByRepositories,

        ascendingFilter: localStorage.getItem('ascendingFilter')
            ? JSON.parse(localStorage.getItem('ascendingFilter'))
            : searchParamDefault.ascendingFilter,

        idPage: localStorage.getItem('idPage')
            ? localStorage.getItem('idPage')
            : searchParamDefault.idPage,
    },
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
        setIdPage(state, action) {
            state.idPage = action.payload;
        },
    },
});

export const {
    setSearchQuery,
    setFilteringByRepositories,
    setAscendingFilter,
    setIdPage,
} = searchParamsSlice.actions;

export const getSearchParams = (state) => state.search;

export default searchParamsSlice.reducer;
