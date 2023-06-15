import {createRoot} from "react-dom/client";
import Header from "../header/header";
import '../../../styles/components/root/index.scss';
import {createTheme, ThemeProvider} from "@mui/material";
import Main from "../main/main";
import Footer from "../footer/footer";

const darkTheme = createTheme({
    palette: {
            mode: 'dark',
    }
});
const Index = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <Header />
            <Main />
            <Footer />
        </ThemeProvider>
    )
}

const root = createRoot(document.getElementById('root'));
root.render(<Index />);