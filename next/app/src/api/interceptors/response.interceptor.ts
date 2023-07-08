import axios from 'axios';
import store from "../../redux/store";
import {setToaster} from "../../redux/reducers/toaster";

const addAPIInterceptors = () => {
    axios.interceptors.response.use((data) => {
        store.dispatch(setToaster({
            close: true
        }));

        return Promise.resolve(data);
    },(error) => {
        let errorMessage;

        switch (error.response.status) {
            case 422:
                errorMessage = `Error ${error.response.status}: ${error.response.data.message || error.message}.
                Please check query params in url.`
        }

        store.dispatch(setToaster({
            type: 'error',
            message: errorMessage,
            close: false
        }));

        return Promise.reject(error);
    });
}

export default addAPIInterceptors;
