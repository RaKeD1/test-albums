import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { favouriteReducer } from '../../../../features/Favourites';
import { StateSchema } from './StateSchema';
import {userReducer} from "../../../../entities/Users";

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        favourites: favouriteReducer,
        users: userReducer,
    };

    return configureStore<StateSchema>({
        reducer: rootReducers,
        preloadedState: initialState,
    });
}
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];