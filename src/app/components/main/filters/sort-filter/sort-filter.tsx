import React, {useState} from "react";
import {SelectChangeEvent} from "@mui/material/Select";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {SortModel} from "../../../../models/filters.model";

const SortFilter = (props: {sortFilter: Array<SortModel>}) => {
    const [value, setValue] = useState(props.sortFilter[0].value);
    const handleChange = (event: SelectChangeEvent) => {
        setValue(event.target.value);
    };

    return (
        <FormControl sx={{ m: 1, minWidth: 180 }}>
            <InputLabel id="sort-label">Sort By: </InputLabel>
            <Select
                labelId="sort-label"
                id="sort"
                value={value}
                label="Sort By: "
                onChange={handleChange}
            >
                {props.sortFilter.map((sortOption) =>
                    <MenuItem key={sortOption.key} value={sortOption.value}>{sortOption.sortOption}</MenuItem>
                )};
            </Select>
        </FormControl>
    )
};

export default SortFilter;