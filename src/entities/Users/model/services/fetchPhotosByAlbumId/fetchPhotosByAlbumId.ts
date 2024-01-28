import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {Photo} from "../../types/photo";


interface FetchPhotosByAlbumIdProps {
    albumId:string;
    userId:string;
}
export interface FetchPhotosByAlbumIdResponse {
    photos:Photo[];
    userId:string;
}


export const fetchPhotosByAlbumId = createAsyncThunk<FetchPhotosByAlbumIdResponse, FetchPhotosByAlbumIdProps, { rejectValue: string }>(
    'photos/fetchPhotos',
    async (data, thunkAPI) => {
        try {
            const {albumId,userId} = data;
            const response = await axios.get<Photo[]>(`http://localhost:3000/photos/${albumId}`);

            if (!response.data) {
                throw new Error();
            }

            return {photos:response.data,userId:userId};
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('error');
        }
    },
);
