
import cls from './ModalPhoto.module.scss'
import {FC} from "react";

interface ModalPhotoProps {
    urlPhoto:string;
    titlePhoto?:string;
    idPhoto?:string;
}

export const ModalPhoto:FC<ModalPhotoProps> = ({ urlPhoto,titlePhoto}) => {
    return (
        <div className={cls.ModalPhoto}>
            {urlPhoto && <img src={urlPhoto} alt={titlePhoto?titlePhoto:'Фото кота?'}/>}
        </div>
    );
};

export default ModalPhoto;