import React, { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./mainContentBody.module.sass";
import FilterButtonGroup from "../filterButtonGroup"
import CoinList from "../coinList"

const MainContentBody = ({filterButtonTextVal,ColsDataVal,rowsDataVal,screenVal}) => {
  const [filterButtonsText, setFilterButtonsText] = useState(filterButtonTextVal.desktop)

useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth < 576) {
        setFilterButtonsText(filterButtonTextVal.mobile)
    } 
    else {
        setFilterButtonsText(filterButtonTextVal.desktop)
    }
  }
  window.addEventListener("resize", handleResize)
}, [filterButtonsText,filterButtonTextVal])
// }, [filterButtonsText,filterButtonTextVal,ColsDataVal,rowsDataVal,screenVal])
  return (
    <>
      <div className={cn(styles.mainContentBodyContainer)}>
        <FilterButtonGroup filterButtonsText={filterButtonsText} />
        <CoinList ColsData={ColsDataVal} screen={screenVal} rowsData={rowsDataVal}/>
      </div>
    </>
  );
};

export default MainContentBody;














// import React, { useEffect, useState } from "react";
// import cn from "classnames";
// import styles from "./mainContentBody.module.sass";
// import FilterButtonGroup from "../filterButtonGroup"
// import CoinList from "../coinList"
// import {filterButtonTwoText, ColsData1} from "../../constants/index"
// import {rowsData1} from "../../constants/index"


// const MainContentBody = () => {
//   const [filterButtonsText, setFilterButtonsText] = useState(filterButtonTwoText.desktop)

// useEffect(() => {
//   const handleResize = () => {
//     if (window.innerWidth < 576) {
//         setFilterButtonsText(filterButtonTwoText.mobile)
//     } 
//     else {
//         setFilterButtonsText(filterButtonTwoText.desktop)
//     }
//   }
//   window.addEventListener("resize", handleResize)
// }, [filterButtonsText])

//   return (
//     <>
//       <div className={cn(styles.mainContentBodyContainer)}>
//         <FilterButtonGroup filterButtonsText={filterButtonsText} />
//         <CoinList ColsData={ColsData1} screen={2} rowsData={rowsData1}/>
//       </div>
//     </>
//   );
// };

// export default MainContentBody;
