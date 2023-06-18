import {createRoot} from "react-dom/client";
import Header from "../header/header";
import '../../../styles/components/root/index.scss';
import {createTheme, ThemeProvider} from "@mui/material";
import Main from "../main/main";
import Footer from "../footer/footer";
import {Provider} from "react-redux";
import store from "../../redux/store";

const darkTheme = createTheme({
    palette: {
            mode: 'dark',
    }
});

const Index = () => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={darkTheme}>
                <Header />
                <Main />
                <Footer />
            </ThemeProvider>
        </Provider>
    )
}

createRoot(document.getElementById('root')).render(<Index />);