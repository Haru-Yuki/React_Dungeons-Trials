import {Grid, InputAdornment, TextField} from "@mui/material";
import {ChangeEvent, useEffect, useState} from "react";
import SearchIcon from '@mui/icons-material/Search';
import {useDispatch, useSelector} from "react-redux";
import {setSearchFilter} from "../../../../redux/reducers/filters/filters";
import {useSearchParams} from "react-router-dom";

const SearchFilter = () => {
    const dispatch = useDispatch();
    const searchQuery = useSearchParams()[0].get('search');
    const [value, setValue] = useState(searchQuery || '');
    const storeFilters = useSelector((state: any) => state.filters);

    const isFiltersSelected = storeFilters.dutyFilter !== '' && storeFilters.expansionFilter;

    useEffect(() => {
        handleSearchFilter(searchQuery || '');
    }, [searchQuery]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        handleSearchFilter(event.target.value);
    }

    const handleSearchFilter = (value: string) => {
        setValue(value);
        dispatch(setSearchFilter(value));
    }

    return (
        <Grid container sx={{width: '100%', justifyContent: 'center', marginTop: '10px'}}>
            <TextField
                disabled={!isFiltersSelected}
                id="outlined-controlled"
                label="Search a duty"
                value={value}
                onChange={handleChange}
                InputProps={{
                    endAdornment: <InputAdornment position="end"><SearchIcon /></InputAdornment>,
                }}
                sx={{width: '20%'}}
            />
        </Grid>
    )
}

export default SearchFilter;