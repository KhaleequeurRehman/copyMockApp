import React from "react";
import Pagination from "react-bootstrap/Pagination";
import styles from "./pagination.module.sass";
import cn from "classnames";

let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number}>
      {number}
    </Pagination.Item>,
  );
}
let itemsWithFirstAndLastOption = [<Pagination.First />,<Pagination.Prev />,...items,<Pagination.Next />,<Pagination.Last />];

const PaginationCmp = () => {
  return (
    <>
      <div className={cn(styles.paginationContainer)}>
        <div className={cn(styles.statusWrapper)}>
          <span>1 - 20 out of 50</span>
        </div>
        {/* <Pagination className={cn(styles.paginationcmp)} size="sm">{items}</Pagination> */}
        <Pagination className={cn(styles.paginationcmp)} size="sm">{itemsWithFirstAndLastOption}</Pagination>
        {/* <Pagination className={cn(styles.paginationcmp)}>
          <Pagination.First size="sm" />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item active>{3}</Pagination.Item>
          <Pagination.Item>{4}</Pagination.Item>
          <Pagination.Item>{5}</Pagination.Item>
          <Pagination.Last />
        </Pagination> */}
      </div>
    </>
  );
};

export default PaginationCmp;
