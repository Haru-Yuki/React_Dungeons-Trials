import axios from "axios";

export const getAllDutiesAPI = async (storeFilters: URLSearchParams) => {
    const searchParamsData = {
        duty: storeFilters.get('duty'),
        expansion: storeFilters.get('expansion'),
        sort: storeFilters.get('sort'),
        name: storeFilters.get('name') || ''
    }
    const {duty, expansion, sort, name} = searchParamsData;

    return await axios.get(`http://localhost:5000/duntri/${duty.toLowerCase()}?expansion=${expansion}&sort=${sort}&name=${name}`);
}