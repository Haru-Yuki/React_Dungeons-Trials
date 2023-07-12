import DutiesFilter from "./duties-filter/duties-filter";
import {DutiesFilterData, ExpansionFilterData, SortFilterData} from "../../../data/filters/filters.data";
import ExpansionFilter from "./expansion-filter/expansion-filter";
import SortFilter from "./sort-filter/sort-filter";
import {Grid} from "@mui/material";
import ResetFilter from "./reset-filter/reset-filter";
import SearchFilter from "./search-filter/search-filter";
import FilterType from "@/app/src/components/main/filters/filter-type/filter-type";
import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

const allQuests = ExpansionFilterData.quests['Trials']
    .concat(ExpansionFilterData.quests['NormalRaids'])
    .concat(ExpansionFilterData.quests['AllianceRaids']);

const Filters = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const typeQuery = searchParams.get('type');
    const dutyQuery = searchParams.get('duty') || '';
    const filtersInitialState = {
        dutiesFilter: typeQuery === 'Duties' || '' ? DutiesFilterData.duties : DutiesFilterData.quests,
        expansionFilter: typeQuery === 'Duties' || '' ? ExpansionFilterData.duties : ExpansionFilterData.quests[dutyQuery] || allQuests
    }
    const [dutiesFilterData, setDutiesFilterData] = useState(filtersInitialState.dutiesFilter);
    const [expansionFilterData, setExpansionFilterData] = useState(filtersInitialState.expansionFilter);

    const dutyType = searchParams.get('type');

    useEffect(() => {
        switch (dutyType) {
            case 'Duties':
                setDutiesFilterData(DutiesFilterData.duties);
                setExpansionFilterData(ExpansionFilterData['duties']);
                break;
            case 'Quests':
                setDutiesFilterData(DutiesFilterData.quests);
                setExpansionFilterData(allQuests);
                break;
        }
    }, [dutyType]);

    useEffect(() => {
        const dutyQuery = searchParams.get('duty');

        if (dutyQuery) {
            switch (dutyType) {
                case 'Duties':
                    setExpansionFilterData(ExpansionFilterData.duties);
                    break;
                case 'Quests':
                    setExpansionFilterData(ExpansionFilterData.quests[dutyQuery]);
                    break;
            }
        }
    }, [searchParams, dutyType]);

    return (
        <Grid container sx={{
            justifyContent: 'space-around',
            alignItems: 'center',
            paddingTop: '0px',
            position: 'sticky',
            top: '10px',
            background: 'black',
            boxShadow: '0 5px 10px 20px black',
            zIndex: '1'
        }}>
            <FilterType />
            <DutiesFilter dutiesFilter={dutiesFilterData} />
            <ExpansionFilter expansionFilter={expansionFilterData} />
            <ResetFilter />
            {dutyType === 'Duties' ? (
                <SortFilter sortFilter={SortFilterData} />
            ) : null}
            <SearchFilter />
        </Grid>
    )
}

export default Filters;