import { persistReducer } from 'redux-persist';
import { createSlice } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import { register, logIn, logOut, refreshUser } from './operations';


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
        builder.addCase(register.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        }).addCase(register.rejected, (state, action) => {
            console.log(state);
        }).addCase(logIn.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        }).addCase(logIn.rejected, (state, action) => {
            console.log('error')
        }).addCase(logOut.fulfilled, (state) => {
            state.user = {}
            state.token = ''
            state.isLoggedIn = false;
        }).addCase(logOut.rejected, (state, action) => {
            console.log('error')
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

