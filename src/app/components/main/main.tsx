import styles from "../../../styles/components/main/main.module.scss";
import Filters from "./filters/filters";
import DutyCards from "./duty-cards/duty-cards";

const Main = () => {
    return (
        <main className={styles.main}>
            <Filters />
            <DutyCards />
        </main>
    )
}

export default Main;