import {FavouriteSchema} from "../../../../features/Favourites";
import {UserSchema} from "../../../../entities/Users";

export interface StateSchema {
    favourites: FavouriteSchema;
    users: UserSchema;
}
