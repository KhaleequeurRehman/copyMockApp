import React, { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./mainContent.module.sass";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MainContentTitle from "../mainContentTitle";
import MainContentBody from "../mainContentBody";
import StatusBar from "../statusBar";

const MainContent = ({mainContentTitleDataValue,filterButtonTextValue,ColsDataValue,rowsDataValue,screenValue}) => {

  const [mainContentTitleData, setMainContentTitleData] = useState(mainContentTitleDataValue.desktop)
useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth < 576) {
        setMainContentTitleData(mainContentTitleDataValue.mobile)
    } 
    else {
        setMainContentTitleData(mainContentTitleDataValue.desktop)
    }
  }
  window.addEventListener("resize", handleResize)
}, [mainContentTitleData,mainContentTitleDataValue])
// }, [mainContentTitleData,mainContentTitleDataValue,filterButtonTextValue,ColsDataValue,rowsDataValue,screenValue])

  return (
    <>
      <div className={cn(styles.mainContent)}>
        <Row className={cn("px-0 mx-0")}>
          <Col className={cn("px-0 mx-0 col-11 mx-auto")}>
            <MainContentTitle
              titleHeadingTextWhite={mainContentTitleData.titleHeadingTextWhite}
              titleHeadingTextBlue={mainContentTitleData.titleHeadingTextBlue}
              titleSubHeadingText={mainContentTitleData.titleSubHeadingText}
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
            <MainContentBody filterButtonTextVal={filterButtonTextValue} ColsDataVal={ColsDataValue} rowsDataVal={rowsDataValue} screenVal={screenValue} />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default MainContent;










// import React, { useEffect, useState } from "react";
// import cn from "classnames";
// import styles from "./mainContent.module.sass";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import MainContentTitle from "../mainContentTitle";
// import MainContentBody from "../mainContentBody";
// import { mainContentTitle1 } from "../../constants";
// import StatusBar from "../statusBar";

// const MainContent = () => {
//   const [mainContentTitleData, setMainContentTitleData] = useState(mainContentTitle1.desktop)
// useEffect(() => {
//   const handleResize = () => {
//     if (window.innerWidth < 576) {
//         setMainContentTitleData(mainContentTitle1.mobile)
//     } 
//     else {
//         setMainContentTitleData(mainContentTitle1.desktop)
//     }
//   }
//   window.addEventListener("resize", handleResize)
// }, [mainContentTitleData])

//   return (
//     <>
//       <div className={cn(styles.mainContent)}>
//         <Row className={cn("px-0 mx-0")}>
//           <Col className={cn("px-0 mx-0 col-11 mx-auto")}>
//             <MainContentTitle
//               titleHeadingTextWhite={mainContentTitleData.titleHeadingTextWhite}
//               titleHeadingTextBlue={mainContentTitleData.titleHeadingTextBlue}
//               titleSubHeadingText={mainContentTitleData.titleSubHeadingText}
//             />
//           </Col>
//         </Row>
//         <Row className={cn("px-0 mx-0")}>
//           <Col className={cn("px-0 mx-0 col-11 mx-auto")}>
//             <StatusBar />
//           </Col>
//         </Row>
//         <Row className={cn("px-0 mx-0")}>
//           <Col className={cn("px-0 mx-0 col-11 mx-auto")}>
//             <MainContentBody />
//           </Col>
//         </Row>
//       </div>
//     </>
//   );
// };

// export default MainContent;
