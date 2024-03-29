
import cls from './FavouritesIcon.module.scss'
import {useAppDispatch} from "../../lib/hooks/useAppDispatch";
import {favouriteActions} from "../../../features/Favourites/model/slice/favouritesSlice";
import {Photo} from "../../../entities/Users/model/types/photo";
import {useSelector} from "react-redux";
import {getFavouritesData} from "../../../features/Favourites/model/selectors/getFavouritesData/getFavouritesData";
import {FC, memo, useEffect, useState} from "react";

interface FavouritesIconProps extends Photo{
    // onClick:(event: React.MouseEvent<HTMLDivElement>) => void;
}

export const FavouritesIcon: FC<FavouritesIconProps> = memo(((photo) => {
    const dispatch = useAppDispatch();
    const photos = useSelector(getFavouritesData);
    const [inFavourite, setInFavourite] = useState<boolean>(false);

    const addToFavourites = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();

        const item = photos?.find(item => item.id === photo.id);
        if (item) {
            dispatch(favouriteActions.deleteFavouritePhoto(photo.id));
        } else {
            dispatch(favouriteActions.addFavouritePhoto(photo));
        }
    };

    useEffect(() => {
        const item = photos?.find(item => item.id === photo.id);
        setInFavourite(!!item);
    }, [photos]);

    return (
        <div className={cls.FavouritesIcon} onClick={addToFavourites}>
            <svg
                className={cls.icon}
                width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M8.0868 1.04641C8.43933 0.256421 9.56067 0.25642 9.9132 1.0464L11.9048 5.50932L16.767 6.02193C17.628 6.1127 17.9746 7.1804 17.3311 7.75964L13.7 11.0284L14.7145 15.8063C14.8943 16.6527 13.9869 17.3124 13.2371 16.8805L9 14.4393L4.76287 16.8805C4.01306 17.3124 3.10573 16.6527 3.28547 15.8063L4.3 11.0284L0.668853 7.75964C0.0253845 7.1804 0.372042 6.1127 1.23305 6.02193L6.09524 5.50932L8.0868 1.04641Z"
                    fill={inFavourite ? '#FFAF37' : 'grey'} />
            </svg>
        </div>
    );
}));


export default FavouritesIcon;