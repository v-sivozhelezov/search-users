import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const GitHubAPI = createApi({
    reducerPath: 'searchEngine',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.github.com/',
    }),
    endpoints: (build) => ({
        getResultsSearch: build.query({
            query: ({
                searchQuery,
                filteringByRepositories: sort,
                idPage,
            }) => ({
                method: 'GET',
                url: `search/users?q=${searchQuery}${sort ? '+sort:repositories' : ''}&page=${idPage}`,
            }),
        }),
        getUserInfo: build.query({
            query: (user) => ({
                method: 'GET',
                url: `users/${user}`,
            }),
        }),
    }),
});

export const { useGetResultsSearchQuery, useGetUserInfoQuery } = GitHubAPI;
