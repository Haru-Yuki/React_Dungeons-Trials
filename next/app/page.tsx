import Toaster from "../app/src/components/toaster/toaster";
import Header from "../app/src/components/header/header";
import Main from "../app/src/components/main/main";
import Footer from "../app/src/components/footer/footer";
import ReduxProvider from "@/app/src/redux/provider";
import addAPIInterceptors from "@/app/src/api/interceptors/response.interceptor";

const App = () => {
    return (
        <ReduxProvider>
            <Toaster />
            <Header />
            <Main />
            <Footer />
        </ReduxProvider>
    )
}

export default App;