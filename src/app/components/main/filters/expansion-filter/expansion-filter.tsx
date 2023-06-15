import React, {useState} from "react";
import {Tab, Tabs} from "@mui/material";
import {ExpansionFilterModel} from "../../../../models/filters.model";

const ExpansionFilter = (props: {expansionFilter: Array<ExpansionFilterModel>}) => {
    const { expansionFilter } = props;
    const [value, setValue] = useState(props.expansionFilter[0].value);
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Tabs
            value={value}
            onChange={handleChange}
            textColor="primary"
            indicatorColor="primary"
        >
        {expansionFilter.map((filter) =>
            <Tab key={filter.key} value={filter.value} label={filter.filterName} sx={{
                color: 'text.primary'
            }} />
        )};
        </Tabs>
    )
}

export default ExpansionFilter;