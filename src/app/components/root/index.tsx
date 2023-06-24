import {createRoot} from "react-dom/client";
import Header from "../header/header";
import '../../../styles/components/root/index.scss';
import {createTheme, ThemeProvider} from "@mui/material";
import Main from "../main/main";
import Footer from "../footer/footer";
import {Provider} from "react-redux";
import store from "../../redux/store";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const darkTheme = createTheme({
    palette: {
            mode: 'dark',
    }
});

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <Provider store={store}>
                <ThemeProvider theme={darkTheme}>
                    <Header />
                    <Main />
                    <Footer />
                </ThemeProvider>
            </Provider>
        )
    }
]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);