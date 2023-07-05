import {Button} from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import {useSearchParams} from "react-router-dom";


const resetFilter = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const isDutySelected = !!searchParams.get('duty');

    const handleReset = () => {
        setSearchParams();
    }

    return (
        <Button disabled={!isDutySelected} onClick={handleReset} size="small" variant="outlined" endIcon={<ClearIcon />}>
            Clear filters
        </Button>
    )
}

export default resetFilter;