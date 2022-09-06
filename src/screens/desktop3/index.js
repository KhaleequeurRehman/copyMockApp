import React from "react";
import Container from "react-bootstrap/Container";
import cn from "classnames";
import Header from "../../components/header";
import Footer from "../../components/footer";
import MainContent from "../../components/mainContent";
import { mainContentTitle3, filterButtonThreeText, ColsData3, rowsData3, screen3} from "../../constants/index";
const Desktop3 = () => {
  return (
    <>
      <Container fluid className={cn("px-0 mx-0")}>
        <Header />
        <MainContent mainContentTitleDataValue={mainContentTitle3} filterButtonTextValue={filterButtonThreeText} ColsDataValue={ColsData3} rowsDataValue={rowsData3} screenValue={screen3}/>
        <Footer />
      </Container>
    </>
  );
};

export default Desktop3;
