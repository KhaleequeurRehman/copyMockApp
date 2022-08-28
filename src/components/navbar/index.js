import React from "react";
import cn from "classnames";
import styles from "./navbar.module.sass";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NavbarCmp = () => {
  return (
    <>
      <div className={cn(styles.navcontainer)}>
        <Navbar bg="dark" variant="dark" expand="sm">
          <Container>
          <Navbar.Toggle className="ms-auto" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Form className="d-none d-sm-block ms-md-5">
              <FontAwesomeIcon icon={faSearch}/>
              <Form.Control
                type="search"
                placeholder="Search for collections..."
                className="px-5"
                aria-label="Search"
                size="sm"
              />
            </Form>
            <Nav className="ms-auto me-md-5">
              <Nav.Link><Link to="#Tokens">Tokens</Link></Nav.Link>
              <Nav.Link><Link to="#Miners">Miners</Link></Nav.Link>
              <Nav.Link><Link to="#NFT">NFT</Link></Nav.Link>
              <Nav.Link><Link to="#Contactus">Contact us</Link></Nav.Link>
            </Nav>
            <Form className="d-sm-none">
              <Form.Control
                type="search"
                placeholder="Search for collections..."
                className=""
                aria-label="Search"
                size="sm"
              />
            </Form>
          </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default NavbarCmp;
