import {configureStore} from '@reduxjs/toolkit';

import toasterSlice from './reducers/toaster';

const store = configureStore({
    reducer: {
        toaster: toasterSlice
    }
})

export default store;