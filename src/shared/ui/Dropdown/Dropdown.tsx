import React, {FC, useState} from "react";
import cl from "./Dropdown.module.scss";
import {User} from "../../../entities/Users";
import {useAppDispatch} from "../../lib/hooks/useAppDispatch";
import {fetchAlbumsByUserId} from "../../../entities/Users/model/services/fetchAlbumsByUserId/fetchAlbumsByUserId";
import CloseIcon from "../CloseIcon/CloseIcon";
import album from "../../../widgets/Album/ui/Album";
import {Album} from "../../../entities/Users/model/types/album";


const AlbumList:FC<{album:Album}> = ({album}) => {
    const [isOpenAlbum, setIsOpenAlbum] = useState(false);
    const toggleList = (id:string) => {
        if  (album.albumId === id) {
        }
        console.log(333);
        setIsOpenAlbum(!isOpenAlbum)
    }
    return (
        <li>
            <button
                className={cl.button}
                onClick={() => toggleList(album.albumId)}
            >
                <CloseIcon isOpen={isOpenAlbum}/>
                {album.title}
            </button>
        </li>
    )
}
export const Dropdown:FC<{ user: User }> = ({ user }) => {
    const dispatch = useAppDispatch()
    const [isOpen, setIsOpen] = useState(false);

    const toggleList = (id:string) => {
        setIsOpen(!isOpen);

        if (!user.albums) {
            dispatch(fetchAlbumsByUserId({userId:id}))
        }
    };

    return (
        <div key={user.id} className={cl.container}>
                <button
                    type="button"
                    className={cl.button}
                    onClick={()=>toggleList(user.id)}
                >
                    <CloseIcon isOpen={isOpen}/>
                    {user.username}
                </button>

            {isOpen && user && (
                <ul>
                    {user.albums?.map((album) => (
                        <AlbumList key={album.albumId} album={album} />
                    ))}
                </ul>
            )}
        </div>
    );
};

