import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./list.module.sass";


const List = ({titleText,listItemArr}) => {
  return (
    <>
      <div className={cn(styles.listcontainer)}>
        <div className={cn(styles.listTitle)}>
            <h6>{titleText}</h6>
        </div>
        <div className={cn(styles.listBody)}>
            <ul>
                {
                    listItemArr.map((listItem,i) => (<li key={i}><Link to={listItem.link}>{listItem.text}</Link></li>))
                }
            </ul>
        </div>
      </div>
    </>
  );
};

export default List;
