import {DutyCardsMock} from "../../../mocks/mocks";
import Duty from "../../../models/duty.model";
import {Grid} from "@mui/material";
import DutyCard from "./duty-card/duty-card";

const DutyCards = () => {
    return (
        <Grid container spacing={4} sx={{
            marginTop: '30px',
            padding: '0 70px 50px'
        }}>
            {DutyCardsMock.map((dutyCard: Duty) =>
                <Grid key={dutyCard.dutyKey} item xs={6} md={4} lg={4} xl={3}>
                    <DutyCard
                        dutyType={dutyCard.dutyType}
                        name={dutyCard.name}
                        imageLink={dutyCard.imageLink}
                        patchName={dutyCard.patchName}
                        level={dutyCard.level}
                        description={dutyCard.description}
                        completed={dutyCard.completed}
                        favourite={dutyCard.favourite}
                    />
                </Grid>
            )}
        </Grid>
    )
}

export default DutyCards;