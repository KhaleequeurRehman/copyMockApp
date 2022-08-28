import React from "react";
import cn from "classnames";
import styles from "./mainContent.module.sass";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MainContentTitle from "../mainContentTitle";
import MainContentBody from "../mainContentBody";
import { mainContentTitle1 } from "../../constants";
import StatusBar from "../statusBar";

const MainContent = () => {
  const { titleHeadingTextBlue, titleHeadingTextWhite, titleSubHeadingText } =
    mainContentTitle1;

  return (
    <>
      <div className={cn(styles.mainContent)}>
        <Row className={cn("px-0 mx-0")}>
          <Col className={cn("px-0 mx-0 col-11 mx-auto")}>
            <MainContentTitle
              titleHeadingTextWhite={titleHeadingTextWhite}
              titleHeadingTextBlue={titleHeadingTextBlue}
              titleSubHeadingText={titleSubHeadingText}
            />
          </Col>
        </Row>
        <Row className={cn("px-0 mx-0")}>
          <Col className={cn("px-0 mx-0 col-11 mx-auto")}>
            <StatusBar />
          </Col>
        </Row>
        <Row className={cn("px-0 mx-0")}>
          <Col className={cn("px-0 mx-0 col-11 mx-auto")}>
            <MainContentBody />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default MainContent;
