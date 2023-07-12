import {Grid, InputAdornment, TextField} from "@mui/material";
import {ChangeEvent, useEffect, useState} from "react";
import SearchIcon from '@mui/icons-material/Search';
import {useSearchParams} from "react-router-dom";

const SearchFilter = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get('name');
    const typeQuery = searchParams.get('type');
    const [value, setValue] = useState(searchQuery || '');
    const [timer, setTimer] = useState(0);

    const isFiltersDutySelected = !!searchParams.get('duty') && !!searchParams.get('expansion') && !!searchParams.get('sort');
    const isFiltersQuestSelected = !!searchParams.get('duty') && !!searchParams.get('quest');

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
                searchParams.set('name', value.trim());
            } else {
                searchParams.delete('name');
            }
            setSearchParams(searchParams);
        }, 1000);

        // @ts-ignore
        setTimer(timerId);
    }

    return (
        <Grid container sx={{width: '100%', justifyContent: 'center', marginTop: '10px'}}>
            <TextField
                disabled={!isFiltersDutySelected && !isFiltersQuestSelected}
                id="search"
                label="Enter duty name"
                value={value}
                onChange={handleChange}
                InputProps={{
                    endAdornment: <InputAdornment position="end"><SearchIcon /></InputAdornment>,
                }}
                sx={{width: '25%'}}
            />
        </Grid>
    )
}

export default SearchFilter;