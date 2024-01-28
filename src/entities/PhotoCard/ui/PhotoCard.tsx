import React, {memo, useState} from "react";
import cls from "./PhotoCard.module.scss";
import Modal from "../../../shared/ui/Modal/Modal";
import ModalPhoto from "../../../shared/ui/ModalPhoto/ModalPhoto";
import HoverPopup from "../../../shared/ui/HoverPopup/HoverPopup";
import FavouritesIcon from "../../../shared/ui/FavouritesIcon/FavouritesIcon";
import { Photo } from "../../Users/model/types/photo";

interface PhotoCardProps extends Photo {
    underTitle?: string;
}

export const PhotoCard = memo(((photo: PhotoCardProps) => {
    const [showModal, setShowModal] = useState<boolean>(false);

    const clickOnImage = () => {
        setShowModal(true);
    };

    const handleFavouriteButtonClick = (event: React.MouseEvent) => {
        event.stopPropagation();
    };

    return (
        <>
            <li className={cls.PhotoCard}>
                <button className={cls.button} onClick={() => clickOnImage()}>
                    <HoverPopup popupContent={photo.title}>
                        <div style={{position: "relative"}}>
                            <img src={photo.url} alt={photo.title}/>
                        </div>
                    </HoverPopup>
                    <div
                        className={cls.fav}
                        style={{
                            position: "absolute",
                            zIndex: 2,
                            right: 2,
                            top: 2,
                        }}
                        onClick={handleFavouriteButtonClick}
                    >
                        <FavouritesIcon
                            albumId={photo.albumId}
                            id={photo.id}
                            title={photo.title}
                            url={photo.url}
                        />
                    </div>
                </button>
                {photo.underTitle ? <p>{photo.underTitle}</p> : ""}
            </li>
            <Modal isActive={showModal} setIsActive={setShowModal}>
                <ModalPhoto urlPhoto={photo.url} titlePhoto={photo.title}/>
            </Modal>
        </>
    );
}));
