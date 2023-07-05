'use client'

import styles from "../../../styles/components/main/main.module.scss";
import Filters from "./filters/filters";
import DutyCards from "./duty-cards/duty-cards";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {createTheme, ThemeProvider} from "@mui/material";
import addAPIInterceptors from "@/app/src/api/interceptors/response.interceptor";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    }
});

addAPIInterceptors();

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <ThemeProvider theme={darkTheme}>
                <main className={styles.main} id="main">
                    <Filters />
                    <DutyCards />
                </main>
            </ThemeProvider>
        )
    }
]);

const Main = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default Main;