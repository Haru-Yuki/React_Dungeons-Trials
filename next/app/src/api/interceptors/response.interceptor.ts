import axios from 'axios';
import store from "../../redux/store";
import {setToaster} from "../../redux/reducers/toaster";

const addAPIInterceptors = () => {
    axios.interceptors.response.use(undefined,(error) => {
        store.dispatch(setToaster({
            type: 'error',
            message: error.message
        }));
    });
}

export default addAPIInterceptors;
