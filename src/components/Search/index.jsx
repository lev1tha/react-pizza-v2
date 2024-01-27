import { React, useContext } from "react";

import style from "./index.module.scss";
import { SearchContext } from "../../App";

function SearchPage() {
  const { inputChanged, setInputChanged } = useContext(SearchContext);

  return (
    <div className={style.root}>
      <svg className={style.icons} viewBox="0 0 32 32">
        <title />
        <g id="search">
          <path d="M29.71,28.29l-6.5-6.5-.07,0a12,12,0,1,0-1.39,1.39s0,.05,0,.07l6.5,6.5a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,28.29ZM14,24A10,10,0,1,1,24,14,10,10,0,0,1,14,24Z" />
        </g>
      </svg>
      <input
        value={inputChanged}
        onChange={(event) => setInputChanged(event.target.value)}
        className={style.input}
        type="text"
        placeholder="Поиск пиццы ..."
      />
      {inputChanged && (
        <svg
          onClick={() => setInputChanged("")}
          className={style.clear}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
        </svg>
      )}
    </div>
  );
}

export default SearchPage