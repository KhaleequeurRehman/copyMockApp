import React from "react";
import Container from "react-bootstrap/Container";
import cn from "classnames";
import Header from "../../components/header";
import Footer from "../../components/footer";
import MainContent from "../../components/mainContent";
import styles from "./homePage.module.sass";

const index = () => {
  return (
    <>
      <Container fluid className={cn("px-0 mx-0")}>
        <Header />
        <MainContent />
        <Footer />
      </Container>
    </>
  );
};

export default index;
