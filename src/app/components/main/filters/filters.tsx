import DutiesFilter from "./duties-filter/duties-filter";
import {DutiesFilterMock, ExpansionFilterMock, SortFilterMock} from "../../../mocks/mocks";
import ExpansionFilter from "./expansion-filter/expansion-filter";
import SortFilter from "./sort-filter/sort-filter";
import {Grid} from "@mui/material";
import ResetFilter from "./reset-filter/reset-filter";
import SearchFilter from "./search-filter/search-filter";

const Filters = () => {
    return (
        <>
            <Grid container sx={{
                justifyContent: 'space-around',
                alignItems: 'center',
                paddingTop: '0px',
                position: 'sticky',
                top: '10px',
                background: 'black',
                boxShadow: '0 5px 10px 20px black',
                zIndex: '1'
            }}>
                <DutiesFilter dutiesFilter={DutiesFilterMock} />
                <ExpansionFilter expansionFilter={ExpansionFilterMock} />
                <ResetFilter />
                <SortFilter sortFilter={SortFilterMock} />
                <SearchFilter />
            </Grid>
        </>
    )
}

export default Filters;