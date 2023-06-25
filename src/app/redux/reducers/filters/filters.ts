import {createSlice} from "@reduxjs/toolkit";

const filtersInitialState = {
    dutyFilter: '',
    expansionFilter: false,
    sortFilter: 'asc',
    searchFilter: ''
}

export const filtersSlice = createSlice({
    name: 'filters',
    initialState: filtersInitialState,
    reducers: {
        setDutiesFilter(state, action) {
            state.dutyFilter = action.payload;
        },
        setExpansionFilter(state, action) {
            state.expansionFilter = action.payload;
        },
        setSortFilter(state, action) {
            state.sortFilter = action.payload;
        },
        setSearchFilter(state, action) {
            state.searchFilter = action.payload;
        },
        resetAllFilters(state) {
            state.dutyFilter = '';
            state.expansionFilter = false;
            state.sortFilter = 'asc';
            state.searchFilter = '';
        }
    }
});

const { actions, reducer } = filtersSlice;

export const { setDutiesFilter, setExpansionFilter, setSortFilter, setSearchFilter, resetAllFilters } = actions;

export default reducer;