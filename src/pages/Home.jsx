import { React, useState, useEffect } from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Pizza from "../components/PizzaBlock/Pizzas";
import Skeleton from "../components/PizzaBlock/Skeleton";

function Home() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: "Популярности",
    sortPropperty: "raiting",
  });

  useEffect(() => {
    setIsLoading(true);

    const order = sortType.sortPropperty.includes("-") ? "asc" : "desc";
    const sortBy = sortType.sortPropperty.replace("-", "");
    const category = categoryId > 0 ? `category=${categoryId}` : "";

    fetch(
      `https://6520138d906e276284c3ff76.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`
    )
      .then((response) => response.json())
      .then((result) => {
        setItems(result);
        setIsLoading(false);
      });
  }, [categoryId, sortType]);

  return (
    <>
      <div className="content__top">
        <Categories
          value={categoryId}
          onClickCategoty={(i) => setCategoryId(i)}
        />
        <Sort
          value={sortType}
          onClickSort={(id) => {
            setSortType(id);
          }}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <Pizza key={obj.id} {...obj} />)}
      </div>
    </>
  );
}

export default Home;
