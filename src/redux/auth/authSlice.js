import { persistReducer } from 'redux-persist';
import { createSlice } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import { register } from './operations';


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {
            email: null,
            name: null,
        },
        token: null,
        isLoggedIn: false,
        isRefreshing: false
    },
    extraReducers: (builder) => {
        builder.addCase(register.pending, (state, action) => {
            state
        }).addCase(register.fulfilled, (state, action) => {
            state
        }).addCase(register.rejected, (state, action) => {
            state
        })
    }
})


export const autgReducer = authSlice.reducer;

const authPersisConfig = {
    key: 'auth',
    storage,
    whitelist: ['token']
}
export const persistedAuthReducer = persistReducer(authPersisConfig, autgReducer);

