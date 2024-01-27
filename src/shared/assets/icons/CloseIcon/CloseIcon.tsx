import cls from './CloseIcon.module.scss'


export const CloseIcon = () => {
    return (
        <>
            <div className={cls.icon}>
                <span className={cls.line1}>
            </span>
                <span className={cls.line2}></span>
            </div>

        </>
    );
};

export default CloseIcon;