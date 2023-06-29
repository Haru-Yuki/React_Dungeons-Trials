import axios from "axios";

export const getAllDutiesAPI = async (searchParams: URLSearchParams) => {
    const {duty, expansion, sort, name} = _prepareSearchParamsData(searchParams);

    return await axios.get(`http://localhost:5000/duntri/${duty.toLowerCase()}?expansion=${expansion}&sort=${sort}&name=${name}`);
}

const _prepareSearchParamsData = (searchParams: URLSearchParams) => {
    return {
        duty: searchParams.get('duty'),
        expansion: searchParams.get('expansion'),
        sort: searchParams.get('sort'),
        name: searchParams.get('name') || ''
    }
}