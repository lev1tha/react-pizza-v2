import { React, useState } from "react";

function Categories({ value, onClickCategoty }) {
  const [activeCategory, setActiveCategory] = useState();

  const categoryName = [
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
          {categoryName.map((item, index) => (
            <li
              key={index}
              onClick={() => onClickCategoty(index)}
              className={activeCategory === index ? "active" : ""}
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
