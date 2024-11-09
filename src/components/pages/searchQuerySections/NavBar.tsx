import React from "react";
import scss from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <section className={scss.NavBar}>
      <div className={scss.container}>
        <div className={scss.content}>
          <div className={scss.types}>
            <a href="">Все</a>
            <a href="">треки</a>
            <a href="">Плейлисты</a>
            <a href="">Альбомы</a>
            <a href="">Исполнители</a>
            <a href="">Профили</a>
            <a href="">Подкасты и шоу</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
