import React from "react";
import classnames from "classnames";
import "components/DayListItem.scss";

const formatSpots = function(spots){
  if(spots === 0){
    return "no spots remaining";
  }
  if(spots === 1){
    return "1 spot remaining";
  }
  return `${spots} spots remaining`;
}

export default function DayListItem(props) {

  let dayListItemClass = classnames("DayListItem","day-list__item", {
    "day-list__item--selected": props.selected,
     "day-list__item--full": props.full
   });

  return (
    <li onClick={()=>props.setDay(props.name)} className={dayListItemClass}>
      <h2 className="text--regular">{props.name}</h2> 
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
}



