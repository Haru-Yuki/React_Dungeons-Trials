import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {SelectChangeEvent} from "@mui/material/Select";
import {DutiesFilterModel} from "../../../../models/filters.model";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setDutiesFilter} from "../../../../redux/reducers/filters/filters";

const DutiesFilter = (props: {dutiesFilter: Array<DutiesFilterModel>}) => {
    const { dutiesFilter } = props;

    const dispatch = useDispatch();
    const storeDutiesFilter = useSelector((state: any) => state.filters.dutyFilter);
    const isReset = useSelector((state: any) => state.filters.isReset);
    const [value, setValue] = useState(storeDutiesFilter);

    useEffect(() => {
        if (isReset) {
            setValue(storeDutiesFilter);
        }
    }, [isReset, storeDutiesFilter]);

    const handleChange = (event: SelectChangeEvent) => {
        const value = event.target.value;

        setValue(value);
        saveDutiesFilter(value);
    }

    const saveDutiesFilter = (value: string) => {
        sessionStorage.setItem('dutiesFilter', value);
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