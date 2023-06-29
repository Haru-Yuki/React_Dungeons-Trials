import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {SelectChangeEvent} from "@mui/material/Select";
import {DutiesFilterModel} from "../../../../models/filters.model";
import React, {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

const DutiesFilter = (props: {dutiesFilter: Array<DutiesFilterModel>}) => {
    const { dutiesFilter } = props;

    const [searchParams, setSearchParams] = useSearchParams();
    const dutyQuery = searchParams.get('duty');
    const [value, setValue] = useState(dutyQuery || '');
    console.count('Duties');

    useEffect(() => {
        handleDutyFilter(dutyQuery);
    },[!dutyQuery]);

    const handleChange = (event: SelectChangeEvent) => {
        handleDutyFilter(event.target.value);
    }

    const handleDutyFilter = (value: string) => {
        setValue(value || '');

        if (value) {
            searchParams.set('duty', value);
            setSearchParams(searchParams);
        }
    }

    return (
        <FormControl required sx={{ m: 1, minWidth: 180 }}>
            <InputLabel id="duty-select-label">Choose a Duty</InputLabel>
            <Select
                labelId="duty-select-label"
                id="duty-select"
                value={value}
                label="Choose a Duty"
                onChange={handleChange}
            >
                {dutiesFilter.map((duty) =>
                    <MenuItem key={duty.key} value={duty.value}>{duty.dutyType}</MenuItem>
                )};
            </Select>
        </FormControl>
    )
};

export default DutiesFilter;