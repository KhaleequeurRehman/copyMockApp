import React from "react";
import Container from "react-bootstrap/Container";
import cn from "classnames";
import Header from "../../components/header";
import Footer from "../../components/footer";
import MainContent from "../../components/mainContent";
import { mainContentTitle2, filterButtonTwoText, ColsData2, rowsData2, screen2} from "../../constants/index";

const Desktop2 = () => {
  return (
    <>
      <Container fluid className={cn("px-0 mx-0")}>
        <Header />
        <MainContent mainContentTitleDataValue={mainContentTitle2} filterButtonTextValue={filterButtonTwoText} ColsDataValue={ColsData2} rowsDataValue={rowsData2} screenValue={screen2}/>
        <Footer />
      </Container>
    </>
  );
};

export default Desktop2;
