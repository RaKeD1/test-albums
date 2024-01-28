import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {FavouriteSchema} from "../types/favourites";
import {Photo} from "../../../../entities/Users/model/types/photo";

const initialState: FavouriteSchema = {
    isLoading: false,
    photos: [],
    error:'',
};

export const favouriteSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        addFavouritePhoto: (state, action: PayloadAction<Photo>) => {
            state.photos?.push(action.payload)
        },
        deleteFavouritePhoto: (state, action: PayloadAction<string>) => {
            state.photos = state.photos?.filter(photo =>
                photo.id !== action.payload
            )
        },
    },
});

export const { actions: favouriteActions } = favouriteSlice;
export const { reducer: favouriteReducer } = favouriteSlice;
