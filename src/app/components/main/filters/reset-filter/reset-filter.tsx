import {Button} from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import {resetAllFilters} from "../../../../redux/reducers/filters/filters";
import {useDispatch, useSelector} from "react-redux";


const resetFilter = () => {
    const dispatch = useDispatch();

    return (
        <Button onClick={() => dispatch(resetAllFilters())} size="small" variant="outlined" endIcon={<ClearIcon />}>
            Clear filters
        </Button>
    )
}

export default resetFilter;