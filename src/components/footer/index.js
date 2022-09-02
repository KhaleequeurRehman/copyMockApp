import React from "react";
import cn from "classnames";
import styles from "./footer.module.sass";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import List from "../list";
import {listItemArr1,listItemArr2,listItemArr3,titleText1,titleText2,titleText3} from '../../constants'

const FooterCmp = () => {
  return (
    <>
      <div className={cn(styles.footercontainer)}>
        <Row className={cn("px-0 mx-0")}>
          <Col className={cn("px-0 mx-0 d-none d-md-block")}>
          </Col>
          <Col className={cn("px-0 mx-0 col-12 col-md-9")}>
            <Container>
              <Row className={cn("px-0 mx-0")}>
                <Col className={cn("px-0 mx-0 col-6 col-md-4")}>
                  <List titleText={titleText1} listItemArr={listItemArr1} />
                </Col>
                <Col className={cn("px-0 mx-0 col-6 col-md-4")}>
                  <List titleText={titleText2} listItemArr={listItemArr2} />
                </Col>
                <Col className={cn("px-0 mx-0 col-6 col-md-4")}>
                  <List titleText={titleText3} listItemArr={listItemArr3} />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default FooterCmp;
