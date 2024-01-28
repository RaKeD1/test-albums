import {FC, memo, ReactNode, useRef} from 'react';
import styles from './Modal.module.scss';
import classNames from 'classnames';
import useOnClickOutside from '../../lib/hooks/onClickOutside'
import CloseIcon from "../../assets/icons/CloseIcon/CloseIcon";

interface ModalProps {
    isActive: boolean;
    setIsActive: (value: boolean) => void;
    children:ReactNode;
}

const Modal: FC<ModalProps> = memo((({ isActive, setIsActive, children }) => {
    const ref = useRef<HTMLDivElement>(null);

    useOnClickOutside(ref, () => setIsActive(false));

    return (
        <div
            style={{ zIndex: !isActive ? -1 : 999 }}
            className={classNames(styles.action, { [styles.active]: isActive })}>
            <div ref={ref} className={classNames(styles.action__content, { [styles.active]: isActive })}>
                <button className={styles.action__close} onClick={() => setIsActive(false)} ><CloseIcon/></button>
                {children}
            </div>
        </div>
    );
}));

export default Modal;