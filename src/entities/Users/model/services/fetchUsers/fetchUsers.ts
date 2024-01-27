import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {User} from "../../types/user";

export const fetchUsers = createAsyncThunk<User[],void, { rejectValue: string }>(
    'users/fetchUsers',
    async ( _,thunkAPI) => {
        try {
            const response = await axios.get<User[]>('http://localhost:3000/users', );

            if (!response) {
                throw new Error();
            }
            console.log("Пользователи: ",response)

            return response.data;
        } catch (e) {
            console.error(e);
            return thunkAPI.rejectWithValue('error');
        }
    },
);
