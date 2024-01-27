import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {Album} from "../../types/album";


interface FetchAlbumsByUserIdProps {
   userId:string;
}

export const fetchAlbumsByUserId = createAsyncThunk<Album[], FetchAlbumsByUserIdProps, { rejectValue: string }>(
    'albums/fetchUlbums',
    async (data, thunkAPI) => {
        try {
            const {userId} = data;
            const response = await axios.get<Album[]>(`http://localhost:3000/albums/${userId}`);

            if (!response.data) {
                throw new Error();
            }
            console.log("Альбомы: ",response.data)

            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('error');
        }
    },
);