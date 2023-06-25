import Duty from "../../../models/duty.model";
import {Grid} from "@mui/material";
import DutyCard from "./duty-card/duty-card";
import {getAllDutiesAPI, getDutiesByNameAPI} from "../../../api/duties-api/duties-api";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import DutyCardsEmpty from "./duty-cards-empty/duty-cards-empty";
import {useSearchParams} from "react-router-dom";
import {AxiosResponse} from "axios";

const DutyCards = () => {
    const [duties, setDuties] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const storeFilters = useSelector((state: any) => state.filters);

    const isFiltersSelected = storeFilters.dutyFilter !== '' && storeFilters.expansionFilter;

    useEffect(() => {
        if (isFiltersSelected) {
            setSearchParams({
                duty: storeFilters.dutyFilter,
                expansion: storeFilters.expansionFilter,
                sort: storeFilters.sortFilter
            })

            if (storeFilters.searchFilter) {
                searchParams.set('search', storeFilters.searchFilter);
                setSearchParams(searchParams);

                getDutiesByNameAPI(storeFilters).then((data: AxiosResponse<Duty[]>) => {
                    setDuties(data.data);
                })
            } else {
                getAllDutiesAPI(storeFilters).then((data: AxiosResponse<Duty[]>) => {
                    setDuties(data.data);
                })
            }
        }
    }, [storeFilters]);

    return (
        <>
            {isFiltersSelected ?
                <Grid container spacing={4} sx={{
                    marginTop: '30px',
                    padding: '0 70px 50px'
                }}>
                    {duties.map((duty: Duty) =>
                        <Grid key={duty._id} item xs={6} md={4} lg={4} xl={3}>
                            <DutyCard
                                dutyType={duty.dutyType}
                                name={duty.name}
                                imageLink={duty.imageLink}
                                patchName={duty.patchName}
                                level={duty.level}
                                iLevel={duty.iLevel}
                                description={duty.description}
                                completed={duty.completed}
                                favourite={duty.favourite}
                            />
                        </Grid>
                    )}
                </Grid> :
                <DutyCardsEmpty />}
        </>
    )
}

export default DutyCards;