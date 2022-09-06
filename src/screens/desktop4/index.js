import React from "react";
import Container from "react-bootstrap/Container";
import cn from "classnames";
import Header from "../../components/header";
import Footer from "../../components/footer";
import MainContent from "../../components/mainContent";
import { mainContentTitle4, filterButtonFourText, ColsData4, rowsData4, screen4} from "../../constants/index";

const Desktop4 = () => {
  return (
    <>
      <Container fluid className={cn("px-0 mx-0")}>
        <Header />
        <MainContent mainContentTitleDataValue={mainContentTitle4} filterButtonTextValue={filterButtonFourText} ColsDataValue={ColsData4} rowsDataValue={rowsData4} screenValue={screen4}/>
        <Footer />
      </Container>
    </>
  );
};

export default Desktop4;
