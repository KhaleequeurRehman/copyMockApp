import React from "react";
import cn from "classnames";
import styles from "./filterButtonGroup.module.sass";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const FilterButtonGroup = ({filterButtonsText}) => {
  return (
    <>
      <div className={cn(styles.filterButtonGroupContainer)}>
        <ButtonGroup aria-label="Basic example">
          <Button className={cn(styles.filterBtn)} variant="dark">{filterButtonsText.btn1Text}</Button>
          <Button className={cn(styles.filterBtn)} variant="dark">{filterButtonsText.btn2Text}</Button>
        </ButtonGroup>
      </div>
    </>
  );
};

export default FilterButtonGroup;
