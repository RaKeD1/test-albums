import cls from './Album.module.scss'
import {FC} from "react";
import {AlbumSchema} from "../../../entities/Users/model/types/album";

interface AlbumProps extends AlbumSchema{

}

export const Album:FC <AlbumProps>= () => {
    return (
        <div className={cls.Album}>

        </div>
    );
};

export default Album;