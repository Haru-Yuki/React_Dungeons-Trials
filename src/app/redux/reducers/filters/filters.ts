import {createSlice} from "@reduxjs/toolkit";

const filtersInitialState = {
    dutyFilter: '',
    expansionFilter: false,
    sortFilter: 'asc'
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
        resetAllFilters(state) {
            state.dutyFilter = '';
            state.expansionFilter = false;
            state.sortFilter = 'asc';
        }
    }
});

const { actions, reducer } = filtersSlice;

export const { setDutiesFilter, setExpansionFilter, setSortFilter, resetAllFilters } = actions;

export default reducer;