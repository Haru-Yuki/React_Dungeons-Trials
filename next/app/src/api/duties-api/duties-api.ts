import axios from "axios";

export const getAllDutiesAPI = async (searchParams: { name: string; duty: string; sort: string; expansion: string }) => {
    const {duty, expansion, sort, name} = searchParams;

    return await axios.get(`http://localhost:5000/duntri/${duty.toLowerCase()}/duties?expansion=${expansion}&sort=${sort}&name=${name}`);
}

export const getDutyByNameAPI = async (duty: string, name: string) => {
    return await axios.get(`http://localhost:5000/duntri/${duty.toLowerCase()}/duties/name/?name=${name}`);
}

export const getAllQuestsAPI = async (searchParams: { name: string; duty: string; quest: string }) => {
    const {duty, quest, name} = searchParams;

    return await axios.get(`http://localhost:5000/duntri/${duty.toLowerCase()}/quests?quest=${quest}&sort=asc&name=${name}`);
}