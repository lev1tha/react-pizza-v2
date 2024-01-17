import { React, useState, useEffect } from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Pizza from "../components/PizzaBlock/Pizzas";
import Skeleton from "../components/PizzaBlock/Skeleton";

function Home() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0)
  const [sortType, setSortType] = useState(0)

  useEffect(() => {
    fetch("https://6520138d906e276284c3ff76.mockapi.io/items")
      .then((response) => response.json())
      .then((result) => {
        setItems(result);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      <div className="content__top">
        <Categories value = {categoryId} onClickCategoty={() => onClickCategoty(i)}/>
        <Sort />
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
