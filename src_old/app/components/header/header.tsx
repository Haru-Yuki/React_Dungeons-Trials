import HeaderDescription from "./header-description/header-description";
import styles from '../../../styles/components/header/header.module.scss'
import HeaderTitle from "./header-title/header-title";
import {Grid} from "@mui/material";

const Header = () => {
    return (
        <header className={styles.header}>
            <Grid container sx={{
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap'
            }}>
                <HeaderTitle />
                <HeaderDescription />
            </Grid>
        </header>
    )
}

export default Header;