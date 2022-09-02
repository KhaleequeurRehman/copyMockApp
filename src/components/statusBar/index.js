import React from "react";
import cn from "classnames";
import styles from "./statusBar.module.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faStar } from "@fortawesome/free-solid-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
import dIconYellow from "../../assets/images/dIconYellow.png";
import vector from "../../assets/images/vector.png";

const StatusBar = () => {
  return (
    <>
      <div className={cn(styles.statusBar)}>
        <div className={cn(styles.statusBarColumnsWrapper)}>
          <div className={cn(styles.statusBarCol1)}>
            <span>
              <FontAwesomeIcon icon={faStar} />
            </span>
            <span className={cn(styles.statusText)}>Featured</span>
            {/* <span className={cn(styles.rightBorder)}></span> */}
          </div>
          <div className={cn(styles.statusBarCol2)}>
            <div className={cn(styles.statusBarListItem)}>
              <span className={cn(styles.statusBarlistItemNumber)}>#1</span>
              <span className={cn(styles.statusBarlistItemText)}>USDC</span>
              <span className={cn()}>
                <FontAwesomeIcon icon={faQuestionCircle} />
              </span>
            </div>
            <div className={cn(styles.statusBarListItem)}>
              <span className={cn(styles.statusBarlistItemNumber)}>#2</span>
              <span className={cn(styles.statusBarlistItemText)}>ETH</span>
              <span className={cn()}>
                <FontAwesomeIcon icon={faQuestionCircle} />
              </span>
            </div>
            <div className={cn(styles.statusBarListItem)}>
              <span className={cn(styles.statusBarlistItemNumber)}>
                <img src={dIconYellow} alt="diconyellow" /> #3
              </span>
              <span className={cn(styles.statusBarlistItemText)}>RING</span>
              <span className={cn()}>
                <FontAwesomeIcon icon={faQuestionCircle} />
              </span>
            </div>
            <div className={cn(styles.statusBarListItem)}>
              <span className={cn(styles.statusBarlistItemNumber)}>#1</span>
              <span className={cn(styles.statusBarlistItemText)}>MLK</span>
              <span className={cn()}>
                <FontAwesomeIcon icon={faQuestionCircle} />
              </span>
            </div>
            <div className={cn(styles.statusBarListItem)}>
              <span className={cn(styles.statusBarlistItemNumber)}>#2</span>
              <span className={cn(styles.statusBarlistItemText)}>USDC</span>
              <span className={cn()}>
                <FontAwesomeIcon icon={faQuestionCircle} />
              </span>
            </div>
          </div>
        </div>
        <div className={cn(styles.statusBarColumnsWrapper)}>
          <div className={cn(styles.statusBarCol1)}>
            <span>
              {/* <FontAwesomeIcon icon={faStar} /> */}
              <img src={vector} alt="vectoriconpic" />
            </span>
            <span className={cn(styles.statusText)}>Top Gainers</span>
            {/* <span className={cn(styles.rightBorder)}></span> */}
          </div>
          <div className={cn(styles.statusBarCol2)}>
            <div className={cn(styles.statusBarListItem)}>
              <span className={cn(styles.statusBarlistItemNumber)}>#1</span>
              <span className={cn(styles.statusBarlistItemText)}>WBTC</span>
              <span className={cn(styles.statusBarlistItemIconAndPercentage)}> 
                <FontAwesomeIcon icon={faCaretUp} />
                <span>80.5%</span>
              </span>
            </div>
            <div className={cn(styles.statusBarListItem)}>
              <span className={cn(styles.statusBarlistItemNumber)}>#2</span>
              <span className={cn(styles.statusBarlistItemText)}>BabyDoge</span>
              <span className={cn(styles.statusBarlistItemIconAndPercentage)}>
                <FontAwesomeIcon icon={faCaretUp} />
                <span>80.5%</span>
              </span>
            </div>
            <div className={cn(styles.statusBarListItem)}>
              <span className={cn(styles.statusBarlistItemNumber,styles.redText)}>#3</span>
              <span className={cn(styles.statusBarlistItemTex,styles.redText)}>FINN</span>
              <span className={cn(styles.statusBarlistItemIconAndPercentage)}>
                <FontAwesomeIcon className={cn(styles.ms5)} icon={faCaretUp} />
                <span>80.5%</span>
              </span>
            </div>
            <div className={cn(styles.statusBarListItem)}>
              <span className={cn(styles.statusBarlistItemNumber)}>#1</span>
              <span className={cn(styles.statusBarlistItemText)}>USDC</span>
              <span className={cn(styles.statusBarlistItemIconAndPercentage)}>
                <FontAwesomeIcon icon={faCaretUp} />
                <span>80.5%</span>
              </span>
            </div>
            {/* <div className={cn(styles.statusBarListItem)}>
              <span className={cn(styles.statusBarlistItemNumber)}>#2</span>
              <span className={cn(styles.statusBarlistItemText)}>USDC</span>
              <span className={cn()}>
                <FontAwesomeIcon icon={faQuestionCircle} />
              </span>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default StatusBar;

// <div className={cn(styles.statusBar)}>
//         <Container>
//           <Row className={cn("px-0 mx-0")}>
//             <Col className={cn("px-0 mx-0 col-12 col-md-6")}>
//               <Container>
//                 <Row className={cn("px-0 mx-0")}>
//                   <Col className={cn("px-0 mx-0 col-3")}>
//                     <span className="pe-3"><FontAwesomeIcon icon={faStar}/></span>
//                     <span>Featured</span>
//                   </Col>
//                   <Col className={cn("px-0 mx-0 col-9")}></Col>
//                 </Row>
//               </Container>
//             </Col>
//           </Row>
//         </Container>
//       </div>

// <div className={cn(styles.statusBar)}>
//       <Container>
//         <Row className={cn("px-0 mx-0")}>
//           <Col className={cn("px-0 mx-0 col-12 col-md-6")}>
//             <div className={cn(styles.statusBarColumnsWrapper)}>
//               <div className={cn(styles.statusBarCol1)}>
//                 <span>
//                   <FontAwesomeIcon icon={faStar} />
//                 </span>
//                 <span className={cn(styles.statusText)}>Featured</span>
//                 <span className={cn(styles.rightBorder)}></span>
//               </div>
//               <div className={cn(styles.statusBarCol2)}>
//                 <div className={cn(styles.statusBarListItem)}>
//                   <span className={cn(styles.statusBarlistItemNumber)}>
//                     #1
//                   </span>
//                   <span className={cn(styles.statusBarlistItemText)}>
//                     USDC
//                   </span>
//                   <span className={cn()}>
//                     <FontAwesomeIcon icon={faQuestionCircle} />
//                   </span>
//                 </div>
//                 <div className={cn(styles.statusBarListItem)}>
//                   <span className={cn(styles.statusBarlistItemNumber)}>
//                     #2
//                   </span>
//                   <span className={cn(styles.statusBarlistItemText)}>
//                     ETH
//                   </span>
//                   <span className={cn()}>
//                     <FontAwesomeIcon icon={faQuestionCircle} />
//                   </span>
//                 </div>
//                 <div className={cn(styles.statusBarListItem)}>
//                   <span className={cn(styles.statusBarlistItemNumber)}>
//                     <img src={dIconYellow} alt="diconyellow" /> #3
//                   </span>
//                   <span className={cn(styles.statusBarlistItemText)}>
//                     RING
//                   </span>
//                   <span className={cn()}>
//                     <FontAwesomeIcon icon={faQuestionCircle} />
//                   </span>
//                 </div>
//                 <div className={cn(styles.statusBarListItem)}>
//                   <span className={cn(styles.statusBarlistItemNumber)}>
//                     #1
//                   </span>
//                   <span className={cn(styles.statusBarlistItemText)}>
//                     MLK
//                   </span>
//                   <span className={cn()}>
//                     <FontAwesomeIcon icon={faQuestionCircle} />
//                   </span>
//                 </div>
//                 <div className={cn(styles.statusBarListItem)}>
//                   <span className={cn(styles.statusBarlistItemNumber)}>
//                     #2
//                   </span>
//                   <span className={cn(styles.statusBarlistItemText)}>
//                     USDC
//                   </span>
//                   <span className={cn()}>
//                     <FontAwesomeIcon icon={faQuestionCircle} />
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </Col>
//            <Col className={cn("px-0 mx-0 col-12 col-md-6 mt-2 mt-md-0")}>
//             <div className={cn(styles.statusBarColumnsWrapper)}>
//               <div className={cn(styles.statusBarCol1)}>
//                 <span>
//                   <FontAwesomeIcon icon={faStar} />
//                 </span>
//                 <span className={cn(styles.statusText)}>Featured</span>
//                 <span className={cn(styles.rightBorder)}></span>
//               </div>
//               <div className={cn(styles.statusBarCol2)}>
//                 <div className={cn(styles.statusBarListItem)}>
//                   <span className={cn(styles.statusBarlistItemNumber)}>#1</span>
//                   <span className={cn(styles.statusBarlistItemText)}>USDC</span>
//                   <span className={cn()}>
//                     <FontAwesomeIcon icon={faQuestionCircle} />
//                   </span>
//                 </div>
//                 <div className={cn(styles.statusBarListItem)}>
//                   <span className={cn(styles.statusBarlistItemNumber)}>#2</span>
//                   <span className={cn(styles.statusBarlistItemText)}>ETH</span>
//                   <span className={cn()}>
//                     <FontAwesomeIcon icon={faQuestionCircle} />
//                   </span>
//                 </div>
//                 <div className={cn(styles.statusBarListItem)}>
//                   <span className={cn(styles.statusBarlistItemNumber)}><img src={dIconYellow} alt="diconyellow" /> #3</span>
//                   <span className={cn(styles.statusBarlistItemText)}>RING</span>
//                   <span className={cn()}>
//                     <FontAwesomeIcon icon={faQuestionCircle} />
//                   </span>
//                 </div>
//                 <div className={cn(styles.statusBarListItem)}>
//                   <span className={cn(styles.statusBarlistItemNumber)}>#1</span>
//                   <span className={cn(styles.statusBarlistItemText)}>MLK</span>
//                   <span className={cn()}>
//                     <FontAwesomeIcon icon={faQuestionCircle} />
//                   </span>
//                 </div>
//                 <div className={cn(styles.statusBarListItem)}>
//                   <span className={cn(styles.statusBarlistItemNumber)}>#2</span>
//                   <span className={cn(styles.statusBarlistItemText)}>USDC</span>
//                   <span className={cn()}>
//                     <FontAwesomeIcon icon={faQuestionCircle} />
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </div>
