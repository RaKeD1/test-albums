import React, {FC, useState} from "react";
import cl from "./Dropdown.module.scss";
import {User} from "../../../entities/Users";
import {useAppDispatch} from "../../lib/hooks/useAppDispatch";
import {fetchAlbumsByUserId} from "../../../entities/Users/model/services/fetchAlbumsByUserId/fetchAlbumsByUserId";
import CloseIcon from "../../assets/icons/DropdownIcon/DropdownIcon";
import AlbumList from "../AlbumList";


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
                    <p className={cl.text}>{user.username} </p>
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

