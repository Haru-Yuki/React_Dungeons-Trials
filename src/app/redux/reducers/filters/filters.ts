import {createSlice} from "@reduxjs/toolkit";
import {SESSION_STORAGE_KEYS} from "../../../constants/constants";

const filtersInitialState = {
    dutyFilter: sessionStorage.getItem(SESSION_STORAGE_KEYS.FILTERS.DUTIES_FILTER) || '',
    expansionFilter: sessionStorage.getItem(SESSION_STORAGE_KEYS.FILTERS.EXPANSION_FILTER) || 'ALL',
    sortFilter: sessionStorage.getItem(SESSION_STORAGE_KEYS.FILTERS.SORT_FILTER) || 'lvlDesc',
    isReset: false
}

export const filtersSlice = createSlice({
    name: 'filters',
    initialState: filtersInitialState,
    reducers: {
        setDutiesFilter(state, action) {
            state.dutyFilter = action.payload;
            state.isReset = false;
        },
        setExpansionFilter(state, action) {
            state.expansionFilter = action.payload;
            state.isReset = false;
        },
        setSortFilter(state, action) {
            state.sortFilter = action.payload;
            state.isReset = false;
        },
        resetAllFilters(state) {
            state.dutyFilter = '';
            state.expansionFilter = 'ALL';
            state.sortFilter = 'lvlDesc';
            state.isReset = true;
        }
    }
});

const { actions, reducer } = filtersSlice;

export const { setDutiesFilter, setExpansionFilter, setSortFilter, resetAllFilters } = actions;

export default reducer;