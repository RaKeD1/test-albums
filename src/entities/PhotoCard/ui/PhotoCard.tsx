
import cls from './PhotoCard.module.scss'
import {Photo} from "../../Users/model/types/photo";
import Modal from "../../../shared/ui/Modal/Modal";
import {useState} from "react";
import ModalPhoto from "../../../shared/ui/ModalPhoto/ModalPhoto";
import HoverPopup from "../../../shared/ui/HoverPopup/HoverPopup";


export const PhotoCard = (photo:Photo) => {

    const [showModal, setShowModal] = useState<boolean>(false);


    const clickOnImage = (id:string) => {
        setShowModal(true);
    }
    return (
        <>
            <li className={cls.PhotoCard}>
                <HoverPopup popupContent={photo.title}>
                <button className={cls.button} onClick={() => clickOnImage(photo.id)}>
                    <img src={photo.url} alt={photo.title}/>
                </button>
                </HoverPopup>
            </li>
            <Modal isActive={showModal} setIsActive={setShowModal}>
                <ModalPhoto urlPhoto={photo.url} titlePhoto={photo.title}/>
            </Modal>
        </>

    );
};

export default PhotoCard;