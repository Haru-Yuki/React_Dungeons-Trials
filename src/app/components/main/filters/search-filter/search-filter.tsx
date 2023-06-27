import {Grid, InputAdornment, TextField} from "@mui/material";
import {ChangeEvent, useEffect, useState} from "react";
import SearchIcon from '@mui/icons-material/Search';
import {useSearchParams} from "react-router-dom";

const SearchFilter = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get('search');
    const [value, setValue] = useState(searchQuery || '');

    const [timer, setTimer] = useState(null);

    const isFiltersSelected = searchParams.get('duty') && searchParams.get('expansion') && searchParams.get('sort');

    useEffect(() => {
        handleSearchFilter(value);
    }, [value]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        handleSearchFilter(event.target.value);
    }

    const handleSearchFilter = (value: string) => {
        setValue(value);

        clearTimeout(timer);

        const timerId = setTimeout(() => {
            if (value) {
                searchParams.set('name', value);
            } else {
                searchParams.delete('name');
            }
            setSearchParams(searchParams);
        }, 1000);

        setTimer(timerId);
    }

    return (
        <Grid container sx={{width: '100%', justifyContent: 'center', marginTop: '10px'}}>
            <TextField
                disabled={!isFiltersSelected}
                id="outlined-controlled"
                label="Enter duty name"
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