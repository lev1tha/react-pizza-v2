import React from 'react'
import ReactPaginate from "react-paginate";

import style from './pogination.module.scss'

const Pogination = () => {
  return (
    <ReactPaginate
    className={style.root}
    breakLabel="..."
    nextLabel=">"
    onPageChange={(event)=>console.log(event)}
    pageRangeDisplayed={8}
    pageCount={3}
    previousLabel="<"
    renderOnZeroPageCount={null}
  />
  )
}

export default Pogination 