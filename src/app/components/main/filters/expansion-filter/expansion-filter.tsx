import React, {useEffect, useState} from "react";
import {Tab, Tabs} from "@mui/material";
import {ExpansionFilterModel} from "../../../../models/filters.model";
import {useDispatch, useSelector} from "react-redux";
import {setExpansionFilter} from "../../../../redux/reducers/filters/filters";
import {useSearchParams} from "react-router-dom";

const ExpansionFilter = (props: {expansionFilter: Array<ExpansionFilterModel>}) => {
    const { expansionFilter } = props;

    const dispatch = useDispatch();
    const expansionQuery = useSearchParams()[0].get('expansion');
    const isDutySelected = useSelector((state: any) => !!state.filters.dutyFilter);
    const [value, setValue] = useState(expansionQuery || false);

    useEffect(() => {
        handleExpansionFilter(expansionQuery || false);
    }, [expansionQuery]);

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        handleExpansionFilter(newValue);
    }

    const handleExpansionFilter = (value: string | false) => {
        setValue(value);
        dispatch(setExpansionFilter(value));
    }

    return (
        <Tabs
            sx = {{
                maxWidth: 'calc(100vw - 650px)',
                color: 'white'
            }}
            value={value}
            onChange={handleChange}
            textColor="primary"
            indicatorColor="primary"
            variant="scrollable"
            scrollButtons="auto"
        >
        {expansionFilter.map((filter) =>
            <Tab disabled={!isDutySelected} key={filter.key} value={filter.value} label={filter.filterName} sx={{
                color: 'text.primary'
            }} />
        )};
        </Tabs>
    )
}

export default ExpansionFilter;