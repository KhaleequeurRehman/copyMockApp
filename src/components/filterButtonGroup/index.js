import React from "react";
import cn from "classnames";
import styles from "./filterButtonGroup.module.sass";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const FilterButtonGroup = () => {
  return (
    <>
      <div className={cn(styles.filterButtonGroupContainer)}>
        <ButtonGroup aria-label="Basic example">
          <Button className={cn(styles.filterBtn)} variant="dark">All</Button>
          <Button className={cn(styles.filterBtn)} variant="dark">Upcoming</Button>
        </ButtonGroup>
      </div>
    </>
  );
};

export default FilterButtonGroup;
