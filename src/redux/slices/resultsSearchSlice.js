/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const resultsSearchSlice = createSlice({
    name: 'resultsSearch',
    initialState: {
        users: [],
    },
    reducers: {
        recordResultsSearch(state, action) {
            state.users = action.payload;
        },
    },
});

export const { recordResultsSearch } = resultsSearchSlice.actions;

export default resultsSearchSlice.reducer;
