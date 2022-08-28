import React from "react";
import cn from "classnames";
import styles from "./coinList.module.sass";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import avatarone from "../../assets/images/avatarone.png"
import chainIcon from "../../assets/images/chainIcon.png"
import riskRatingIcon from "../../assets/images/riskRatingIcon.png"
import SevenDVolIcon from "../../assets/images/SevenDVolIcon.png"

const CoinList = () => {
  return (
    <>
      <div className={cn(styles.coinListContainer)}>
        <ul className={cn(styles.coinList)}>
          <li className={cn(styles.coinListRow)}>
            {/* {Array.from({ length: 6 }).map((_, index) => (
                <div className={cn(styles.thItem)} key={index}>
                  <span>Table heading</span>
                </div>
              ))} */}
              <div className={cn(styles.thItem)}>
                <span>Coin</span>
                  <div>
                    <p>
                      <button>1H</button>
                      <button>24H</button>
                      {/* <span>1H</span>
                      <span>24H</span> */}
                    </p> 
                      {/* <Badge bg="secondary">24H</Badge> */}
                  </div>
              </div>
              <div className={cn(styles.thItem)}>
                <span>Price</span> <FontAwesomeIcon icon={faCircleInfo} />
              </div>
              <div className={cn(styles.thItem)}>
                <span>Chain</span> <FontAwesomeIcon icon={faCircleInfo} />
              </div>
              <div className={cn(styles.thItem)}>
                <span>Market cap</span> <FontAwesomeIcon icon={faCircleInfo} />
              </div>
              <div className={cn(styles.thItem)}>
                <span>Risk Rating</span> <FontAwesomeIcon icon={faCircleInfo} />
              </div>
              <div className={cn(styles.thItem)}>
                <span>Volume</span> <FontAwesomeIcon icon={faCircleInfo} />
              </div>
              <div className={cn(styles.thItem)}>
                <span>7d Vol</span> <FontAwesomeIcon icon={faCircleInfo} />
              </div>
          </li>
          {Array.from({ length: 3 }).map((_, index) => (
            <>
              <li key={index} className={cn(styles.coinListRow)}>
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
          ))}
        </ul>
      </div>
    </>
  );
};

export default CoinList;


  /* <th>
                <span>Coin</span>
                <div>
                  <span>
                    <Badge bg="secondary">1H</Badge>
                  </span>
                  <span>
                    <Badge bg="secondary">24H</Badge>
                  </span>
                </div>
              </th>
              <th>
                <span>Price</span> <FontAwesomeIcon icon={faCircleInfo} />
              </th>
              <th>
                <span>Chain</span> <FontAwesomeIcon icon={faCircleInfo} />
              </th>
              <th>
                <span>Market cap</span> <FontAwesomeIcon icon={faCircleInfo} />
              </th>
              <th>
                <span>Risk Rating</span> <FontAwesomeIcon icon={faCircleInfo} />
              </th>
              <th>
                <span>Volume</span> <FontAwesomeIcon icon={faCircleInfo} />
              </th>
              <th>
                <span>7d Vol</span> <FontAwesomeIcon icon={faCircleInfo} />
              </th> */

