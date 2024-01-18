import { React, useState } from "react";

function Categories({ value, onClickCategoty }) {

  const categoryes = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Острые",
    "Закрытые",
  ];

  return (
    <>
      <div className="categories">
        <ul>
          {categoryes.map((item, index) => (
            <li
              key={index}
              onClick={() => onClickCategoty(index)}
              className={value === index ? "active" : ""}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Categories;
