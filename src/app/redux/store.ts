import {configureStore} from '@reduxjs/toolkit';

import filtersSlice from './reducers/filters/filters';

const store = configureStore({
    reducer: {
        filters: filtersSlice
    }
})

export default store;