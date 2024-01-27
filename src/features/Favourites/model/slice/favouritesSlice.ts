import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {FavouriteSchema} from "../types/favourites";
import {Photo} from "../../../../entities/Users/model/types/photo";

const initialState: FavouriteSchema = {
    isLoading: false,
    items: [],
    error:'',
};

export const favouriteSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        addFavouritePhoto: (state, action: PayloadAction<Photo>) => {
            state.items?.push(action.payload)
        },
        deleteFavouritePhoto: (state, action: PayloadAction<string>) => {
            state.items = state.items?.filter(item =>
                item.id !== action.payload
            )
        },
    },
});

export const { actions: favouriteActions } = favouriteSlice;
export const { reducer: favouriteReducer } = favouriteSlice;
