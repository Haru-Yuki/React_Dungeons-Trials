import {createRoot} from "react-dom/client";
import Header from "../header/header";
import '../../../styles/components/root/index.scss';
import {createTheme, ThemeProvider} from "@mui/material";
import Main from "../main/main";
import Footer from "../footer/footer";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AddAPIInterceptors from "../../api/interceptors/response.interceptor";
import Toaster from "../toaster/toaster";
import {Provider} from "react-redux";
import store from "../../redux/store";
import addAPIInterceptors from "../../api/interceptors/response.interceptor";

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
                    <Toaster />
                    <Header />
                    <Main />
                    <Footer />
                </ThemeProvider>
            </Provider>
        )
    }
]);

addAPIInterceptors();
createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);