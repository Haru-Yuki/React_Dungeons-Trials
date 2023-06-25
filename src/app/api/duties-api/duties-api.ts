import axios from "axios";
import {FiltersStoreModel} from "../../models/filters.model";

export const getAllDutiesAPI = async (storeFilters: FiltersStoreModel) => {
    const {dutyFilter, expansionFilter, sortFilter} = storeFilters;

    return await axios.get(`http://localhost:5000/duntri/${dutyFilter.toLowerCase()}?expansion=${expansionFilter}&sort=${sortFilter}`);
}

export const getDutiesByNameAPI = async (storeFilters: FiltersStoreModel) => {
    const {dutyFilter, searchFilter, sortFilter} = storeFilters;

    return await axios.get(`http://localhost:5000/duntri/${dutyFilter.toLowerCase()}?name=${searchFilter}&sort=${sortFilter}`);
}