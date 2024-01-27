import React, {FC, useState} from "react";
import {Album} from "../../entities/Users/model/types/album";
import {useAppDispatch} from "../lib/hooks/useAppDispatch";
import {fetchPhotosByAlbumId} from "../../entities/Users/model/services/fetchPhotosByAlbumId/fetchPhotosByAlbumId";
import cl from "./Dropdown/Dropdown.module.scss";
import CloseIcon from "../assets/icons/DropdownIcon/DropdownIcon";
import {PhotoCard} from "../../entities/PhotoCard";

const AlbumList:FC<{album:Album}> = ({album}) => {
    const [isOpenAlbum, setIsOpenAlbum] = useState(false);
    const dispatch = useAppDispatch()
    const toggleList = (id:string) => {
        if  (album.albumId === id) {
            dispatch(fetchPhotosByAlbumId({albumId:id,userId:album.userId}))
        }
        setIsOpenAlbum(!isOpenAlbum)
    }
    return (
        <li>
            <button
                className={cl.button}
                onClick={() => toggleList(album.albumId)}
            >
                <CloseIcon isOpen={isOpenAlbum}/>
                <p className={cl.text}>{album.title}</p>
            </button>
            {isOpenAlbum && album && (
                <ul className={cl.cards}>
                    {album.photos?.map((photo) => (

                            <PhotoCard albumId={photo.albumId} id={photo.id} title={photo.title} url={photo.url}/>
                    ))}
                </ul>
            )}
        </li>
    )
}
export default AlbumList;