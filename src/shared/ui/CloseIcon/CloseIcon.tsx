import cls from './CloseIcon.module.scss'


export const CloseIcon = (isOpen: { isOpen:boolean }) => {
    return (
        <>
            <div className={cls.icon}>
                <span className={isOpen.isOpen ? cls.active : cls.disable}>
            </span>
                <span className={isOpen.isOpen ? cls.active2 : cls.disable2}></span>
            </div>

        </>
    );
};

export default CloseIcon;