import {Button} from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import {resetAllFilters} from "../../../../redux/reducers/filters/filters";
import {useDispatch, useSelector} from "react-redux";
import {SESSION_STORAGE_KEYS} from "../../../../constants/constants";


const resetFilter = () => {
    const dispatch = useDispatch();
    const isDutySelected = useSelector((state: any) => !!state.filters.dutyFilter);

    const handleReset = () => {
        resetFiltersStorage();
        dispatch(resetAllFilters());
    }

    const resetFiltersStorage = () => {
        sessionStorage.removeItem(SESSION_STORAGE_KEYS.FILTERS.DUTIES_FILTER);
        sessionStorage.removeItem(SESSION_STORAGE_KEYS.FILTERS.EXPANSION_FILTER);
        sessionStorage.removeItem(SESSION_STORAGE_KEYS.FILTERS.SORT_FILTER);
    }

    return (
        <Button disabled={!isDutySelected} onClick={handleReset} size="small" variant="outlined" endIcon={<ClearIcon />}>
            Clear filters
        </Button>
    )
}

export default resetFilter;