import { React, useState, useEffect, useContext } from "react";
import axios from "axios";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Pizza from "../components/PizzaBlock/Pizzas";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Pogination from "../components/Pogination";
import qs from "qs";
import { useNavigate } from "react-router-dom";

import { SearchContext } from "../App";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId, setCurrentPage } from "../redux/slices/filterSlice";

function Home() {
  const dispatch = useDispatch();
  const { categoryId, sort, currentPage } = useSelector(
    (state) => state.filter
  );

  const navigate = useNavigate();
  const { inputChanged } = useContext(SearchContext);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const sortType = sort.sortPropperty;

  const onClickCategoty = (id) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  useEffect(() => {
    setIsLoading(true);
    const order = sortType.includes("-") ? "asc" : "desc";
    const sortBy = sortType.replace("-", "");
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = inputChanged ? `&search=${inputChanged}` : "";

    axios
      .get(
        `https://6520138d906e276284c3ff76.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
      )
      .then((response) => {
        setItems(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });

    window.scrollTo(0, 0);
  }, [categoryId, sortType, inputChanged, currentPage]);

  useEffect(() => {
    const queryString = qs.stringify({
      sortPropperty: sort.sortPropperty,
      categoryId,
      currentPage,
    });
    navigate(`?${queryString}`);
  }, [categoryId, sortType, currentPage]);

  const pizzas = items.map((obj) => <Pizza key={obj.id} {...obj} />);
  const skeletons = [...new Array(4)].map((_, index) => (
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
      <Pogination currentPage={currentPage} onPageChange={onChangePage} />
    </>
  );
}

export default Home;
