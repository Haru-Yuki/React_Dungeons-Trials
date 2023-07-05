import styles from '../../../styles/components/header/header.module.scss';
import HeaderDescription from "./header-description/header-description";
import HeaderTitle from "./header-title/header-title";
import {useState} from "react";

const Header = () => {
    return (
        <header className={styles.header}>
            <HeaderTitle />
            <HeaderDescription />
        </header>
    )
}

export default Header;