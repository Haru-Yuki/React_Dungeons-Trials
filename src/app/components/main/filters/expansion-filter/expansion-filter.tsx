import React, {useEffect, useState} from "react";
import {Tab, Tabs} from "@mui/material";
import {ExpansionFilterModel} from "../../../../models/filters.model";
import {useSearchParams} from "react-router-dom";

const ExpansionFilter = (props: {expansionFilter: Array<ExpansionFilterModel>}) => {
    const { expansionFilter } = props;

    const [searchParams, setSearchParams] = useSearchParams();
    const expansionQuery = searchParams.get('expansion');
    const isDutySelected = !!searchParams.get('duty');
    const [value, setValue] = useState(expansionQuery || false);

    useEffect(() => {
        handleExpansionFilter(expansionQuery);
    }, [!expansionQuery]);

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        handleExpansionFilter(newValue);
    }

    const handleExpansionFilter = (value: string) => {
        setValue(value || false);

        if (value) {
            searchParams.set('expansion', value);
            setSearchParams(searchParams);
        }
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