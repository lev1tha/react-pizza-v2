import React from 'react'
import ReactPaginate from "react-paginate";

import styles from './pogination.module.scss'

const Pogination = ({onPageChange}) => {
  return (
    <ReactPaginate
    className={styles.root}
    breakLabel="..."
    nextLabel=">"
    onPageChange={(event)=> onPageChange(event.selected + 1)}
    pageRangeDisplayed={4}
    pageCount={3}
    previousLabel="<"
    renderOnZeroPageCount={null}
  />
  )
}

export default Pogination 