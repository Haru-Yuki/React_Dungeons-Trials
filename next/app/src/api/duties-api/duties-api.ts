import axios from "axios";

export const getAllDutiesAPI = async (searchParams: { name: string; duty: string; sort: string; expansion: string }) => {
    const {duty, expansion, sort, name} = searchParams;

    return await axios.get(`http://localhost:5000/duntri/${duty.toLowerCase()}?expansion=${expansion}&sort=${sort}&name=${name}`);
}

export const getDutyByNameAPI = async (duty: string, name: string) => {
    return await axios.get(`http://localhost:5000/duntri/${duty.toLowerCase()}/name/?name=${name}`);
}