import React, {useEffect, useState} from "react";
import {SelectChangeEvent} from "@mui/material/Select";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {SortModel} from "../../../../models/filters.model";
import {useDispatch, useSelector} from "react-redux";
import {setSortFilter} from "../../../../redux/reducers/filters/filters";
import {useSearchParams} from "react-router-dom";

const SortFilter = (props: {sortFilter: Array<SortModel>}) => {
    const { sortFilter } = props;

    const dispatch = useDispatch();
    const sortQuery = useSearchParams()[0].get('sort');
    const isDutySelected = useSelector((state: any) => !!state.filters.dutyFilter);
    const [value, setValue] = useState(sortQuery || 'asc');

    useEffect(() => {
        handleSortFilter(sortQuery || 'asc');
    },[sortQuery]);

    const handleChange = (event: SelectChangeEvent) => {
        handleSortFilter(event.target.value);
    }

    const handleSortFilter = (value: string) => {
        setValue(value);
        dispatch(setSortFilter(value));
    }

    return (
        <FormControl sx={{ m: 1, minWidth: 180 }}>
            <InputLabel id="sort-label">Sort By: </InputLabel>
            <Select
                disabled={!isDutySelected}
                labelId="sort-label"
                id="sort"
                value={value}
                label="Sort By: "
                onChange={handleChange}
            >
                {sortFilter.map((sortOption) =>
                    <MenuItem key={sortOption.key} value={sortOption.value}>{sortOption.sortOption}</MenuItem>
                )};
            </Select>
        </FormControl>
    )
};

export default SortFilter;