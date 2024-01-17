import React from "react";

import style from './notFound.module.scss'

function notFoundBlock() {
  return (
    <div className={style.root}> 
        <h1>
            <span>😕</span>
            <br />
            Ничего не найденно 
        </h1>
        <p className={style.descriptions}>К сожелению данная страницу отсутствует в нашем магазине</p>
    </div>
  );
}

export default notFoundBlock;
