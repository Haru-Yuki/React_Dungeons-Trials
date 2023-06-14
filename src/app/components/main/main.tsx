import ExpansionFilter from "./filters/expansion-filter/expansion-filter";
import styles from "../../../styles/components/main/main.module.scss";
import {ExpansionFilterMock, DutiesFilterMock, SortFilterMock, DutyCardsMock} from "../../mocks/mocks";
import DutiesFilter from "./filters/duties-filter/duties-filter";
import SortFilter from "./filters/sort-filter/sort-filter";
import {Grid} from "@mui/material";
import Duty from "../../models/duty.model";
import DutyCard from "./duty-card/duty-card";

const Main = () => {
    return (
        <main className={styles.main}>
            <Grid container sx={{
                justifyContent: 'space-around',
                alignItems: 'center',
                paddingTop: '0px',
                position: 'sticky',
                top: '10px',
                background: 'black',
                boxShadow: '0 5px 10px 20px black',
                zIndex: '10'
            }}>
                <DutiesFilter dutiesFilter={DutiesFilterMock} />
                <ExpansionFilter expansionFilter={ExpansionFilterMock} />
                <SortFilter sortFilter={SortFilterMock} />
            </Grid>
            <Grid container spacing={4} sx={{
                marginTop: '30px',
                padding: '0 70px 50px'
            }}>
                {DutyCardsMock.map((dutyCard: Duty) =>
                    <Grid key={dutyCard.dutyKey} item xs={6} md={4} lg={4}>
                        <DutyCard
                            dutyType={dutyCard.dutyType}
                            name={dutyCard.name}
                            imageLink={dutyCard.imageLink}
                            patchName={dutyCard.patchName}
                            level={dutyCard.level}
                            description={dutyCard.description}
                        />
                    </Grid>
                )}
            </Grid>
        </main>
    )
}

export default Main;