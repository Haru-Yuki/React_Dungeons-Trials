import {createSlice} from "@reduxjs/toolkit";

const toasterInitialState = {
    toaster: {
        type: 'success',
        message: '',
        close: false
    }
}

export const toasterSlice = createSlice({
    name: 'toaster',
    initialState: toasterInitialState,
    reducers: {
        setToaster(state, action) {
            state.toaster = action.payload;
        }
    }
});

const { actions, reducer } = toasterSlice;

export const { setToaster } = actions;

export default reducer;