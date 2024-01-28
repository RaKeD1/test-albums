import { createSelector } from '@reduxjs/toolkit';

import {getFavourites} from "../getFavourites/getFavourites";
import {FavouriteSchema} from "../../types/favourites";

export const getFavouritesData = createSelector(
    getFavourites,
    (favourites: FavouriteSchema) => favourites.photos,
);
