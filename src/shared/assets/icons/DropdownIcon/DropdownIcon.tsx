import cls from './DropdownIcon.module.scss'


export const DropdownIcon = (isOpen: { isOpen:boolean }) => {
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

export default DropdownIcon;