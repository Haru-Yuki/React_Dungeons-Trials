import {Alert, Typography} from "@mui/material";
import styles from '../../../../../styles/components/main/duty-cards/duty-cards-empty/duty-cards-empty.module.scss';

const DutyCardsEmpty = () => {
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
                Please, choose a Duty type and Expansion
            </Alert>
        </section>
    )
}

export default DutyCardsEmpty;