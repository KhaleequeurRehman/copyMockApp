import React from "react";
import cn from "classnames";
import styles from "./coinList.module.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown, faCircleInfo, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import avatarone from "../../assets/images/avatarone.png"
import chainIcon from "../../assets/images/chainIcon.png"
import riskRatingIcon from "../../assets/images/riskRatingIcon.png"
import SevenDVolIcon from "../../assets/images/SevenDVolIcon.png"
import fishIcon from "../../assets/images/fishIcon.png"
import vector2 from "../../assets/images/vector2.png"
import PaginationCmp from "../pagination"

const CoinList = ({ColsData,screen, rowsData}) => {
  return (
    <>
      <div className={cn(styles.coinListContainer)}>
        <ul className={cn(styles.coinList)}>
          <li className={cn(styles.coinListRow)} style={{backgroundColor: "transparent"}}>
            {
              ColsData && ColsData.map((currentItem,i) => (
                i===0? (
                    <div className={cn(styles.thItem)} key={i}>
                        <span>{currentItem.colText}</span>
                        <div style={{display: `${currentItem.isHourStatusBox === true ? "block" : "none"}`}}>
                        <p>
                          <button>1H</button>
                          <button>24H</button>
                        </p> 
                      </div>
                    </div>
                )
                :
                (
                  <div className={cn(styles.thItem)} key={i}>
                     <span>{currentItem.colText}</span> <FontAwesomeIcon icon={faCircleInfo} style={{display: `${currentItem.isColIcon === true ? "block" : "none"}`}} />
                   </div>
                )
                  
              ))
            }
          </li>
          {
            screen === 2 ?
            <>
              {/* first row for desktop 2 start from here */}
                <li className={cn(styles.coinListRow)}>
                      <div className={cn(styles.tdItem)}>
                        <div className={cn(styles.col_first)}>
                          <div className={cn(styles.avatar_wrapper)}>
                            <img src={avatarone} alt="avatarpic" />
                          </div>
                          <div className={cn(styles.content_wrapper)}>
                            <div className={cn(styles.title_wrapper)}>
                              <span className={cn(styles.main_title)}>Sahib</span>
                              <span className={cn(styles.sub_title)}>SHIB</span>
                            </div>
                            <div className={cn(styles.body_wrapper)}>
                              <div className={cn(styles.status_detail_box1)}>
                                <FontAwesomeIcon icon={faCaretUp} />
                                <span>1H</span>
                                <span>80.5%</span>
                              </div>
                              <div className={cn(styles.status_detail_box2)}>
                                <FontAwesomeIcon icon={faCaretDown} />
                                <span>24H</span>
                                <span>-10.4%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={cn(styles.tdItem)}>
                        <div className={cn(styles.col_second)}>
                          <span>0.11$</span>
                        </div>
                      </div>
                      <div className={cn(styles.tdItem)}>
                        <div className={cn(styles.col_third)}>
                            <img src={chainIcon} alt="chainIcon" />
                            <FontAwesomeIcon icon={faEllipsisVertical}  />
                        </div>
                      </div>
                      <div className={cn(styles.tdItem)}>
                        <div className={cn(styles.col_fourth)}>
                          <span>10 M</span>
                        </div>
                      </div>
                      <div className={cn(styles.tdItem)}>
                        <div className={cn(styles.col_fifth)}>
                          <img src={riskRatingIcon} alt="riskRatingIcon" />
                        </div>
                      </div>
                      <div className={cn(styles.tdItem)}>
                        <div className={cn(styles.col_sixth)}>
                          <span>2.4K</span>
                        </div>
                      </div>
                      <div className={cn(styles.tdItem)}>
                        <div className={cn(styles.col_seventh)}>
                          <img src={SevenDVolIcon} alt="SevenDVolIcon" />
                        </div>
                      </div>
                </li>
            </>
            : screen === 3 ?
            <>
              {/* first row for desktop 3 start from here */}
                <li className={cn(styles.coinListRow)}>
                    <div className={cn(styles.tdItem)}>
                      <div className={cn(styles.col_first)}>
                        <div className={cn(styles.avatar_wrapper)}>
                          <img src={avatarone} alt="avatarpic" />
                        </div>
                        <div className={cn(styles.content_wrapper)}>
                          <div className={cn(styles.title_wrapper)}>
                            <span className={cn(styles.main_title)}>Sahib</span>
                            <span className={cn(styles.sub_title)}>SHIB</span>
                          </div>
                          <div className={cn(styles.body_wrapper)}>
                            <div className={cn(styles.status_detail_box1)}>
                              <FontAwesomeIcon icon={faCaretUp} />
                              <span>1H</span>
                              <span>80.5%</span>
                            </div>
                            <div className={cn(styles.status_detail_box2)}>
                              <FontAwesomeIcon icon={faCaretDown} />
                              <span>24H</span>
                              <span>-10.4%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={cn(styles.tdItem)}>
                      <div className={cn(styles.col_second)}>
                        <span>100,230 $</span>
                      </div>
                    </div>
                    <div className={cn(styles.tdItem)}>
                      <div className={cn(styles.col_third)}>
                          <img src={chainIcon} alt="chainIcon" />
                          <FontAwesomeIcon icon={faEllipsisVertical}  />
                      </div>
                    </div>
                    <div className={cn(styles.tdItem)}>
                      <div className={cn(styles.col_fourth)}>
                        <span>1 / 5 </span>
                      </div>
                    </div>
                    <div className={cn(styles.tdItem)}>
                      <div className={cn(styles.col_fifth)}>
                        <span>5%</span>
                      </div>
                    </div>
                    <div className={cn(styles.tdItem)}>
                      <div className={cn(styles.col_sixth)}>
                        <span>60 Days</span>
                      </div>
                    </div>
                    <div className={cn(styles.tdItem)}>
                      <div className={cn(styles.col_seventh)}>
                      <img src={riskRatingIcon} style={{minWidth: "36px"}} alt="riskRatingIcon" />
                        <img src={fishIcon} style={{minWidth: "22px",marginLeft: "6px"}} alt="fishIcon" />
                      </div>
                    </div>
                </li>
            </> 
            : screen === 4? 
             <>
                {/* first row for desktop 4 start from here */}
                  <li className={cn(styles.coinListRow)}>
                  <div className={cn(styles.tdItem)}>
                    <div className={cn(styles.col_first)}>
                      <div className={cn(styles.avatar_wrapper)}>
                        <img src={avatarone} alt="avatarpic" />
                      </div>
                      <div className={cn(styles.content_wrapper)}>
                        <div className={cn(styles.title_wrapper)}>
                          <span className={cn(styles.main_title)}>Sahib</span>
                          <span className={cn(styles.sub_title)}>BUSD</span>
                        </div>
                        <div className={cn(styles.body_wrapper)}>
                          <span className={cn(styles.status_badge)}> 1d 8h 30m</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={cn(styles.tdItem)}>
                    <div className={cn(styles.col_second)}>
                      <img src={vector2} alt="vector2" />
                    </div>
                  </div>
                  <div className={cn(styles.tdItem)}>
                    <div className={cn(styles.col_third)}>
                      <span style={{color:"#0066FF"}}>1 / 5</span>
                    </div>
                  </div>
                  <div className={cn(styles.tdItem)}>
                    <div className={cn(styles.col_fourth)}>
                      <span style={{color:"#F3F5F8"}}>5%</span>
                    </div>
                  </div>
                  <div className={cn(styles.tdItem)}>
                    <div className={cn(styles.col_fifth)}>
                      <span>N/A</span>
                    </div>
                  </div>
                  <div className={cn(styles.tdItem)}>
                    <div className={cn(styles.col_sixth)}>
                      <img src={riskRatingIcon} alt="riskRatingIcon" />
                      <img src={fishIcon} style={{minWidth: "22px",marginLeft: "6px"}} alt="fishIcon" />
                    </div>
                  </div>
                  <div className={cn(styles.tdItem)}>
                    <div className={cn(styles.col_seventh)}>
                    </div>
                  </div>
              </li>
             </> 
            : ""
          }
          
            {
              rowsData.map((v,i) => (
                <>
                  <li key={i} className={cn(styles.coinListRow)}>
                      <div className={cn(styles.tdItem)}>
                        <div className={cn(styles.col_first)}>
                          <div className={cn(styles.avatar_wrapper)}>
                            <img src={require(`../../assets/images/${v.col1avatarPath}`)} alt="avatarpic" />
                          </div>
                          <div className={cn(styles.content_wrapper)}>
                            <div className={cn(styles.title_wrapper)}>
                              <span className={cn(styles.main_title)}>{v.mainTitle}</span>
                              <span className={cn(styles.sub_title)}>{v.subTitle}</span>
                            </div>
                            <div className={cn(styles.body_wrapper)}>
                              <div className={cn(styles.status_detail_box1)}>
                                <FontAwesomeIcon icon={faCaretUp} />
                                <span>1H</span>
                                <span>{v.percentageText1}</span>
                              </div>
                              <div className={cn(styles.status_detail_box2)}>
                                <FontAwesomeIcon icon={faCaretDown} />
                                <span>24H</span>
                                <span>{v.percentageText2}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={cn(styles.tdItem)}>
                        <div className={cn(styles.col_second)}>
                          <span>0.11$</span>
                        </div>
                      </div>
                      <div className={cn(styles.tdItem)}>
                        <div className={cn(styles.col_third)}>
                        <img src={require(`../../assets/images/${v.col3imgPath}`)} alt="chainIcon" />
                            <FontAwesomeIcon icon={faEllipsisVertical}  />
                        </div>
                      </div>
                      <div className={cn(styles.tdItem)}>
                        <div className={cn(styles.col_fourth)}>
                          <span>10 M</span>
                        </div>
                      </div>
                      <div className={cn(styles.tdItem)}>
                        <div className={cn(styles.col_fifth)}>
                          <img src={riskRatingIcon} alt="riskRatingIcon" />
                        </div>
                      </div>
                      <div className={cn(styles.tdItem)}>
                        <div className={cn(styles.col_sixth)}>
                          <span>2.4K</span>
                        </div>
                      </div>
                      <div className={cn(styles.tdItem)}>
                        <div className={cn(styles.col_seventh)}>
                          <img src={require(`../../assets/images/${v.col7imgPath}`)} alt="col7imgPath" />
                        </div>
                      </div>
                  </li>
                </>
              ))
            }
        </ul>
        <PaginationCmp />
      </div>
    </>
  );
};

export default CoinList;





// function AdvancedExample() {
//   return (
//     <Pagination>
//       <Pagination.First />
//       <Pagination.Prev />
//       <Pagination.Item>{1}</Pagination.Item>
//       <Pagination.Ellipsis />

//       <Pagination.Item>{10}</Pagination.Item>
//       <Pagination.Item>{11}</Pagination.Item>
//       <Pagination.Item active>{12}</Pagination.Item>
//       <Pagination.Item>{13}</Pagination.Item>
//       <Pagination.Item disabled>{14}</Pagination.Item>

//       <Pagination.Ellipsis />
//       <Pagination.Item>{20}</Pagination.Item>
//       <Pagination.Next />
//       <Pagination.Last />
//     </Pagination>
//   );
// }

// export default AdvancedExample;