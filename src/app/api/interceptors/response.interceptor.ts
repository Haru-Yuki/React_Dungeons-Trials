import axios from 'axios';
import store from "../../redux/store";
import {setToaster} from "../../redux/reducers/toaster";

const addAPIInterceptors = () => {
    axios.interceptors.response.use(null,(error) => {
        console.log(error);
        store.dispatch(setToaster({
            type: 'error',
            message: error.message
        }));
    });
}

export default addAPIInterceptors;
