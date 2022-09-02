import React from "react";
import cn from "classnames";
import Navbar from "../navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Header = () => {
  return (
    <>
      <header>
        <Row className={cn("px-0 mx-0")}>
          <Col className={cn("px-0 mx-0")}>
            <Navbar />
          </Col>
        </Row>
      </header>
    </>
  );
};

export default Header;
