import React from "react";
import styles from './index.module.scss';
import {createRoot} from "react-dom/client";

const kotik = require('./media/kotik.jpg').default;

const Index = () => {
    return (
        <>
            <div className={styles.test}>
                Hello, World!
            </div>
            <img alt="kotik" className={styles.kotik} src={kotik} />
        </>
    )
}

const root = createRoot(document.getElementById('root'));
root.render(<Index />);