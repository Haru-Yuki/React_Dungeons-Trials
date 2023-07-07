import {Alert} from "@mui/material";
import styles from '../../../../../styles/components/main/duty-cards/duty-cards-empty/duty-cards-empty.module.scss';

const DutyCardsEmpty = (props: {isFiltersSelected: boolean}) => {
    const {isFiltersSelected} = props;
    const message = !isFiltersSelected ? 'Please, choose a Duty type and Expansion' : 'No [duty] found';

    return (
        <section className={styles.dutyCardsEmpty}>
            <Alert icon={false} severity="warning" variant="filled" sx={{
                padding: '50px 100px',
                fontSize: '42px',
                justifyContent: 'center',
                color: 'white',
                borderColor: 'white',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                borderRadius: '10px'
            }}>
                {message}
            </Alert>
        </section>
    )
}

export default DutyCardsEmpty;