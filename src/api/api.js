import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://65d8a747c96fbb24c1bc068a.mockapi.io'

export const fetchContacts = createAsyncThunk('contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/contacts");
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }

)

export const deleteContact = createAsyncThunk('contacts/deleteContact',
    async (contactID, thunkAPI) => {
        try {
            console.log('eeee');
            const response = await axios.delete(`/contacts/${contactID}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }

)


export const addContact = createAsyncThunk('contacts/addContact',
    async (contact, thunkAPI) => {
        try {
            const response = await axios.post("/contacts", contact);
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)





