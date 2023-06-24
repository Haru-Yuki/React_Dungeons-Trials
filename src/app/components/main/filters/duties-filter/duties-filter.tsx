import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {SelectChangeEvent} from "@mui/material/Select";
import {DutiesFilterModel} from "../../../../models/filters.model";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setDutiesFilter} from "../../../../redux/reducers/filters/filters";
import {useSearchParams} from "react-router-dom";

const DutiesFilter = (props: {dutiesFilter: Array<DutiesFilterModel>}) => {
    const { dutiesFilter } = props;

    const dispatch = useDispatch();
    const dutyQuery = useSearchParams()[0].get('duty');
    const [value, setValue] = useState(dutyQuery || '');

    useEffect(() => {
        handleDutyFilter(dutyQuery || '');
    },[dutyQuery]);

    const handleChange = (event: SelectChangeEvent) => {
        handleDutyFilter(event.target.value);
    }

    const handleDutyFilter = (value: string) => {
        setValue(value);
        dispatch(setDutiesFilter(value));
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