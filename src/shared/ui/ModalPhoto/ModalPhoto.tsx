
import cls from './ModalPhoto.module.scss'
import {FC} from "react";

interface ModalPhotoProps {
    urlPhoto:string;
    titlePhoto?:string;
    idPhoto?:string;
}
//todo сделать вызов картинки с сервера
export const ModalPhoto:FC<ModalPhotoProps> = ({ urlPhoto}) => {
    return (
        <div className={cls.ModalPhoto}>
            {urlPhoto && <img src={urlPhoto} alt={''}/>}
        </div>
    );
};

export default ModalPhoto;