import {RouteProps} from "react-router-dom";
import {CatalogPage} from "../../../pages/CatalogPage";
import {FavouritePage} from "../../../pages/FavouritePage";


export enum AppRoutes {
    CATALOG = 'catalog',
    FAVOURITES = 'favourites',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.CATALOG]: '/',
    [AppRoutes.FAVOURITES]: '/favourites'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.CATALOG]: {
        path: RoutePath.catalog,
        element: <CatalogPage/>
    },
    [AppRoutes.FAVOURITES]: {
        path: RoutePath.favourites,
        element: <FavouritePage/>
    }
}