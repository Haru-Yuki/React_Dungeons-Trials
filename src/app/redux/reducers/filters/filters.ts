import {createSlice} from "@reduxjs/toolkit";
import {SESSION_STORAGE_KEYS} from "../../../constants/constants";

const filtersInitialState = {
    dutyFilter: sessionStorage.getItem(SESSION_STORAGE_KEYS.FILTERS.DUTIES_FILTER) || '',
    expansionFilter: sessionStorage.getItem(SESSION_STORAGE_KEYS.FILTERS.EXPANSION_FILTER) || 'ALL',
    sortFilter: sessionStorage.getItem(SESSION_STORAGE_KEYS.FILTERS.SORT_FILTER) || 'lvlDesc'
}

export const filtersSlice = createSlice({
    name: 'filters',
    initialState: filtersInitialState,
    reducers: {
        setDutiesFilter(state, action) {
            state.dutyFilter = action.payload
        },
        setExpansionFilter(state, action) {
            state.expansionFilter = action.payload
        },
        setSortFilter(state, action) {
            state.sortFilter = action.payload
        },
        resetAllFilters(state) {
            resetFiltersStorage();

            state.dutyFilter = filtersInitialState.dutyFilter;
            state.expansionFilter = filtersInitialState.expansionFilter;
            state.sortFilter = filtersInitialState.sortFilter;
        }
    }
});

const resetFiltersStorage = () => {
    sessionStorage.removeItem(SESSION_STORAGE_KEYS.FILTERS.DUTIES_FILTER);
    sessionStorage.removeItem(SESSION_STORAGE_KEYS.FILTERS.EXPANSION_FILTER);
    sessionStorage.removeItem(SESSION_STORAGE_KEYS.FILTERS.SORT_FILTER);
};

const { actions, reducer } = filtersSlice;

export const { setDutiesFilter, setExpansionFilter, setSortFilter, resetAllFilters } = actions;

export default reducer;