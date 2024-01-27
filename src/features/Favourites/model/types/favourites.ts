import {Photo} from "../../../../entities/Users/model/types/photo";

export interface FavouriteSchema {
    items?:Photo[];
    isLoading: boolean;
    error?: string;
}