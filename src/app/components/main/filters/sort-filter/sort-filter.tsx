import React, {useEffect, useState} from "react";
import {SelectChangeEvent} from "@mui/material/Select";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {SortModel} from "../../../../models/filters.model";
import {useSearchParams} from "react-router-dom";

const SortFilter = (props: {sortFilter: Array<SortModel>}) => {
    const { sortFilter } = props;

    const [searchParams, setSearchParams] = useSearchParams();
    const sortQuery = searchParams.get('sort');
    const isExpansionSelected = !!searchParams.get('expansion');
    const [value, setValue] = useState(sortQuery || 'asc');

    useEffect(() => {
        if (isExpansionSelected) {
            handleSortFilter(sortQuery || 'asc');
        }
    },[isExpansionSelected]);

    const handleChange = (event: SelectChangeEvent) => {
        handleSortFilter(event.target.value);
    }

    const handleSortFilter = (value: string) => {
        setValue(value);

        searchParams.set('sort', value);
        setSearchParams(searchParams);
    }

    return (
        <FormControl sx={{ m: 1, minWidth: 180 }}>
            <InputLabel id="sort-label">Sort By: </InputLabel>
            <Select
                disabled={!isExpansionSelected}
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