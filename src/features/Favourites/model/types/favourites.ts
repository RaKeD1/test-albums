import {Photo} from "../../../../entities/Users/model/types/photo";

export interface FavouriteSchema {
    photos?:Photo[];
    isLoading: boolean;
    error?: string;
}