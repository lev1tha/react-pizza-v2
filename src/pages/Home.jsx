import { React, useState, useEffect, useContext } from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Pizza from "../components/PizzaBlock/Pizzas";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Pogination from "../components/Pogination";

import { SearchContext } from "../App";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId } from "../redux/slices/filterSlice";

function Home() {
  const dispatch = useDispatch();
  const { categoryId, sort } = useSelector((state) => state.filter);
  const sortType = sort.sortPropperty;

  const { inputChanged } = useContext(SearchContext);

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const onClickCategoty = (id) => {
    dispatch(setCategoryId(id));
  };

  useEffect(() => {
    setIsLoading(true);

    const order = sortType.includes("-") ? "asc" : "desc";
    const sortBy = sortType.replace("-", "");
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = inputChanged ? `&search=${inputChanged}` : "";

    fetch(
      `https://6520138d906e276284c3ff76.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    )
      .then((response) => response.json())
      .then((result) => {
        setItems(result);
        setIsLoading(false);
      });
  }, [categoryId, sortType, inputChanged, currentPage]);

  const pizzas = items.map((obj) => <Pizza key={obj.id} {...obj} />);
  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <>
      <div className="content__top">
        <Categories
          value={categoryId}
          onClickCategoty={(i) => onClickCategoty(i)}
        />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
      <Pogination onPageChange={setCurrentPage} />
    </>
  );
}

export default Home;
