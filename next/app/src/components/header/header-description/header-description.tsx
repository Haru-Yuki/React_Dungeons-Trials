import styles from '../../../../styles/components/header/header-description/header-description.module.scss';

const HeaderDescription = () => {
    return (
        <div className={styles.headerDescription}>
            <p className={styles.headerDescriptionParagraph}>
                This tool will help you to track dungeons, trials and raids progress in Final Fantasy XIV
            </p>
        </div>
    )
}

export default HeaderDescription;