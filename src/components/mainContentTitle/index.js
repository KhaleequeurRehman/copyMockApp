import React from "react";
import cn from "classnames";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import styles from "./mainContentTitle.module.sass";

const MainContentTitle = ({titleHeadingTextWhite,titleHeadingTextBlue,titleSubHeadingText}) => {
  return (
    <>
      <div className={cn(styles.mainContentTitleContainer)}>
        <h1>
          {titleHeadingTextWhite} <span>{titleHeadingTextBlue}</span>
        </h1>
        <h6>{titleSubHeadingText}</h6>
      </div>
    </>
  );
};

export default MainContentTitle;
