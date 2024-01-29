import {
  React,
  useState,
  useContext,
  useEffect,
  useRef,
  useCallback,
} from "react";

import debounce from "lodash.debounce";

import style from "./index.module.scss";

import { SearchContext } from "../../App";

function SearchPage() {
  const [value, setValue] = useState();
  const { inputChanged, setInputChanged } = useContext(SearchContext);
  const inputRef = useRef();

  const onClickClear = () => {
    setInputChanged("");
    setValue("")
    inputRef.current.focus();
  };

  const updateSearchValue = useCallback(
    debounce((str) => {
      setInputChanged(str);
    }, 250),
    []
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={style.root}>
      <svg className={style.icons} viewBox="0 0 32 32">
        <title />
        <g id="search">
          <path d="M29.71,28.29l-6.5-6.5-.07,0a12,12,0,1,0-1.39,1.39s0,.05,0,.07l6.5,6.5a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,28.29ZM14,24A10,10,0,1,1,24,14,10,10,0,0,1,14,24Z" />
        </g>
      </svg>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={style.input}
        type="text"
        placeholder="Поиск пиццы ..."
      />
      {value && (
        <svg
          onClick={() => onClickClear()}
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

export default SearchPage;
