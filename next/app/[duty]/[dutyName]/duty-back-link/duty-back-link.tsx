'use client'

import Link from "next/link";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useRouter} from "next/navigation";
import styles from "../../../styles/app/[duty]/[dutyName]/duty-back-link.module.scss";

const DutyBackLink = () => {
    const router = useRouter();

    return (
        <div className={styles.dutyBackLinkWrapper} onClick={() => router.back()}>
            <ArrowBackIcon className={styles.dutyBackLinkIcon} />
            <span className={styles.dutyBackLinkText}>Back to Home Page</span>
        </div>
    )
}

export default DutyBackLink;