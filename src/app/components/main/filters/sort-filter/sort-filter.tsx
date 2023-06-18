import React, {useEffect, useState} from "react";
import {SelectChangeEvent} from "@mui/material/Select";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {SortModel} from "../../../../models/filters.model";
import {useDispatch, useSelector} from "react-redux";
import {setSortFilter} from "../../../../redux/reducers/filters/filters";

const SortFilter = (props: {sortFilter: Array<SortModel>}) => {
    const { sortFilter } = props;

    const dispatch = useDispatch();
    const storeSortFilter = useSelector((state: any) => state.filters.sortFilter);
    const isDutySelected = useSelector((state: any) => !!state.filters.dutyFilter);
    const [value, setValue] = useState(storeSortFilter);

    useEffect(() => {
        setValue(storeSortFilter);
    }, [storeSortFilter]);

    const handleChange = (event: SelectChangeEvent) => {
        const value = event.target.value;

        setValue(value);
        saveSortFilter(value);
    }

    const saveSortFilter = (value: string) => {
        sessionStorage.setItem('sortFilter', value);
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