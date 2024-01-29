import React from "react";
import {useSelector} from "react-redux";
import  cls from './FavouritePage.module.scss'
import {getFavouritesData} from "../../../features/Favourites/model/selectors/getFavouritesData/getFavouritesData";
import icon from '../../../shared/assets/svgImages/notFoundFavourites.svg'
import {PhotoCard} from "../../../entities/PhotoCard";

const FavouritePage = () => {

  const favourites = useSelector(getFavouritesData)
  return (
      <div className={cls.FavouritePage}>
        {favourites?.length
            ?
            <div className={cls.items}>
              {favourites.map(photo => {
                    return  <PhotoCard key={photo.id} albumId={photo.albumId} id={photo.id} title={photo.title} url={photo.url} underTitle={photo.title}/>
                  })}
            </div>
            :
            <div className={cls.NotFound}>
                <img src={icon as unknown as string} alt="Not Found" />
                <h3>
                    Список избранного пуст
                </h3>
                <p>
                    Добавляйте изображения, нажимая на звездочки
                </p>
            </div>
          }
      </div>);
};

export default FavouritePage;
