import React from "react";
import cn from "classnames";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./mainContentBody.module.sass";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import FilterButtonGroup from "../filterButtonGroup"
import CoinList from "../coinList"

const MainContentBody = () => {
  return (
    <>
      <div className={cn(styles.mainContentBodyContainer)}>
        <FilterButtonGroup />
        <CoinList />
      </div>
    </>
  );
};

export default MainContentBody;
