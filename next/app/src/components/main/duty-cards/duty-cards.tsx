import Duty from "../../../models/duty.model";
import {Grid} from "@mui/material";
import DutyCard from "./duty-card/duty-card";
import {getAllDutiesAPI} from "../../../api/duties-api/duties-api";
import {useEffect, useState} from "react";
import DutyCardsEmpty from "./duty-cards-empty/duty-cards-empty";
import {useSearchParams} from "react-router-dom";
import {AxiosResponse} from "axios";
import DutyCardSkeleton from "./duty-card/duty-card-skeleton/duty-card-skeleton";

const showSkeletonMs = 500;
const skeletonsCardsAmount = 12;

const DutyCards = () => {
    const [duties, setDuties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchParams] = useSearchParams();

    const isFiltersSelected = !!searchParams.get('duty') && !!searchParams.get('expansion') && !!searchParams.get('sort');

    useEffect(() => {
        if (isFiltersSelected) {
            const startAPI = performance.now();
            const searchParamsData = _prepareSearchParamsData(searchParams);

            setLoading(true);

            getAllDutiesAPI(searchParamsData)
                .then((data: AxiosResponse<never[]>) => {
                    const endAPI = performance.now();
                    const durationAPI = endAPI - startAPI;

                    setDuties(data.data);
                    sessionStorage.removeItem('urlQuery');

                    if (durationAPI >= showSkeletonMs) {
                        setLoading(false);
                    } else {
                        setTimeout(setLoading, showSkeletonMs, false);
                    }
                })
        }
    }, [searchParams, isFiltersSelected]);

    const _prepareSearchParamsData = (searchParams: URLSearchParams) => {
        return {
            duty: searchParams.get('duty') || '',
            expansion: searchParams.get('expansion') || '',
            sort: searchParams.get('sort') || '',
            name: searchParams.get('name') || ''
        }
    }

    if (loading && isFiltersSelected) {
        return (
            <Grid container spacing={4} sx={{
                marginTop: '30px',
                padding: '0 70px 50px'
            }}>
                {[...Array(skeletonsCardsAmount)].map((e, i) => <DutyCardSkeleton key={`skeleton-${i}`} /> )}
            </Grid>
        )
    }

    return (
        <>
            {isFiltersSelected && duties.length ?
                (<Grid container spacing={4} sx={{
                    marginTop: '30px',
                    padding: '0 70px 50px'
                }}>
                    {duties.map((duty: Duty) =>
                        <Grid key={duty._id} item xs={6} md={4} lg={4} xl={3}>
                            <DutyCard
                                name={duty.name}
                                dutyType={searchParams.get('duty')}
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
                </Grid>) :
                (<DutyCardsEmpty isFiltersSelected={isFiltersSelected} />)
            }
        </>
    )
}

export default DutyCards;