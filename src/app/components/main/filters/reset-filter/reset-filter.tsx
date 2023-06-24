import {Button} from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import {resetAllFilters} from "../../../../redux/reducers/filters/filters";
import {useDispatch, useSelector} from "react-redux";
import {SESSION_STORAGE_KEYS} from "../../../../constants/constants";
import {useSearchParams} from "react-router-dom";


const resetFilter = () => {
    const dispatch = useDispatch();
    const isDutySelected = useSelector((state: any) => !!state.filters.dutyFilter);
    const [searchParams, setSearchParams] = useSearchParams();

    const handleReset = () => {
        setSearchParams();
        dispatch(resetAllFilters());
    }

    return (
        <Button disabled={!isDutySelected} onClick={handleReset} size="small" variant="outlined" endIcon={<ClearIcon />}>
            Clear filters
        </Button>
    )
}

export default resetFilter;