import React from "react";
import cls from "./Navbar.module.scss";
import { AppLink } from "../../../shared/ui/AppLink/AppLink";
import {useLocation} from "react-router-dom";


export const Navbar = () => {
  const location = useLocation()
  return (
    <div className={cls.Navbar} >
      <div className={cls.links}>
        <AppLink to={"/"} className={location.pathname === '/'? cls.active:''}>
          Каталог
        </AppLink>
        <AppLink to={"/favourites"} className={location.pathname === '/favourites'? cls.active:''}>
          Избранное
        </AppLink>
      </div>
    </div>
  );
};

export default Navbar;
