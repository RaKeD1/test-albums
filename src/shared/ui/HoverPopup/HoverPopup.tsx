import cls from './HoverPopup.module.scss'
import {FC, memo, ReactNode, useState} from "react";

interface HoverPopupProps {
    children:ReactNode ;
    popupContent:ReactNode;
    delay?: number;
}

 const HoverPopup:FC<HoverPopupProps> = memo((({ children, popupContent, delay = 200 }) => {

    const [isHovered, setIsHovered] = useState<boolean>(false);
    let timeoutId: NodeJS.Timeout;
     const handleMouseEnter = () => {
         clearTimeout(timeoutId);
         setIsHovered(true);
     };
     const handleMouseLeave = () => {
         timeoutId = setTimeout(() => {
             setIsHovered(false);
         }, delay);
     };


    return (
        <div
            className={cls.HoverPopup}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}
            {isHovered && (
            <div
                id="cursor-popup"
                className={cls.child}>
                {popupContent}
            </div>)
            }
        </div>

    )
}));

export default HoverPopup;