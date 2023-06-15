import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {SelectChangeEvent} from "@mui/material/Select";
import {DutiesFilterModel} from "../../../../models/filters.model";
import React, {useState} from "react";

const DutiesFilter = (props: {dutiesFilter: Array<DutiesFilterModel>}) => {
    const { dutiesFilter } = props;
    const [value, setValue] = useState(dutiesFilter[0].value);
    const handleChange = (event: SelectChangeEvent) => {
        setValue(event.target.value);
    };

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