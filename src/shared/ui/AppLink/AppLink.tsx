import {Link, LinkProps} from "react-router-dom";
import {FC} from "react";
import cls from './AppLink.module.scss'
import classNames from "classnames";


export const AppLink: FC<LinkProps> = (props) => {

    const {
        to,
        children,
        className,
        ...otherProps
    } = props;

    return (
        <Link
            className={classNames(className,cls.AppLink)}
            to={to}
            {...otherProps}
        >
            {children}
        </Link>
    );
};

export default AppLink;